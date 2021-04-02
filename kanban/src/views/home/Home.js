import React, { useEffect, useState, useContext } from 'react';
import styles from './Home.module.css';
import commonStyles from './../../common/styles/styles.module.css';
import { NavLink, Link } from 'react-router-dom';
import { getBoards } from '../../utils/data';
import { Alert } from '../../common/alert/Alert';
import { Loader } from '../../common/loader/Loader';
import { AuthContext } from '../../context/Auth';

export const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards(currentUser.email)
      .then((boards) => {
        setBoards(boards);
        setLoading(false);
      })
      .catch(() => {
        setBoards([]);
      });
  }, [currentUser]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
          <div className={styles.container}>
            <h2 className={commonStyles.title}>Boards</h2>
            {console.log(boards)}
          
            <div className={styles.boards}>
              {boards.map((board) => {
                return (
                  
                    <Link
                      to={'/board/' + board.id}
                      className={styles.board}
                      key={board.id}
                    >
                      <div className={styles.boardName}>{board.name}</div>


                    </Link>


                    
                  
                );
              })}
              <div className={styles.boards}>
                      <div className={styles.board} style={{ fontFamily: "Nunito", color: "grey" }} > <NavLink to="/createboard" style={{ textDecoration: "none", color: "grey" }}  >
                        +  Create  board
            </NavLink></div>
                    </div>
            </div>
          </div>

        )}
    </>
  );
};
