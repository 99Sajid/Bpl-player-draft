import React from 'react';

const AbailabePlayer = ({player}) => {
    return (
        <div>
            <div className='border-2 border-green-300 mt-4'> 
    <div className=" p-4 card bg-base-100  shadow-sm ">     
  <figure>
    <img className='w-[350px] h-[400px] rounded-2xl'
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

    
    <div class="flex justify-between mt-2">
      <p className='items-center font-semibold'>Price: <span>$1500000</span></p>
      <button class="btn ">Choose Player</button>
    </div>
  </div>
</div>
    
</div>
        </div>
    );
};

export default AbailabePlayer;