import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import React,{Suspense, useState} from 'react';
import AbailablePlayers from './Components/AvailablePlayers/AbailablePlayers.jsx';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers.jsx';

const fetchPlayers = async () => {
  const res =await fetch('/Players.json');
  return res.json();
}

function App() {
  const [toggle,settoggle] =useState(true);
 
const PlayersResponse= fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
    <div className='border-2 border-red-500 max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold'>Available Players</h1>

    <div>
    <button onClick={()=>settoggle(true)} className={`btn  p-2 rounded-l-xl rounded-r-0 ${toggle===true ? 'bg-[#E7FE29]' : ''}`}>Available</button>
    <button onClick={()=>settoggle(false)} className={`btn p-2 rounded-l-0 rounded-r-xl ${toggle===false ? 'bg-[#E7FE29]' : ''}`}>Selected<span>(0)</span></button>
    </div>
    </div>
    {
      toggle === true ? <Suspense fallback={<div>Loading...</div>}>
      <AbailablePlayers Playersresponse={PlayersResponse}></AbailablePlayers>
    </Suspense> : <SelectedPlayers></SelectedPlayers>
    }
    

      
    </>
  )
}

export default App
