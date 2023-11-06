import React from 'react'
import HeroCarousel from './HeroCarousel'
import FeaturedSec from './FeaturedSec'
import Cards_Shop_By from './CardsShopBy'
import { Shop_By_Collection } from '../data/shop_by_data/Shop_By_collection_data'
import { Shop_By_Cat } from '../data/shop_by_data/Shop_By_cat_data'
import { Shop_By_Artist } from '../data/shop_by_data/Shop_By_Artist_data'
import Banners_Sec from './BannersSec'
import { Banner1_data, Banner2_data, Banner3_data } from '../data/Banners_data'
import Product_Cards from './ProductCards'
import {pwp_sec1_data} from '../data/Paint_with_price_data/sec1'
import { pwp_sec2_data } from '../data/Paint_with_price_data/sec2'
import SaleBanner from './SaleBanner'
import Review from './Review'
import Newsletter from './Newsletter'

const Body = () => {
  return (
    <div className=''>
        {/* Hero section */}
        <HeroCarousel />
        {/* <Section2 /> */}
        <Cards_Shop_By Items_data={Shop_By_Collection} type='Collection'/>
        <Banners_Sec banner_data={Banner1_data} />
        <Cards_Shop_By Items_data={Shop_By_Cat} type='Category'/>
        <Banners_Sec banner_data={Banner2_data} />
        <Product_Cards items_data={pwp_sec1_data} heading='Trending Today'/>
        <SaleBanner />
        <Product_Cards items_data={pwp_sec2_data} heading='Exclusive Handpics' />
        <Cards_Shop_By Items_data={Shop_By_Artist} type='Artists'/>
        <Banners_Sec banner_data={Banner3_data} />
        <FeaturedSec />
        <Review />
        <Newsletter />

    </div>
  )
}

export default Body

// [#E7A0AE]