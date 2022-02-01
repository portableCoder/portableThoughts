import React from 'react';
import { GiCardboardBoxClosed } from 'react-icons/gi'
const Header = () => {
  return <header className='flex w-full text-xl md:text-3xl font-bold py-1 px-3  md:py-2 md:px-6 text-white '>
      <div className='flex items-center justify-center gap-x-1'>
        <i className='m-auto md:my-0'><GiCardboardBoxClosed/></i>
        <h1>portableThoughts</h1>
      </div>

  </header>;
};

export default Header;
