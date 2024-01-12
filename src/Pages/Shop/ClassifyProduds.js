import {React, useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import ClassifySec2 from './ClassifySec2'
import ClassifySec1 from './ClassifySec1'
import { Headings, Heading1data, Heading2data, Heading3data, Heading4data } from '../../data/shop/Shop_data'


const ClassifyProduds = ({ isOpen, toggleSidebar ,closeSidebar }) => {
  
  return (
    <div className={`classify-produds bg-white h-full overflow-y-auto fixed left-0 top-0 px-5 py-14 w-1/4  ${isOpen ? 'block' : 'hidden'}`}>
      <RxCross2 className='absolute right-0 mx-4 top-0 mb-8 mt-5' onClick={closeSidebar} />
  
        <ClassifySec1 heading={Headings[0]} items={Heading1data}/>
        <ClassifySec1 heading={Headings[1]} items={Heading2data}/>
        <ClassifySec2 heading={Headings[2]} items={Heading3data}/>
        <ClassifySec2 heading={Headings[3]} items={Heading4data}/>
    </div>
  )
}

export default ClassifyProduds