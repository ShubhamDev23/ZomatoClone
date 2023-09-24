import React from 'react'
import "./collection.css"
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/corousel/Nextarrow';
import PrevArrow from '../../common/corousel/Prevarrow';
import DeliveryItem from './deliveryitem/Deliveryitem';

const itemcollection=[
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:4,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:5,
        title:"Fried Rice",
        cover:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },
    {
        id:6,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:7,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:8,
        title:"North Indian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id:9,
        title:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id:10 ,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id:11 ,
        title:"Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
        id:12 ,
        title:"dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },   
];

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
const Deliverycollection = () => {
  return (
    <div className='delivery-collection'>
        <div className='my_width whole-collection'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
            {itemcollection.map((item)=>{
                return <DeliveryItem key={item.id} item={item}/>
            })}
            </Slider>
            
        </div>
      
    </div>
  )
}

export default Deliverycollection
