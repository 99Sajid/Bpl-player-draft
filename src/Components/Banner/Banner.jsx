import React from 'react';
import img from '/src/assets/banner-main.png';

const Banner = () => {
    return (
        <div className='relative overflow-hidden bg-black text-center items-center justify-center gap-4 p-4 text-white rounded-xl '>
        <div className='absolute -top-20 -right-20 w-60 h-60 bg-orange-400/40 rounded-full blur-xl'></div>
                <div className='absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/30 rounded-full blur-xl'></div>

        <div><img className='w-30 h-30 mx-auto ' src={img} alt="Banner" /></div>
            <div><h2 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2></div>
           <div> <p>Beyond Boundaries Beyond Limits</p></div>
            <div><button className='btn '>Clam Free Credit</button></div>
            </div>
    );
};

export default Banner;