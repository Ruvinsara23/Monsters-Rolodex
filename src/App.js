
import './App.css';
import {Component} from 'react';
import CardList from './component/CardList';
import Search from './component/search/search';

class App extends Component{
constructor(){
  super();
  this.state={
    monsters:[ ],
    searchFeild:'',


  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>this.setState(()=>{
    return {monsters:users};

  },()=>{console.log(this.state)}
  ))
}


OnsearchChcahnge= (event)=>{
  const searchFeild =event.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return{searchFeild};
  })}

render(){
  const{monsters,searchFeild}=this.state;// for destructuring this.state
  const{OnsearchChcahnge}=this;

  const filteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchFeild)//When you go to modifiy array create new one(immutability) 
  })

  
  return(
    <div className='App'>
    <h1 className='title'>Monsters Rorlodex</h1>
    <Search  OnsearchChcahnge={OnsearchChcahnge}/>
    <CardList monsters={filteredMonsters}/>
    </div>
    

    
  );
  }
}

export default App
