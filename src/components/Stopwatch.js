import React, {useState, useEffect} from "react";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState( false );
    const [elapsedTime, setElapsedTime] = useState( 0 );

    useEffect(
                () => { 
                    let timer;
                    if(isRunning){
                       timer = setInterval( () => setElapsedTime( prevTime => prevTime + 1 ), 1000);                       
                    } 

                    return () =>  clearInterval( timer );
                },
                [isRunning]
                );

        // clearInterval needs a reference of what to clear => create variable to assign setInterval func and then clear the variable
        // use effect takes in 2 arguments, side Effect function and when to run it at what state, here when isRunning state is changed        

    return (
        <div className="stopwatch">
            <h2>StopWatch</h2>
            <span className="stopwatch-time"> 
                { elapsedTime }
            </span>
            <button onClick={ () => setIsRunning(( prevState ) => !prevState) }>
                { isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={ () => setElapsedTime( 0 ) }>Reset</button>
        </div>
    )
}

export default Stopwatch