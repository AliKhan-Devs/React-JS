import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Import sounds that we will be playing 
import focous from '../Sounds/focous.wav'
// Create an object for the sound
let focousAud = new Audio(focous);

export default function Entry(props) {

    // player 1 and player 2 state 
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');

    // it will be used when we are redirecting to game page
    let navigate = useNavigate();

    // It will be called when the value of the first input changes
    const changep1 = (e) => {
        setP1(e.target.value);
    }

    // it will be called when the value of the second input changes
    const changep2 = (e) => {
        setP2(e.target.value);
    }

    // This function will be called when we focous on an input field
    const playMusic = () => {
        focousAud.play();
    }

    // when the submit function is clicked then we will pass the p1 and p2 valeus to the update functio that is present in the app.js file
    const handle = async () => {
        await props.update(p1, p2);
        navigate('/game');
    }
    
    return (
        <>
            <div className="container">
                <h1>Welcome to <span>Tic Tac Toe</span> Game</h1>
                <div className='entryform'>
                    <h2>Please Enter Players Details</h2>
                    <label htmlFor="player1">Player 1:</label>
                    <input onChange={changep1} id='p1' type="text" placeholder='Player 1' onFocus={playMusic} />
                    <label htmlFor="player2">Player 2:</label>
                    <input onChange={changep2} id='p2' type="text" placeholder='Player 2' onFocus={playMusic} />
                    <button className='btn' onClick={handle}>submit</button>
                </div>
            </div>
        </>
    )
}
