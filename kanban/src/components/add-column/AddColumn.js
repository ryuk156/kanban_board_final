import React, { useState } from 'react';
import { Modal } from '../../common/modal/Modal';
import styles from './AddColumn.module.css';
import commonStyles from './../../common/styles/styles.module.css';

export const AddColumn = ({ handleAdd, handleClose }) => {
  const [columnName, setColumnName] = useState('');

  function handleAddCloumn() {
    if (!columnName) {
      return alert('Enter a Group name');
    }

    handleAdd(columnName);
  }

  return (
    <Modal>
      <div className={styles.modalHead}>
       <center> <div style={{display:"flex",fontFamily:"Pacifico",color:"#ef5350"}}>Add Group</div> </center>
        <div className={styles.close} onClick={handleClose}>
          &times;
        </div>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.field}>
          
          <input
            type="text"
            placeholder="eg. Group 1"
            value={columnName}
            name="column_name"
            id="column_name"
            onChange={e => setColumnName(e.target.value)}
          />
        </div>
        <div className={styles.action}>
          <button
            id="CreateColumn"
            onClick={handleAddCloumn}
            className={commonStyles.danger}
          >
           + Add Group
          </button>
        </div>
      </div>
    </Modal>
  );
};
