import React from 'react';
import styles from "./InputSearch.module.css";

export default function InputSearch({cards, setCards}) {
  return (
    <div className={styles.inputSearch}>
        <input className={styles.input} placeholder="Filter by name..." onChange={(e)=>{onInput(e,cards,setCards)}}/>
        <img src="/lupa.png" className={styles.lupa}/>
    </div>
    
    
  )
}

function onInput (e,cards,setCards){
  
  const inputeLowerCase = e.target.value.toLowerCase();
  if(inputeLowerCase===""){
    setCards(cards);
  }
  const newCards = cards?.filter((card)=>{
   
    if(card.name?.toLowerCase().indexOf(inputeLowerCase)===0){
      
      return true;
    }
  })

  setCards(newCards);
}