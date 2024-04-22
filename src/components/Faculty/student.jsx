import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import './student.css'

const Studentadd = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [roll, setRoll] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [faculty, setFaculty] = useState('');
  const [attendedClasses, setAttendedClasses] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('students').add({
      name,
      phoneNo,
      roll,
      section,
      subject,
      faculty,
      totalClasses: 50,
      attendedClasses,
      date: new Date(),
    });
    setName('');
    setPhoneNo('');
    setRoll('');
    setSection('');
    setSubject('');
    setFaculty('');
    setAttendedClasses(0);
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
        <input
          type="number"
          placeholder="Attended Classes"
          value={attendedClasses}
          onChange={(e) => setAttendedClasses(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Studentadd;
