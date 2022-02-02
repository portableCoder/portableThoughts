import React from 'react';

const Divider = ({text}:{text:string}) => {
  return <div className='w-full py-6 relative -my-2'>
      <div className='w-full h-full flex  z-50 text-3xl  p-2 '>
        {text}
      </div>
  </div>;
};

export default Divider;

