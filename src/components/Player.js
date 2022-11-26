import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";


const Player = ({name, id, removePlayer, score }) => {
    return (
      <div className="player">
      
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer( id )}>✖</button>
          { name }
        </span>
        <Counter 
          id={ id }
          score={  score } 
          //changeScore={ changeScore }
         // roundScore={ roundScore }

          />
      </div>
    );
  }

//prevent re-rendering of all players usin React.memo in export
// const playerPropsAreEqual = (prevProps, nextProps) => {
// return prevProps.score === nextProps.score;
// }

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removePlayer: PropTypes.func,
  score: PropTypes.number.isRequired,
 // roundScore: PropTypes.number.isRequired,
  //changeScore: PropTypes.func
}

export default Player;  