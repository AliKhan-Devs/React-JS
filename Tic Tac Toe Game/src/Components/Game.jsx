// Main file for the logic of the game

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// Import imags that we  will be inserting to the small squares when clicked 
import circle from '../Assests/o.png';
import cross from '../Assests/x.png';

// Import sounds 
import crossSound from '../Sounds/Cross.wav';
import circleSound from '../Sounds/Circle.mp3'
import win from '../Sounds/winner.wav'
import draw from '../Sounds/draw.wav'

// Create objects of the sounds 
let cross_sound = new Audio(crossSound);
let circle_sound = new Audio(circleSound);
let win_sound = new Audio(win);
let draw_sound = new Audio(draw);

// Create an array for storing the data of the o and x
let data = ['', '', '', '', '', '', '', '', ''];

// Main functios starts which we will be exporting

export default function Game(props) {

    //State for storing  player 1 information
    let [p1, setp1] = useState('');

    //State for storing player 2 information
    let [p2, setp2] = useState('')

    //State for storing the track of the total clicks
    let [count, setCount] = useState(0);

    //this will be true when the game win or draw condition is satisfied so we will lock the board and will not allow user to click more
    let [lock, setLock] = useState(false);

    // we used useref here to generate the random number once and then store it in chk and prevent ganeratin more random number throught the game because in use state the value of the chk may be updated 
    let chk = useRef(Math.floor(Math.random() * 10) + 1);

    // The title ref is mainly used to change the title when a uer when the game of when the game is draw
    let title = useRef(null);

    // The turn ref is used to change the the heading according to the player turn 
    let turn = useRef(null);

    // This ref is used for falling tickets when a user wins the game
    let ticketInterval = useRef(null);

    // This is used for navigating to the entry page when game is finished
    let navigate = useNavigate();

    useEffect(() => {

        // Check if the random number generated b/w 1-10 is less than equal to 5 then assign p1 the props.p1 or if props.p1 is empty then aassign Player 1 and vice versa for the others. This is to randomly choose the first player.

        if (chk.current <= 5) {
            setp1(props.p1 || 'Player 1')
            setp2(props.p2 || 'Player 2')
            console.log(chk, p1);
        }
        else if (chk.current > 5) {
            setp1(props.p2 || 'Player 2')
            setp2(props.p1 || 'Player 1')
            console.log(chk, p1);
        }
    })

    useEffect(() => {
        props.backSounds.play();
        return () => {
            props.backSounds.currentTime = 0;
            // Clear the interval of tickets when component unmounts
            clearInterval(ticketInterval.current);

        };
    }, [props.backSounds]);

    // Function for ticket creating 
    const createTicket = () => {
        const ticket = document.createElement('div');
        ticket.classList.add('ticket');
        ticket.style.left = `${Math.random() * 100}vw`;
        ticket.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        ticket.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(ticket);

        setTimeout(() => {
            ticket.remove();
        }, 5000);
    };

    const startFallingTickets = () => {
        ticketInterval.current = setInterval(createTicket, 200);
    };

    // This function will be called when a win condition is satisfied and will change the heading to the the win message along with the player name who winned the match
    const won = (data) => {
        turn.current.innerHTML = '';
        setLock(true);
        props.backSounds.pause();
        if (chk.current <= 5 && data === 'o') {
            title.current.innerHTML = `Congradulation ${p1}`
        }
        else if (chk.current <= 5 && data === 'x') {
            title.current.innerHTML = `Congradulation ${p2}`
        }
        else if (chk.current > 5 && data === 'o') {
            title.current.innerHTML = `Congradulation ${p1}`
        }
        else if (chk.current > 5 && data === 'x') {
            title.current.innerHTML = `Congradulation ${p2}`
        }
        win_sound.play();
        startFallingTickets();

    }

    // This function will be called each time when user click on a div and this will check weather any of the wining condition satisfies or not.

    const checkWin = () => {
        // initialy make the winner variable false and it will become true when any wining condition satisfies
        let winner = false

        // For checking wining condition row wise
        for (let i = 0; i < 3; i++) {

            if (data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== '') {
                won(data[i]);
                winner = true;
                break;
            }
        }

        // For checking wining condition coloum wise
        for (let j = 0; j < 9; j = j + 3) {

            if (data[j] === data[j + 1] && data[j] === data[j + 2] && data[j] !== '') {
                won(data[j]);
                winner = true;
                break;
            }
        }

        // For checking wining condition diagnal wise
        if (data[0] === data[4] && data[0] === data[8] && data[0] !== '') {
            won(data[0]);
            winner = true

        }
        else if (data[2] === data[4] && data[2] === data[6] && data[2] !== '') {
            won(data[2]);
            winner = true

        }

        // if non of the winig conditin satisfies and the number of turns are also 9 the match will consider to be draw
        if (!winner && count === 9) {

            title.current.innerHTML = 'OOPs The Match was Draw'
            props.backSounds.pause();
            props.backSounds.currentTime = 0;
            turn.current.innerHTML = ''
            draw_sound.play();

        }

    }


    // This toggle function will be called once a div is clicked inside it we will check which player turn is now and we will also increment count by 1 and then inside it we will call the check win function to check weather a wining condition is satisfied or not
    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (data[num] === '') {
            if (turn.current.innerHTML === `First turn is of ${p1}'s`) {
                turn.current.innerHTML = `Now ${p2}'s Turn`;
            }
            else if (turn.current.innerHTML === `First turn is of ${p2}'s`) {
                turn.current.innerHTML = `Now ${p1}'s Turn`;
            }

            else if (turn.current.innerHTML === `Now ${p2}'s Turn`) {
                turn.current.innerHTML = `Now ${p1}'s Turn`;
            }
            else {
                turn.current.innerHTML = `Now ${p2}'s Turn`
            }
        }

        if (count % 2 === 0) {
            // Prevent again clickinh on the same box on which we have already clicked
            if (data[num] === '') {
                circle_sound.play();
                e.target.innerHTML = `<img src='${circle}'>`;
                data[num] = 'o';
                setCount(++count);
            }
            else {
                return 0;
            }
        } else if (count % 2 !== 0 && data[num] === '') {
            cross_sound.play();
            console.log('the number is odd');
            e.target.innerHTML = `<img src='${cross}'>`;
            data[num] = 'x';
            setCount(++count);
        }

        checkWin();
    }

    // Reseet every thing when the reset button is clicked
    const reset = () => {
        props.backSounds.pause();
        props.backSounds.currentTime = 0;
        win_sound.pause();
        win_sound.currentTime = 0;
        clearInterval(ticketInterval.current);
        data = ['', '', '', '', '', '', '', '', ''];
        setp1('')
        setp2('')
        navigate('/');

    };

    return (
        <>
            {/* Main Container */}
            <div className="container">
                <h1 ref={title} className='title' >Tic Tac Toe Game in <span> React</span></h1>
                <h3 ref={turn}>{`First turn is of ${p1}'s`}</h3>

                {/* Board of the game */}
                <div className="board">
                    {/* Coloum 1 */}
                    <div className="col1">
                        <div className="boxes" onClick={(e) => { toggle(e, 0); }} ></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 1); }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 2); }}></div>
                    </div>
                    {/* Coloum 2 */}
                    <div className="col2">
                        <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                    </div>

                    {/* Coloum 3 */}
                    <div className="col3">
                        <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                    {/* Reset button */}
                    <button className='reset' onClick={reset}>Reset</button>
                </div>
            </div>

        </>
    )
}
