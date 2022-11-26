import React, { useState, useRef } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm-with-useRef";







const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1,
      roundScore: 0
    },
    {
      name: "Treasure",
      score: 0,
      id: 2,
      roundScore: 0
    },
    {
      name: "Ashley",
      score: 0,
      id: 3,
      roundScore: 0
    },
    {
      name: "James",
      score: 0,
      id: 4,
      roundScore: 0
    }   
  ]);


  const nextPlayerId = useRef( 5 );
  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

// const handleScorechange = ( id, delta ) => {
//   setPlayers(prevPlayers => prevPlayers.map(player => {
//     if (player.id === id) {
//       return {
//         name: player.name,
//         roundScore: player.roundScore + delta,
//         id: player.id,
//         score : player.score
//       }
//     }
//     return player;
//   }));
// } 


  
  const handleTotalScore = () => {
    
      setPlayers(prevPlayers => prevPlayers.map( player => {
               let getRoundScore = parseInt(document.getElementById(`num-${player.id}`).textContent);
               console.log(`${player.name}  ${getRoundScore} ${player.score + getRoundScore}`);
               return { 
                name: player.name,
                score: player.score + getRoundScore,
                id: player.id,
                roundScore : resetRound(player.id)               
 
                  }
       
      }));
  
  //reset all round scores 
  function resetRound(id){
      const scoreSpan = document.querySelector(`#num-${id}`);
      scoreSpan.textContent = "0";
      return 0;
  }
  

}
                 

  const handleAddPlayer = ( name )=>{
      setPlayers ( prevPlayers => [
            ...prevPlayers, 
          {
            name,
            score : 0,
            id : nextPlayerId.current,
            roundScore : 0
          }
      ] );
      nextPlayerId.current += 1;
  }                  

  return (
    <div className="scoreboard">
      <Header
        title= "scoreboard"
        players={ players }
        changeTotalScore={ handleTotalScore }
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={ player.name }
          score={ player.score }
          id={ player.id }
          //roundScore={ player.roundScore }
          key={ player.id.toString() }
          removePlayer={ handleRemovePlayer }
          //changeScore={ handleScorechange }
          
        />
      )}
      <AddPlayerForm 
         addPlayer={ handleAddPlayer }
      />
    </div>
  );

}

export default App;
