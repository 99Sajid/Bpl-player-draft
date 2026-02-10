import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx';
import React,{Suspense, useState} from 'react';
import AbailablePlayers from './Components/AvailablePlayers/AbailablePlayers.jsx';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers.jsx';

const fetchPlayers = async () => {
  const res =await fetch('/Players.json');
  return res.json();
}
const PlayersResponse= fetchPlayers();
function App() {
  const [toggle,settoggle] =useState(true);
  const [Balance,setBalance]=useState(50000);
  // console.log(Balance);
  const [selectedplayer,setselectedplayer]=useState([]);
  // console.log(selectedplayer);
 
const handleRemovePlayer=(player)=>{
  // console.log(player);
  const selectedPlayers=selectedplayer.filter(p=>p.id!==player.id);
  setselectedplayer(selectedPlayers);
  setBalance(Balance+player.auctionValue);
}

  return (
    <>
    <Navbar Balance={Balance}></Navbar>
    <Banner></Banner>
    <div className='border-2 border-red-500 max-w-[1200px] mx-auto flex justify-between items-center mt-4'>
    {
      toggle===true?<><h2 className='text-xl font-semibold'>Available Players</h2></>:<><h2 className='text-xl font-semibold'>Selected Players</h2></>
    }

    <div>
    <button onClick={()=>settoggle(true)} className={`btn  p-2 rounded-l-xl rounded-r-0 ${toggle===true ? 'bg-[#E7FE29]' : ''}`}>Available</button>
    <button onClick={()=>settoggle(false)} className={`btn p-2 rounded-l-0 rounded-r-xl ${toggle===false ? 'bg-[#E7FE29]' : ''}`}>Selected<span>({selectedplayer.length})</span></button>
    </div>
    </div>
    {
      toggle === true ? <Suspense fallback={<div>Loading...</div>}>
      <AbailablePlayers Playersresponse={PlayersResponse} Balance={Balance} setBalance={setBalance} selectedplayer={selectedplayer} setselectedplayer={setselectedplayer}></AbailablePlayers>
    </Suspense> : <SelectedPlayers selectedplayer={selectedplayer} handleRemovePlayer={handleRemovePlayer}></SelectedPlayers>
    }
    

      
    </>
  )
}

export default App
