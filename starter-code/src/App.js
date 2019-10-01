import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json'

function compareName(a, b){
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  return 0;
}
function comparePop(a, b){
  if (a.popularity < b.popularity){
    return 1;
  }
  if (a.popularity > b.popularity){
    return -1;
  }
  return 0;
}


class App extends Component {
  state = {
    celebs: contacts.splice(0,5)
  }
 
  
  
    loopNames = () =>{
      let actors = this.state.celebs.map((eachActor, i)=>{
        return(
          <tr key={i}>
          <td><img src={eachActor.pictureUrl} width="100" alt="" /></td>
          <td>{eachActor.name}</td>
          <td>{eachActor.popularity}</td>
          <td><button onClick={()=>this.deleteCeleb(i)}>Delete {i}</button></td>
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
    this.setState({
      celebs: [...this.state.celebs].sort(compareName)
    })
  }

  sortPop = () =>{
    this.setState({
      celebs: [...this.state.celebs].sort(comparePop)
    })
  }

  deleteCeleb = (index) =>{
    let celebList = [...this.state.celebs]
    celebList.splice(index,1)
    this.setState({
      celebs: celebList
    })
  }

  render() {


  
    return (
      <div>
        <h1>Iron Contacts</h1>

        <button onClick={this.randomCeleb} >Add Random Contact</button>
        <button onClick={this.sortName} >Sort By Name</button>
        <button onClick={this.sortPop} >Sort By Popularity</button>
        
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
