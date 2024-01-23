import React, {useState} from 'react'


export const ImageSection = ({ Product}) => {
    
    const [currentImage, setCurrentImage] = useState(Product.img1);
  return (
    <div className='image-section flex justify-between sm:gap-4 gap-2 md:w-1/2'>
      <div className='flex flex-col gap-2'>
      <img src={Product.img1} alt={Product.title} className={`lg:w-24 sm:w-20 cursor-pointer option-image ${currentImage === Product.img1 ? 'active' : ''}`} onClick={()=>setCurrentImage(Product.img1)}/>
      <img src={Product.img2} alt={Product.title} className={`lg:w-24 sm:w-20 cursor-pointer option-image ${currentImage === Product.img2 ? 'active' : ''}`} onClick={()=>setCurrentImage(Product.img2)}/>
     
        </div>
      <img src={currentImage} alt={Product.title} className='main-image xl:w-[32rem] lg:w-[25rem] md:w-[18rem] sm:w-[32rem] '/>

       </div>
  )
}
