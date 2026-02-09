import React from 'react';
import Navimg from '../../assets/logo.png';

const Navbar = ({Balance}) => {
    return (
        <div class='border-2 border-red-300 mb-4'>
            <div class="navbar max-w-[1200px] mx-auto">
  <div class="flex-1 ">
    <a class="btn btn-ghost text-xl">
    <img src={Navimg} class="h-12 w-12 mr-2 inline-block" />
    </a>
  </div>
  <div class="flex items-center mr-4">
    <span className='mr-2'>{Balance}</span>
    <span className='mr-2'>Coin</span>
    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" class="h-6 w-6 ml-2 inline-block"/>
  </div>
</div>
        </div>
    );
};

export default Navbar;