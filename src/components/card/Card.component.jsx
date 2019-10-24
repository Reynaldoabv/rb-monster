import React from 'react';
import './card.css';

const Card = (props) => {
    const {name, email, phone, website } = props.monster;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt="robot-img"/>
            <h3>{name}</h3>
            <h5> {email}</h5>      
            <h5>{phone}</h5>       
            <h5>{website}</h5>           
        </div>
    )
}

export default Card;