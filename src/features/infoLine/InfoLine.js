import React from 'react';
import styles from "./InfoLine.module.css";

export default function InfoLine({header, value}) {
    if(value==""){
        value="Unknown";
    }
  return (
    <div className={styles.infoLine}>
        <p className={styles.infoLine__header}>{header}</p>
        <p className={styles.infoLine__text}>{value}</p>
    </div>
  )
}
