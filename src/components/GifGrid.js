import React from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {


  const {data: images,loading} = UseFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {
      loading && <p>cargando...</p>
    }
    <div className='row'>
    {
      images.map(image => (
        <GifItem
          key={image.id}
          {...image}
        />
      ))
    }
    </div>
    </>
  )
}