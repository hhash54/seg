import React from 'react';

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#1b1b2f',  // dark background for a modern and futuristic feel
  },
  hero: {
    textAlign: 'center',
    padding: '50px 0',
    color: '#fff',
    backgroundImage: 'linear-gradient(to right, #16222A, #3A6073)',  // a cool gradient for a lively feel
  },
  section: {
    padding: '20px',
    textAlign: 'center',
  },
  course: {
    margin: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    borderRadius: '10px',  // rounding corners for a smooth look
  },
  footer: {
    textAlign: 'center',
    padding: '20px 0',
    color: '#fff',
    backgroundColor: '#1b1b2f',  // matching the footer with the main background color
  },
};

const HomePage = () => {
  return (
    <main style={styles.main}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3em', marginBottom: '20px' }}>Learn to Play with Us</h1>
        <p>Join our learning platform and start your musical journey now!</p>
        <button style={{ fontSize: '1em', padding: '10px 20px', border: 'none', borderRadius: '3px', color: '#fff', backgroundColor: '#007BFF', cursor: 'pointer' }}>Start Learning Now</button>
      </section>

      {/* Featured Courses Section */}
      <section style={styles.section}>
        <h2 style={{ color: '#fff' }}>Featured Courses</h2>
        {["Piano for Beginners", "Intermediate Guitar"].map(course => (
          <div key={course} style={styles.course}>
            <h3>{course}</h3>
          </div>
        ))}
      </section>

      {/* Top Mentors Section */}
      <section style={styles.section}>
        <h2 style={{ color: '#fff' }}>Top Mentors</h2>
        {/* Map through mentor data */}
      </section>

      {/* Upcoming Live Classes Section */}
      <section style={styles.section}>
        <h2 style={{ color: '#fff' }}>Upcoming Live Classes</h2>
        {/* Map through live class data */}
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        {/* Add your legal links, social media links, and contact details here */}
      </footer>
    </main>
  );
};

export default HomePage;
