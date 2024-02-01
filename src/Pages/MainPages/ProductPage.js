import React from 'react'
import { useParams } from 'react-router-dom';
import { ImageSection } from '../ProductPage/ImageSection';
import { ProductCardsData } from '../../data/shop/Card_data';
import DetailSection from '../ProductPage/DetailSection';
import MoreInfo from '../ProductPage/MoreInfo';
import PRODUCT_CARDS from '../Home/ProductCards'
import { pwp_sec1_data } from '../../data/home/Paint_with_price_data/sec1';

const ProductPage = () => {
    const { itemId } = useParams();
    const product = ProductCardsData.find(item=> item.id === parseInt(itemId))
  return (  
    <> 
      <div className='flex md:flex-row flex-col my-10 mx-4 gap-4'>
       <ImageSection Product={product}/>
      <DetailSection Product={product}/>
       </div>
       <MoreInfo Product={product}/>
       <PRODUCT_CARDS items_data={pwp_sec1_data} heading='Related products'/>
       </> 
  )
}

export default ProductPage