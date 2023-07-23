import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatBox from '../components/ChatBox';
import LessonResources from '../components/LessonResources';

// Add a musical font and import the font link in your CSS or JS file
// `import 'https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap';`
const styles = {
  main: {
    fontFamily: 'Rock Salt, Arial, sans-serif', // updated font
    color: '#333',
    backgroundImage: 'url("/path/to/your/music/background/image.jpg")', // updated background to a music-themed image
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '2.5em',
    color: '#007BFF', // updated title color to be more vibrant
  },
  videoChatContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '80vh',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  },
  videoPlayer: {
    flex: 2,
    marginRight: '20px',
    borderRadius: '15px 0 0 15px',
    overflow: 'hidden',
  },
  chatBox: {
    flex: 1,
    borderRadius: '0 15px 15px 0',
    overflow: 'hidden',
  },
};

function InteractiveLessonPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Interactive Piano Lesson</h1>

      <div style={styles.videoChatContainer}>
        <div style={styles.videoPlayer}>
          <VideoPlayer />
        </div>
        <div style={styles.chatBox}>
          <ChatBox />
        </div>
      </div>

      <LessonResources />

      {/* Footer can be added here */}
    </main>
  );
}

export default InteractiveLessonPage;
