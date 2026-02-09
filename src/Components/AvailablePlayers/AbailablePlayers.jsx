import React from 'react';  
import { useState,useEffect } from 'react';
import AbailabePlayer from './AbailabePlayer.jsx';


const AbailablePlayers = ({Playersresponse,Balance,setBalance,selectedplayer,setselectedplayer}) => {
  const [Playersdata,setPlayersdata]=useState([]);

  useEffect(()=>{
    Playersresponse.then(data=>setPlayersdata(data))
  },[Playersresponse])
    return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 object-cover'>
{
  Playersdata.map(player=><AbailabePlayer key={player.id} player={player} Balance={Balance} setBalance={setBalance} selectedplayer={selectedplayer} setselectedplayer={setselectedplayer}/>)
}
    
  
</div>
        
    );
};

export default AbailablePlayers;