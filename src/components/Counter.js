import React from "react";
import Proptypes from 'prop-types';

const Counter = ({ id, score, changeScore, roundScore}) => {
  console.log(id, roundScore);


  let timeout;
  let interval;

  function clearTimers(){
    clearTimeout(timeout);
    clearInterval(interval);
}  

function changeValue(id, delta) {
  var el = document.getElementById( `num-${id}`);
  var value = parseInt(el.textContent);
  document.getElementById(`num-${id}`).textContent = value + delta;
}

function changeOnHold(id, delta){
  changeValue(id, delta);

  timeout = setTimeout(function() {
    interval = setInterval(function() {
      changeValue(id,delta);
    }, 50);    
  }, 300);
  
}

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ () => changeOnHold( id, -1 )}> - </button>
        <span className="counter-score round-score" id={`num-${id}`}> 0  </span>
        <button className="counter-action increment add" onMouseDown={ () => changeOnHold(id, +1) }
        onMouseUp={ ()=> clearTimers() } onMouseLeave={ ()=> clearTimers() }> + </button>
        <span className="counter-score total-score" >{ score }</span>
      </div>
    );
  
  }

Counter.propTypes = {
  id: Proptypes.number.isRequired,
  score : Proptypes.number.isRequired,
  //changeScore: Proptypes.func.isRequired,
  //roundScore : Proptypes.number.isRequired,
}

export default Counter;  