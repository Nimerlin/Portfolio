import React from 'react';
import styles from './styles.module.css'

const Card = ({title, description }) => {
  return (
    <div className={styles.card}>
      <b></b>
      <div className={styles.content}>
        <p className={styles.title}>{title}<br></br><span>{description}</span></p>
      </div>
    </div>
  );
};

export default Card;