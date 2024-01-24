import React from 'react'
import { useParams } from 'react-router-dom';
import { ImageSection } from '../ProductPage/ImageSection';
import { ProductCardsData } from '../../data/shop/Card_data';
import DetailSection from '../ProductPage/DetailSection';
import MoreInfo from '../ProductPage/MoreInfo';

const ProductPage = ({ match }) => {
    const { itemId } = useParams();
    const product = ProductCardsData.find(item=> item.id === parseInt(itemId))
  return (  
    <> 
      <div className='flex md:flex-row flex-col my-10 mx-4 gap-4'>
       <ImageSection Product={product}/>
      <DetailSection Product={product}/>
       </div>
       <MoreInfo />
       </> 
  )
}

export default ProductPage