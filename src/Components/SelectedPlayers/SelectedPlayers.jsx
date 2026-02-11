import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const SelectedPlayers = ({selectedplayer, handleRemovePlayer, settoggle}) => {
    return (  
        <div>         
            <div className='grid grid-cols-1 gap-4 pt-4'>
                {selectedplayer.map(player=> <div key={player.id} className='border-2 border-green-300 w-full p-2 flex items-center gap-4 rounded-lg'>
                <div>
                    <img className='w-20 h-20 rounded-xl' src={player.img} alt={player.name}></img> 
                </div>
                <div className='flex justify-between w-full items-center '>
                    <div>
                    <h2 className='font-bold'>{player.name}</h2>
                    <p>{player.status}</p>
                    </div>
                    <div >
                    <FontAwesomeIcon icon={faTrash} onClick={()=>handleRemovePlayer(player)} className="fa-trash-can cursor-pointer" />
                    </div>
                    </div>
                </div>)}

            
            </div>
            <button onClick={()=>settoggle(true)} className="btn btn-primary mt-4">Confirm Team</button>
            </div>
    );
};

export default SelectedPlayers;