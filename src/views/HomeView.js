import React from 'react';
import styles from './HomeView.module.css';
import tree from '../img/27.png';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>HELLO! CREARE YOUR PERSONAL PHONEBOOK!!!</h1>
    <img className={styles.main_img} src={tree} alt="tree-icon" />
  </div>
);

export default HomeView;
