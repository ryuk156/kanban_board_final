import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { AuthContext } from '../../context/Auth';
import { firebaseApp } from '../../firebase/init';

export const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);
  function toggleDropdown() {
    setIsDropdown(!isDropdown);
  }

  async function handleLogout() {
    await firebaseApp.auth().signOut();
    setIsDropdown(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <NavLink to="/">
            Kanban Board</NavLink>
        </div>
        <ul className={styles.menu}>
          {currentUser ? (
            <>
              <li>
                <NavLink exact  activeClassName={styles.activeLink} to="/">
                  Home
                </NavLink>
              </li>
              
              
              <li className={styles.initial}>
                <div style={{height:"80px",marginTop:"10px"}}>
                {currentUser.email.charAt(0)}
                </div>
               
                
                
                </li>
               
                
              
              
              <li  className={styles.signOut} >
                <div to="/"  onClick={handleLogout}>
               Sign out 
              </div>
              </li>
            </>
          ) : (
            <>
              <li>
              
              <NavLink activeClassName={styles.activeLink}  to="/login">
              Login  
                </NavLink>
            
               
              </li>
              <li>
                <NavLink activeClassName={styles.activeLink} to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
        
        
        
      </nav>
    </header>
  );
};
