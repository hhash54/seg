import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    paddingRight: '30px',
  },
  logoTitle: {
    marginRight: 'auto',
    paddingLeft: '20px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    
  },
  logo: {
    marginRight: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'color 0.3s',
    margin: '0 20px', 
  },
  linkHover: {
    color: '#FFD700',
  },
};

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoTitle}>
        <img style={styles.logo} src="logo_url_here" alt="Logo" /> {/* Replace "logo_url_here" with the url of your logo */}
        <h1>Virtuso</h1> {/* Replace "Title" with the title of your application */}
      </div>
      {['/', '/explore', '/lesson', '/dashboard'].map((path, index) => (
        <Link 
          key={path}
          to={path}
          style={
            hoverIndex === index
              ? { ...styles.link, ...styles.linkHover }
              : styles.link
          }
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {path === '/' ? 'Home' : path.slice(1)}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
