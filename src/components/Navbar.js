import React from 'react';
import logo from './v2_69.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navbarNav}>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Profile</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333', 
    padding: '10px', 
    display: 'flex',
    alignItems: 'center', 
  },
  logoContainer: {
    marginRight: '20px', // Spacing between logo and navbar links
  },
  logo: {
    width: '200px', 
    height: 'auto', 
  },
  navbarNav: {
    listStyleType: 'none', 
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: 'inline-block', // Display list items horizontally
    marginRight: '10px', // Spacing between each list item
  },
  navLink: {
    color: 'white', // Color of the links
    textDecoration: 'none', // Remove underline from links
    fontSize: '16px', // Font size of the links
    fontWeight: 'bold', // Font weight of the links
  }
};

export default Navbar;
