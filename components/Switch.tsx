import React, { useEffect } from 'react';
import { GiSunbeams } from 'react-icons/gi';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
const Switch = ({ onChange, checked, className }: { className?: string, onChange?: (e: boolean) => void, checked?: boolean }) => {

  return <div className={`${className} dark:bg-transparent  w-16 h-16 rounded-md flex items-center justify-center transform transition-all duration-200 dark:text-white text-black ${checked ? 'rotate-45' : 'rotate-0'}  `}>
    <button className='w-min h-min' onClick={() => {
      if (onChange) {
        onChange(checked)
      }
    }}> <i className={``}>
        {checked ? <BsSunFill /> : <BsMoonStarsFill />}
      </i>
    </button>
  </div>;
};

export default Switch;
