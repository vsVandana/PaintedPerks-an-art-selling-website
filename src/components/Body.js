import React from 'react'
import HeroCarousel from './HeroCarousel'
import FeaturedSec from './FeaturedSec'
import CARDS_SHOP_BY from './CardsShopBy'
import { Shop_By_Collection } from '../data/shop_by_data/Shop_By_collection_data'
import { Shop_By_Cat } from '../data/shop_by_data/Shop_By_cat_data'
import { Shop_By_Artist } from '../data/shop_by_data/Shop_By_Artist_data'
import BANNER_SEC from './BannersSec'
import { Banner1_data, Banner2_data, Banner3_data } from '../data/Banners_data'
import PRODUCT_CARDS from './ProductCards'
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
        <CARDS_SHOP_BY Items_data={Shop_By_Collection} type='Collection'/>
        <BANNER_SEC banner_data={Banner1_data} />
        <CARDS_SHOP_BY Items_data={Shop_By_Cat} type='Category'/>
        <BANNER_SEC banner_data={Banner2_data} />
        <PRODUCT_CARDS items_data={pwp_sec1_data} heading='Trending Today'/>
        <SaleBanner />
        <PRODUCT_CARDS items_data={pwp_sec2_data} heading='Exclusive Handpics' />
        <CARDS_SHOP_BY Items_data={Shop_By_Artist} type='Artists'/>
        <BANNER_SEC banner_data={Banner3_data} />
        <FeaturedSec />
        <Review />
        <Newsletter />

    </div>
  )
}

export default Body

// [#E7A0AE]