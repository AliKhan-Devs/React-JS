import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Game from './Components/Game';
import Entry from './Components/Entry';
import background from './Sounds/background.mp3'

function App() {
  // States for Player 1 and Player 2
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  // background sound
  const backSounds = new Audio(background)
  
  // Update function to update the states of player 1 and player 2
  const update = (p1, p2) => {
    setPlayer1(p1);
    setPlayer2(p2);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Entry update={update} backSounds={backSounds} />} />
          <Route exact path="/game" element={<Game p1={player1} p2={player2} backSounds={backSounds} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
