import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state = {
    celebs: contacts.splice(0,5)
  }
 
  
  
    loopNames = () =>{
      let actors = this.state.celebs.map((eachActor)=>{
        return(
          <tr>
          <td><img src={eachActor.pictureUrl} width="100" alt="" /></td>
          <td>{eachActor.name}</td>
          <td>{eachActor.popularity}</td>
          </tr>
        )
      })

      
return actors
    
  };

  randomCeleb = () =>{
    let allCelebs = [...this.state.celebs]
 let randomIndex = Math.floor(Math.random()*(allCelebs.length))
 allCelebs.push(contacts[randomIndex])
 this.setState({
     celebs: allCelebs
 })
    
  }

  sortName = () =>{
    
  }

  render() {


  
    return (
      <div>
        <h1>Iron Contacts</h1>

        <button onClick={this.randomCeleb} >Add Random Contact</button>
        <button onClick={this.randomCeleb} >Sort By Name</button>
        <button onClick={this.randomCeleb} >Sort By Popularity</button>
        
        <table> 
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.loopNames()}
        </table>
        
      </div>
    );
  }
}

export default App;
