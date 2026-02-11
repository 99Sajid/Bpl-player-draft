import React from 'react';
import Navimg from '../../assets/logo.png';

const Navbar = ({Balance}) => {
    return (
        <div className=' mb-4'>
            <div className="navbar max-w-300 mx-auto p-4">
  <div className="flex-1 ">
    <a className="btn btn-ghost text-xl">
    <img src={Navimg} className="h-12 w-12 mr-2 inline-block" />
    </a>
  </div>
  <div className="flex items-center mr-4">
    <span className='mr-2'>{Balance}</span>
    <span className='mr-2'>Coin</span>
    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" className="h-6 w-6 ml-2 inline-block"/>
  </div>
</div>
        </div>
    );
};

export default Navbar;