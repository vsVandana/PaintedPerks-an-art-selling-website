import React from 'react'
import { Artistdata } from '../../data/Artists/artists_data'
import ArtistCard from '../Artists/ArtistCard'

const Artists = () => {
  return (
    <div>
      {Artistdata.map((artist, index)=>{
        <li><ArtistCard /></li>
      })}
    </div>
  )
}

export default Artists