import React from 'react';

const styles = {
  container: {
    border: '1px solid #007BFF', // updated border color to match title
    borderRadius: '10px',
    padding: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    overflow: 'hidden',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s ease',
  },
  listItemHover: {
    backgroundColor: '#f0f0f0',
  },
  title: {
    textAlign: 'center',
    color: '#007BFF', // updated title color to match other titles
  },
};

function LessonResources() {
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const resources = [
    'Resource 1',
    'Resource 2',
    'Resource 3',
    // Add more resources as needed
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lesson Resources</h2>
      <ul style={styles.list}>
        {resources.map((resource, index) => (
          <li
            key={index}
            style={
              hoverIndex === index
                ? { ...styles.listItem, ...styles.listItemHover }
                : styles.listItem
            }
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {resource}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LessonResources;
