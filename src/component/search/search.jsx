import { Component } from "react";
import'./search-box.styles.css';

class Search extends Component{
    render(){

        const  {OnsearchChcahnge}=this.props
        return(
        
            <div className="search-box">
            <input  type="search" placeholder='search' 
            onChange={OnsearchChcahnge}></input> {/** insted using{this.OnsearchChange} we can use {OnsearchChange}because of destructuring*/}
            </div>  
        )
    }

}

export default Search;