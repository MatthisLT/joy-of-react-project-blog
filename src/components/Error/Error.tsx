import React from 'react';

import styles from './Error.module.css';

type ErrorProps = {
  title: string;
  message: string;
};

function Error({ title, message }: ErrorProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
