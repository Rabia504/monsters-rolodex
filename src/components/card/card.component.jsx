import React from 'react';
import './card.styles.css';

export const Card = (props) =>{

    return <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2`} width="180" height="180" alt="monster"/>
    
    <h2>{props.monster.name}</h2>
    <h4>{props.monster.email}</h4>
     </div>
}
