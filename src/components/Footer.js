import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p>&copy; 2024 WeatherWise Inc. All rights reserved.</p>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.iconLink}><i className="fab fa-twitter"></i></a>
          <a href="#" style={styles.iconLink}><i className="fab fa-facebook-f"></i></a>
          <a href="#" style={styles.iconLink}><i className="fab fa-instagram"></i></a>
        </div>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" style={styles.link}>Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>www.flaticon.com</a></p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  socialIcons: {
    marginTop: '20px',
  },
  iconLink: {
    color: '#fff',
    fontSize: '24px',
    margin: '0 10px',
    textDecoration: 'none',
  }
};

export default Footer;
