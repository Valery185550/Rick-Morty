import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./GoBack.module.css";

export default function GoBack() {
  return (
    <Link to="/" className={styles.goBack}>
        <pre className={styles.text} >GO BACK</pre>
        <img className={styles.img} src="/arrow_back.png" alt="arrow" />
    </Link>
  )
}
 