import React from 'react'
import "./delivery.css"
import Filters from '../common/Filters';
import Deliverycollection from './deliveryCollections/deliverycollection';
import Topbrands from './topBrands/Topbrands';
import Explore from '../common/explore/Explore';
import { restaurants } from '../../data/restaurants';
const filterarr=[
  {
      id:1,
      icon:<i className='absolute-center '> <span className="material-symbols-outlined filter-logo">
      page_info
      </span></i>,
      title:"Filters"
  },
  {
      id:2,
      title:"Rating:4.0+"
  },
  {
      id:3,
      title:"cuisines"
  }
  ];
  const restaurantlist=restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='my_width'>

       <Filters FilterList={filterarr}/>
      </div>
       <Deliverycollection/>
       <Topbrands/>
       <Explore list={restaurantlist} collectionName= 'delivery restaurants in mumbai'/>
    </div>
  )
}

export default Delivery

