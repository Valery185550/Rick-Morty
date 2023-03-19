import React from 'react';
import styles from "./Character.module.css";
import { useParams } from 'react-router-dom';
import { useGetAllCharactersQuery } from '../../app/services/api.ts';
import InfoLine from '../../features/infoLine/InfoLine';
import GoBack from '../../features/goBack/GoBack';

export default function Character() {
    const params = useParams();
    const {
        data
    } = useGetAllCharactersQuery();
    const id:number = parseInt(params.id!); 

    const character = data?.find((character)=>character.id===id);

    return (
        <div className={styles.character}>
            <GoBack/>
            <img className={styles.character__img} src="/avatar.png"/>
            <p className={styles.character__name}>{character?.name}</p>
            <p className={styles.character__info}>Informations</p>
            <InfoLine header="Gender" value={character?.gender}/>
            <InfoLine header="Status" value={character?.status}/>
            <InfoLine header="Specie" value={character?.species}/>
            <InfoLine header="Origin" value={character?.origin?.name}/>
            <InfoLine header="Type" value={character?.type}/>
        </div>
    )
}
