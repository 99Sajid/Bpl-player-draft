import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AbailabePlayer = ({player,Balance,setBalance,selectedplayer,setselectedplayer}) => {
     const [Selected, setSelected] = useState(true);

     const handleSelectPlayer=()=>{
        if(selectedplayer.length >= 6){
            toast("You can't select more than 6 players");
            return;
        }
        if(Balance >= player.auctionValue){
            const newBalance= Balance - player.auctionValue;
            setBalance(newBalance);
            setSelected(false);
            const newselectedplayer=[...selectedplayer,player];
            setselectedplayer(newselectedplayer);
            toast("Player selected successfully");
        }else{
            toast("You don't have enough balance to select this player");
            return;
        }
    }

    return (
        <div>
            <div className=' mt-4'> 
    <div className=" p-4 card bg-base-100  shadow-xl ">     
  <figure>
    <img className='w-87.5 h-87.5 rounded-2xl'
      src={player.img}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
  <div>
  <h3 className="font-semibold">Name: <span className='font-bold'>{player.name}</span></h3>
  </div>
  <div className='mt-2'>
  <p className='font-semibold'>Bangladesh</p>
  </div>
  <div className='flex justify-between mt-2'> 
  <p className='font-semibold'>Rating:</p>
  <p>8.5</p>
  </div>
  
  <div className='flex justify-between mt-2'>
  <p className='font-semibold'>Left-Hand-Bat</p>
  <p>Rigt-Hand-Ball</p>
  </div>

    
    <div className="flex justify-between mt-2">
      <p className='items-center font-semibold'>Price: $<span>{player.auctionValue}</span></p>
      <button className="btn"disabled={!Selected} onClick={handleSelectPlayer}> {Selected===true?"Chose Player" :"Selected"}</button>
    </div>
  </div>
</div>
    
</div>
        </div>
    );
};

export default AbailabePlayer;