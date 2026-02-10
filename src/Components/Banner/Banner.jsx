import React from 'react';

const Banner = () => {
    return (
        <div className='text-center items-center justify-center gap-4 p-4 border-2 border-red-500 '>
            <div><img className='w-[120px] h-[120px] mx-auto ' src="/src/assets/banner-main.png" alt="Banner" /></div>
            <div><h2 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2></div>
           <div> <p>Beyond Boundaries Beyond Limits</p></div>
            <div><button className='btn '>Clam Free Credit</button></div>
            </div>
    );
};

export default Banner;