import React from 'react'

const StataicRating = ({rating, maxRating=5}) => {
    const filledStar = '★';
    const emptyStar = '☆';

    const renderRatingStars = () => {
        const stars = [];
        for(let i = 1;i<=maxRating;i++){
          {stars.push (<span className='text-2xl text-yellow-400'>{i<=rating ? filledStar : emptyStar}</span>)}
        }
        return stars;
    }
  return <div>{renderRatingStars()}</div>  ;
}

export default StataicRating