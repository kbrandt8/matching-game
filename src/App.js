import './App.css'
import React, {useContext} from "react"
import {Context} from "./Context"
import Matches from "./Matches"

function App(){
  
const {allItems,matched,add,startOver,turns,gameData} = useContext(Context)

  const items = allItems.map(item=>
  (<Matches key={item.id} item={item} onClick={()=>add(item)}/>))
  
  return(
  <div>   
      <h1>Matching Game</h1>
      <h1>Score: {matched.length}/6 Turns : {turns}</h1>
      <h2 onClick={()=>startOver()}>{gameData}</h2>
  <div className="container">
    
 {items}
    
 </div>
        
  </div>
    )
}

export default App;
