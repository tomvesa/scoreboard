import React, {  useRef  } from "react";
import PropTypes from "prop-types";

const AddPlayerForm = ( { addPlayer } ) =>{

    const playerInput = useRef();

    const handleSubmit = ( event ) =>{
        event.preventDefault();
        addPlayer( playerInput.current.value );
        event.currentTarget.reset()

    }

    return (
        <form onSubmit={ ( event ) => handleSubmit( event ) }>
            <input 
                type="text" 
                ref={ playerInput }
                placeholder="New player name"
                name="name" 
                id="add-player-name" 


            />
            <input 
                type="submit" 
                value="Add Player"    
                />    
        </form>
    )
}

AddPlayerForm.propTypes = {
    addPlayer : PropTypes.func
};

export default AddPlayerForm