import React, { useState } from 'react';
import { GiCardboardBoxClosed, GiForwardSun, GiMoon } from 'react-icons/gi'
import Switch from './Switch'
import useTheme from './util/useTheme';
const Header = () => {
  const [theme, setTheme] = useTheme(true)
  return <header className='flex justify-between w-full text-xl md:text-3xl font-bold py-1 px-3  md:py-2 md:px-6 text-black dark:text-white '>
    <div className='flex items-center justify-center gap-x-1'>
      <i className='m-auto md:my-0'><GiCardboardBoxClosed /></i>
      <h1>portableThoughts</h1>
    </div>
    <Switch checked={theme === "dark" ? true : false} onChange={(e) => {
      if (theme === "dark") {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    }} />
  </header>;
};

export default Header;
