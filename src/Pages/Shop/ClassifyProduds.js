import React from 'react'
import ClassifySec2 from './ClassifySec2'
import ClassifySec1 from './ClassifySec1'
import { Headings, Heading1data } from '../../data/shop/Shop_data'


const ClassifyProduds = () => {
  return (
    <div>
        <ClassifySec1 heading={Headings[0]} items={Heading1data}/>
        <ClassifySec1 />
        <ClassifySec2 />
        <ClassifySec2 />
    </div>
  )
}

export default ClassifyProduds