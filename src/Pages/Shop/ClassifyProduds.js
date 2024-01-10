import React from 'react'
import ClassifySec2 from './ClassifySec2'
import ClassifySec1 from './ClassifySec1'
import { Headings, Heading1data, Heading2data, Heading3data, Heading4data } from '../../data/shop/Shop_data'


const ClassifyProduds = () => {
  return (
    <div>
        <ClassifySec1 heading={Headings[0]} items={Heading1data}/>
        <ClassifySec1 heading={Headings[1]} items={Heading2data}/>
        <ClassifySec2 heading={Headings[2]} items={Heading3data}/>
        <ClassifySec2 heading={Headings[3]} items={Heading4data}/>
    </div>
  )
}

export default ClassifyProduds