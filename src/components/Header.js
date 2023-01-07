import React  from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
import SaveRound from "./SaveRound";

const Header = ({ players, title, changeTotalScore, roundScore, playersSort }) => {
                 // this is destructuring props into variables      
    return (
      <header>        
        <Stats players={ players }/>
        <h1>{ title }</h1>
        <SaveRound 
          changeTotalScore={ changeTotalScore }
          players= { players }
          playersSort = { playersSort }
        />
        <Stopwatch /> 
      </header>
    );
  }

Header.propTypes = {
  title : PropTypes.string,
  players : PropTypes.arrayOf(PropTypes.object).isRequired,
  changeTotalScore : PropTypes.func.isRequired
}  

Header.defaultProps = {
  title : "Dashboard"
}

export default Header;