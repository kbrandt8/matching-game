import './App.css'
import React, { useContext } from "react"
import { Context } from "./Context"
import Matches from "./Matches"


function App() {

  const {
    allItems,
    matched,
    add,
    startOver,
    turns,
    gameData,
    send,
    scores,
    sendScore,
    handleChange,
    show,
    toggle,
  loading } = useContext(Context)

  const items = allItems.map(item =>
    (<Matches key={item.id} item={item} onClick={() => add(item)} />))
  const theScores = scores.sort((a, b) => a.turns - b.turns)

  return (
    <div>
{ loading &&     <div className='loading'>
        <h4>Matching Game <br/>
           <div class="lds-heart"><div></div></div>
           <div class="lds-heart"><div></div></div>
           <div class="lds-heart"><div></div></div>
      
        </h4></div>
      }
      <nav className={show ? `bigScreen` : `smallScreen`}>
        <h1>High scores
             <button onClick={toggle}>{show ? `Hide` : `View`}</button>
     </h1>
        <ul>
          {theScores.map(score =>
            <li>
              <div>{score.name}:</div>
              <div>{score.turns}</div>
            </li>
          )}
        </ul></nav>

<main>
      <h1>Matching Game</h1>

      <h2>Score: {matched.length}/6 Turns : {turns}</h2>

      <h3 onClick={() => startOver()}>{gameData}</h3>

      {send &&
        <h3>
          <input type="text" onChange={handleChange} placeholder='Name' />
          <button onClick={sendScore}>Send Score?</button>
        </h3>}

      <div className="container">

        {items}

      </div>
</main>
    </div>
  )
}

export default App;
