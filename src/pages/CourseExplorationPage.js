import React, { useState } from 'react';

const styles = {
  main: {
    fontFamily: 'Rock Salt, cursive', // Use a musical-themed font
    color: '#333',
    backgroundImage: 'linear-gradient(to right, #2b5876, #4e4376)',  // Musical-themed gradient background
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '50px 0', // Add padding for better spacing
  },
  search: {
    padding: '20px',
    width: '20%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f1f3f4',
    borderRadius: '10px',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    background: 'url(/path-to-music-icon.png) no-repeat scroll 7px 7px', // Add a musical search icon to the search bar
    paddingLeft: '40px', // Make room for the musical search icon
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '70%',
  },
  course: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '5px solid #2b5876', // Add border to images for more emphasis
  },
  courseInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#007BFF',
  },
  mentorName: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#6c757d',
  },
  seeMoreBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
    transform: 'translateY(0)', // Add transition for hover effect
    transition: 'transform 0.3s ease', // Add transition for hover effect
    ':hover': {
      transform: 'translateY(-3px)', // Add hover effect
    },
  },
  // Styling for popup
  popup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '500px',
    zIndex: '1000',
  },
  closeButton: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  registerButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
    marginTop: '10px',
    transform: 'translateY(0)', // Add transition for hover effect
    transition: 'transform 0.3s ease', // Add transition for hover effect
    ':hover': {
      transform: 'translateY(-3px)', // Add hover effect
    },
  },
};


const courses = [
    {
      title: 'Piano for Beginners',
      description: 'A comprehensive course for those who are just starting their musical journey.',
      mentor: 'John Doe',
      thumbnail: '/path-to-thumbnail-1.jpg',
      courseOutline: 'This is the course outline...',
      mentorBio: 'This is the mentor bio...',
    },
    {
      title: 'Intermediate Guitar',
      description: 'Boost your guitar skills with advanced techniques and music theory.',
      mentor: 'Jane Doe',
      thumbnail: '/path-to-thumbnail-2.jpg',
      courseOutline: 'This is the course outline...',
      mentorBio: 'This is the mentor bio...',
    },
    // more course data...
  ];
  
  const CourseExplorationPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});
  
    const handleOpenPopup = (content) => {
      setPopupContent(content);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <main style={styles.main}>
        <aside style={styles.search}>
          <input type="text" placeholder="Search courses..." style={styles.searchInput} />
          {/* Add faceted search options here */}
        </aside>
  
        <section style={styles.courseList}>
          {courses.map((course, index) => (
            <div key={index} style={styles.course}>
              <img src={course.thumbnail} alt={course.title} style={styles.courseImage} />
              <div style={styles.courseInfo}>
                <h2 style={styles.courseTitle}>{course.title}</h2>
                <p>{course.description}</p>
                <p style={styles.mentorName}>Mentor: {course.mentor}</p>
              </div>
              <button style={styles.seeMoreBtn} onClick={() => handleOpenPopup(course)}>See More</button>
            </div>
          ))}
        </section>
  
        {showPopup && (
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={handleClosePopup}>Close</button>
            <h2 style={styles.courseTitle}>{popupContent.title}</h2>
            <h3>Course Outline</h3>
            <p>{popupContent.courseOutline}</p>
            <h3>Mentor Bio</h3>
            <p>{popupContent.mentorBio}</p>
            <button style={styles.registerButton}>Register</button>
          </div>
        )}
      </main>
    );
  };
  
  export default CourseExplorationPage;