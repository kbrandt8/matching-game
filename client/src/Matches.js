import React,{useContext} from "react"
import{Context} from "./Context.js"


function Matches({item}){
    const {toMatch,matched,add} = useContext(Context)
    let show = false
    let dim = false

     if(toMatch.find(match=>match.id === item.id) || matched.find(match=>match.name === item.name)) show=true
     if(matched.find(match=>match.name === item.name)) dim=true

     
  return(
    <div> 
   <div className={dim ? "dimmed" : "item" }
     onClick={()=> add(item)} 
     >{show && item.name}</div>
      
      </div>
    
  )
}
export default Matches