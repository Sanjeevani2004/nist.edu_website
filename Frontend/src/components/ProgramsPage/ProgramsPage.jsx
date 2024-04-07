import React from 'react';
import './ProgramsPage.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ComputerScienceCourseImg],
        title: 'Engineering Course',
        description: 'B.TECH. PROGRAM A Bachelor of Technology (B.Tech) is an academic degree conferred after completion of a four-year program of studies at an accredited university or institution. In India, this degree is regulated under three major bodies: University Grants Commission of India (UGC), All India Council for Technical Education (AICTE) and National Board of Accreditation (NBA). Admission to B.Tech courses is usually through a nation-wide engineering entrance examination. It is the most popular and highly valued skill-oriented course in India and abroad.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Master of Business Administration (MBA) degree is must for anybody interested in learning scientific approaches to management. To better organize and manage the commercial aspects of a large entity, the students must learn various areas of business such as accounting and financial management, business communication, business ethics and human resources management. MBA imparts a strong theoretical foundation in core business concepts, provides real-life business scenarios through internships, assignments and projects, polishes communication skills and enhances leadership skills.'
    },
    {
        id: 3,
        img: [HealthcareCourseImg],
        title: 'Science Course',
        description: 'With a conspicuous beginning in the Core building, the new laboratories, class rooms, and library were designed by the visionary faculty team. The research activities gradually increased, and the department attained formidable reputation for the effort of its teacher and its finest teaching in the state of Odisha.Under the School of Sciences there are three departments. Each of these department run both B. Sc.  Departments: Department of Pure and Applied Physics, Department of Chemistry, Department of Mathematics'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Skill Development Course',
        description: 'Employement Oriented Courses, Skill Development Courses, Summer Courses '
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'MTech Course',
        description: 'NIST started offering M.Tech programs since 2003. Ever since NIST has been reveling in a culture of learning by doing. Offered in six disciplines, the courses focus on analytical rigor, imagination and problem solving skill of highest order. The institution teaches how to tackle global challenges in the most precise scientific way. Known as the best engineering college for M.Tech courses in Odisha, NIST has pioneered teaching and learning in the campus and across the globe through its academic-industry liaisons and various research projects.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Phd',
        description: 'Ph.D is a doctoral program and the highest degree conferred by a university or institution of that capacity after completion of a thesis offering a significant new contribution to knowledge in the subject. And in Eastern India, NIST has been the institute of choice for research enthusiasts.'
    },
    
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>At NIST University, we're dedicated to providing top-quality education that empowers individuals to achieve their goals. Explore our diverse range of courses tailored to suit various interests and skill levels.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;