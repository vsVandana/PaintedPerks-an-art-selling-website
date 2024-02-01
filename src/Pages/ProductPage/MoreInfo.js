import React, { useState } from 'react';
import DescriptionSection from './DescriptionSection';
import ReviewSection from './ReviewSection';

const MoreInfo = ({Product}) => {
  const [currentSec, setCurrentSec] = useState('Description');

  return (
    <div className='more-info flex gap-4 flex-col cursor-pointer mx-4 my-10'>
      <div className='flex gap-8'>
        <h1
          onClick={() => setCurrentSec('Description')}
          className={`text-xl font-bold text-gray-400 ${currentSec === 'Description' ? 'active-sec' : ''}`}
        >
          Description
        </h1>
        <h1
          onClick={() => setCurrentSec('Review')}
          className={`text-xl font-bold text-gray-400 ${currentSec === 'Review' ? 'active-sec' : ''}`}
        >
          Review(6)
        </h1>
      </div>
      <div className='border-t-2 border-gray-200 mb-7'></div>
      <div>{currentSec === 'Description' ? <DescriptionSection /> : <ReviewSection Product={Product}/>}</div>
    </div>
  );
};

export default MoreInfo;
