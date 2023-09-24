import React from 'react'
import "./explore.css"
import Explorecard from './Explorecard'
const Explore = ({list ,collectionName}) => {
  return (
    <div className='my_width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
        {list.map((restaurent)=>{
            return <Explorecard key={restaurent.info.resId} restaurent={restaurent}/>
        })}
      </div>
    </div>
  )
}

export default Explore
