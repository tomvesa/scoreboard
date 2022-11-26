import React from "react";
import PropTypes from "prop-types";

const Stats = ( {players} ) => {
    const totalPlayers = players.length;
    const totalPoints = players.reduce((acc, item) =>{
                        return  acc += item.score;                     
                        }, 0)
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ totalPlayers }</td>
                </tr>
                <tr>
                    <td>Points:</td>
                    <td>{ totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )
}

Stats.propTypes = {
    player: PropTypes.arrayOf(PropTypes.shape( {
        score: PropTypes.number.isRequired,
    }))
};

export default Stats;