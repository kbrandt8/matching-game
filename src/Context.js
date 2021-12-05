import React,{useEffect,useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

  const [allItems,setAllItems] = React.useState([])
  const [matched, setMatched] = useState([])
  const [toMatch,setToMatch] = useState([])
  const [turns,setTurns] = useState(0)
  const[gameData,setGameData] = useState("Start Over?")

  const theItems = [
   {id:"1",name:"❤️"},
   {id:"2",name:"🖤"},
   {id:"3",name:"🤍"},
   {id:"4",name:"💙"},
   {id:"5",name:"💜"},
   {id:"6",name:"💛"},
   {id:"7",name:"❤️"},
   {id:"8",name:"🖤"},
   {id:"9",name:"🤍"},
   {id:"10",name:"💙"},
   {id:"11",name:"💜"},
   {id:"12",name:"💛"},
]

useEffect(()=>{
  shuffle(theItems)
setAllItems(theItems)
},[])

function startOver(){
  setTurns(0)
  setMatched([])
  setToMatch([])
  setGameData("Start Over?")
}

useEffect(()=>{
  let matchOne = toMatch[0]
  let matchTwo = toMatch[1]
  if(toMatch.length ===2  && matchOne.name === matchTwo.name){
     setMatched(prev=>([...prev,matchTwo]))
     setToMatch([])
  }

 if(toMatch.length=== 2){
  
    setTimeout(()=> setToMatch([]),500)
    
    setTurns(turns=> turns + 1)
  }
 if(matched.length===6){
    setGameData("You won! You used " + turns + " turns! Play again?")
  }
},[toMatch])


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


function add(item){
  toMatch.length<2 &&
  setToMatch(prev=> [...prev, item])
}


return (
  <Context.Provider value={{
allItems,
matched,
toMatch,
add,
startOver,
turns,
gameData
  }}>
      {children}
  </Context.Provider>
)
}

export {ContextProvider, Context}