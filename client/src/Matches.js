import React,{useContext} from "react"
import{Context} from "./Context.js"


function Matches({item}){
    const {toMatch,matched,add} = useContext(Context)
    let show = false
    let dim = false
    let disabled = false
    
     if(toMatch.find(match=>match.id === item.id) || matched.find(match=>match.name === item.name)) show=true
     if(matched.find(match=>match.name === item.name)) dim=true
     if(toMatch.find(match=>match.id === item.id)) disabled=true

     
  return(
    <div> 
   <button className={dim ? "dimmed" : "item" }
     onClick={()=> add(item)}
      disabled={disabled}
     >{show && item.name}</button>
      
      </div>
    
  )
}
export default Matches