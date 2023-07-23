// src/pages/UserDashboard.js
import React, { useState } from 'react';

const styles = {
  main: {
    fontFamily: '"Rock Salt", Arial, sans-serif', // updated font
    color: '#333',
    backgroundImage: 'url(/path/to/your/music/background/image.jpg)', // replace with a musical-themed background
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  courseList: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  },
  courseCard: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#007BFF', // updated title color to match other titles
  },
  continueButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#28a745',
    cursor: 'pointer',
    marginRight: '10px',
  },
  unenrollButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#dc3545',
    cursor: 'pointer',
  },
  progressBar: {
    width: '100%',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#e9ecef',
  },
  progress: {
    height: '100%',
    borderRadius: '10px',
    backgroundColor: '#007BFF',
  },
};


const courses = [
  {
    title: 'Piano for Beginners',
    progress: 20,  // in percentage
  },
  {
    title: 'Intermediate Guitar',
    progress: 75,  // in percentage
  },
  // more course data...
];

const UserDashboard = () => {
  const [myCourses, setMyCourses] = useState(courses);

  const handleUnenroll = (courseTitle) => {
    setMyCourses(prevCourses => prevCourses.filter(course => course.title !== courseTitle));
  };

  return (
    <main style={styles.main}>
      <h1>My Dashboard</h1>

      <section style={styles.courseList}>
        {myCourses.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <h2 style={styles.courseTitle}>{course.title}</h2>

            <div style={styles.progressBar}>
              <div style={{...styles.progress, width: `${course.progress}%`}} />
            </div>

            <div>
              <button style={styles.continueButton}>Continue Learning</button>
              <button style={styles.unenrollButton} onClick={() => handleUnenroll(course.title)}>Unenroll</button>
            </div>
          </div>
        ))}
      </section>

      {/* Add footer here */}
    </main>
  );
};

export default UserDashboard;
