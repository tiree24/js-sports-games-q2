import React from 'react'

function Game(props) {
    return (
      <div className="Game">
        <h1>Welcome to {props.venue}</h1>
  <div className="stats">
       
  
        <div className="versus" >
          <h1>VS</h1>
        </div>
  
       
       </div>
  
      </div>
    )
  }
    
  export default Game;