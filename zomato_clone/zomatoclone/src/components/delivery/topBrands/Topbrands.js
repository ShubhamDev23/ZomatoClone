import React from 'react'
import "./topbrands.css";
import NextArrow from '../../common/corousel/Nextarrow';
import PrevArrow from '../../common/corousel/Prevarrow';
import Slider from 'react-slick';
const brandlist=[
    {
        id:1,
        time:"30min",
        title:"McDonald's",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp"
    },
    {
        id:2,
        time:"34min",
        title:"La Pino's Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png?output-format=webp"
    },
    {
        id:3,
        time:"29min",
        title:"Domino's Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp"
    },
    {
        id:4,
        time:"39min",
        title:"Burger King",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp"
    },
    {
        id:5,
        time:"14min",
        title:"Subway",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png?output-format=webp"
    },
    {
        id:6,
        time:"47min",
        title:"KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png?output-format=webp"
    },
    {
        id:7,
        time:"26min",
        title:"Fresh Menu",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715114.png?output-format=webp"
    },
    {
        id:8,
        time:"30min",
        title:"Pizza Hut",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
    }
];

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
const Topbrands = ({}) => {
  return (
    <div className='my_width top-brands'>
    <div className='brand-title'>
        <Slider {...settings}>
            {brandlist.map((brand)=>{
                return <div>
                    <div className='brand-cover'>
                    <img className='brand-image' 
                    
                    src={brand.cover} 
                    alt={brand.title}
                    />
                    <div className='brand-title'>{brand.title} </div>
                    <div className='brand-time'>{brand.time}</div>
                    </div>
                </div>
            })}
        </Slider>
    </div>
    </div>
  )
}

export default Topbrands
