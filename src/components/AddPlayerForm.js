import React, { useState } from "react";

const AddPlayerForm = ( { addPlayer } ) =>{
    const [value, setValue] = useState("");

    const handleSubmit = ( event ) =>{
        event.preventDefault();
        addPlayer( value );
        setValue(""); //clear after player has been added
    }

    return (
        <form onSubmit={ ( event ) => handleSubmit( event ) }>
            <input 
                type="text" 
                value={ value }
                placeholder="New player name"
                name="name" 
                id="add-player-name" 
                onChange={ ( event ) => setValue( event.target.value )} 

            />
            <input 
                type="submit" 
                value="Add Player"    
                />    
        </form>
    )
}



export default AddPlayerForm