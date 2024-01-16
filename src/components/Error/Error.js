import React from 'react';

import styles from './Error.module.css';

function Error({ title, message }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
