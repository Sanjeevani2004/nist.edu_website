import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import axios from 'axios'; 
import './faculty.css'
import Studentadd from './student.jsx'
const Faculty = () => {
  const [students, setStudents] = useState([]);
  const [totalClasses, setTotalClasses] = useState(50);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentsData = [];
      querySnapshot.forEach((doc) => {
        studentsData.push({ ...doc.data(), id: doc.id, totalClasses });
      });
      setStudents(studentsData);
    };
    fetchStudents();
  }, []);

  const markPresent = async (studentId) => {
    const studentDoc = doc(db, 'students', studentId);
    const student = students.find((s) => s.id === studentId);
    await updateDoc(studentDoc, {
      attendedClasses: student.attendedClasses + 1,
      totalClasses: student.totalClasses + 1,
    });
    setStudents(
      students.map((s) =>
        s.id === studentId
          ? { ...s, attendedClasses: s.attendedClasses + 1, totalClasses: s.totalClasses + 1 }
          : s
      )
    );
  };

  const markAbsent = async (studentId, phoneNumber) => {
    const studentDoc = doc(db, 'students', studentId);
    const student = students.find((s) => s.id === studentId);
    await updateDoc(studentDoc, {
      totalClasses: student.totalClasses + 1,
    });
    setStudents(
      students.map((s) =>
        s.id === studentId ? { ...s, totalClasses: s.totalClasses + 1 } : s
      )
    );

    // Send SMS when a student is marked as absent
    try {
      const response = await axios.post('/absent', { phoneNumber });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div className="faculty-container">
      <h1>Faculty Dashboard</h1>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Total Classes</th>
            <th>Attended Classes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.totalClasses}</td>
              <td>{student.attendedClasses}</td>
              <td>
                <button className="present-btn" onClick={() => markPresent(student.id)}>
                  Present
                </button>
                <button className="absent-btn" onClick={() => markAbsent(student.id, student.phoneNumber)}>
                  Absent
                </button>
              </td>
            </tr>
          ))}
           
        </tbody>
      </table>
      <Studentadd />
    </div>
   
    
  );
};

export default Faculty;
