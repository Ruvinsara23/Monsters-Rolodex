import {Component} from 'react';
import './card.styles.css'

class Card extends Component{
 render(){
    const{email,id,name}=this.props.monsters;
            return<div className='card-container '>
            <img alt={`monster${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
            <h1>{name}</h1>
            <p>{email}</p>
            </div>

    
 }
  


}

export default Card;