import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

export default function Card({name, species, id}) {

  if(name.length>20){
    name=name.substring(0,19)+"...";
  }

  return (
    <Link to={"/character/" + id} className={styles.card}>
      <img className={styles.card__img} src="/card_image.png" />
      <div className={styles.card__text}>
        <p className={styles.text__name}>{name}</p>
        <p className={styles.text__species}>{species}</p>
      </div>
    </Link>
  )
}
