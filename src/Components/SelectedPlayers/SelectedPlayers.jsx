import React from 'react';

const SelectedPlayers = ({selectedplayer}) => {
    return (
        <div>
            <h1>Selected Players</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {selectedplayer.map(player=><div key={player.id} className='border-2 border-green-300 p-4'>
                    <img className='w-[350px] h-[400px] rounded-2xl' src={player.img} alt={player.name}></img>
                    <h2 className='font-bold'>{player.name}</h2>
                    <p>{player.auctionValue}</p>
                </div>)}
            </div>
        </div>
    );
};

export default SelectedPlayers;