import React, { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import { useGetAllCharactersQuery } from '../../app/services/api.ts';
import Card from '../../features/card/Card';
import InputSearch from '../../features/input/inputSearch/InputSearch';
import GoogleButton from '../../features/googleButton/GoogleButton';


export function Home() {

    const {
        data
    } = useGetAllCharactersQuery();

    const [cards, setCards] = useState([]);
   
    useEffect(()=>{setCards(data)}, [data]);
    
    
    return (
    <div className={styles.home}>
        <img className={styles.imgHeader} src='/Rick_Morty.png'/>
        <div className={styles.find}>
            <InputSearch setCards={setCards} cards={data}/>
            
            <div className={styles.cards} >
                {
                    
                    cards?.length===0?null :cards?.map( (character)=> <Card key={character?.id} name={character?.name} species={character?.species} id={character?.id}></Card>)
                    
                }
            </div>
        </div>
        <GoogleButton/>
    </div>
  )
}
