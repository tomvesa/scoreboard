import React, {useState} from "react";

const SaveRound = ({players, changeTotalScore, playersSort})=>{

    playersSort();
    
    return(
        <button onClick={ () => changeTotalScore() }>Save round</button>
    )
}

export default SaveRound