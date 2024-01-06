
import { Shop_By_Collection } from '../data/Shop_By_collection_data'
const Section2 = () => {

  return (
    <div className='m-10 py-20'>
        <div className='flex items-center justify-between '>
            <h1 className='text-3xl font-extrabold'>Shop By Collection</h1>
            <button className='border-2 border-[#285380] rounded-3xl bg-[#285380] px-10 py-2 text-xl text-white tracking-wider font-semibold hover:border-[#E7A0AE] hover:bg-[#E7A0AE]'>View More</button>
        </div>
        <div className='my-12 flex justify-between'>
            {Shop_By_Collection.map((items)=>{
               return( <div className='card w-1/4 border-2 border-[#E7A0AE] hover:border-[#285380] p-4 m-4' key={items.id}>
                <div className='flex'>
                 <img  className='w-1/2 p-1' src={items.img1} alt='item1'/>
                 <img className='w-1/2 p-1' src={items.img2} alt='item2'/>
                 </div>
                 <div className='flex items-center justify-between m-2 pt-4'>
                 <h2 className='text-2xl font-extrabold'>{items.collection_type}</h2>
                 <h3 className='text-gray-500 text-xl font-semibold'>{items.Posters}  Posters</h3>
                 </div>
            </div>
            )
            })}
            
        </div>
    </div>
  )
}

export default Section2