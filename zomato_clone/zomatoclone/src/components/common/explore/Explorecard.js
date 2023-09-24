import React, { useState } from "react";
import "./explorecard.css";
const Explorecard = ({ restaurent }) => {
  const name = restaurent?.info.name ?? "";
  const coverimg = restaurent?.info?.image?.url;
  const deliveryTime = restaurent?.order?.deliveryTime;
  const rating = restaurent.info?.rating?.rating_text;
  const bottomcontainers=restaurent?.bottomContainers;
  const approxPrice = restaurent.info.cft.text;
  const offer = restaurent?.bulkOffers ?? [];
  const cuisines = restaurent?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0.3);

  const goldoff = restaurent?.gold?.text;
  const proOff = offer.lenght > 1 ? offer[0].text : null;
  const discount =
    offer.length > 1
      ? offer[1].text
      : offer.length === 1
      ? offer[0].text
      : null;

      const[cart,setCart]=useState([]);
  return (
    <div className="explore-card">
      <div className="explore-card-cover">
        <img src={coverimg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime} </div>
        {proOff && <div className="pro-off">{proOff} </div>}
        {goldoff && <div className="gold-off absolute-center">{goldoff} </div>}
        {discount && (
          <div className="discount absolute-center">{discount} </div>
        )}
      </div>
      <div className="res-row">
        <div className="res-name"> {name}</div>
        {rating && (
          <div className="res-rating">
            <div className="rating">{rating}</div> 
            <span class="material-symbols-outlined star">star</span>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {i < 4 && item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
            
          </div>
        )}
        {approxPrice && <div className="approxPrice">{approxPrice} </div>}
      </div>
      <button 
      className="addcart"
      // onClick={()=>{addtocart(approxPrice/2)}}
      >Add to cart</button>
      {bottomcontainers.length >0 && <div>
             <div className="card-seperator"></div> 
             <div className="explore-bottom">
              <img src={bottomcontainers[0]?.image.url}
               alt={bottomcontainers[0]?.text} 
               style={{height:"20px"}}/>
               <div className="res-bottom-text">{bottomcontainers[0]?.text}</div>
             </div>

        </div>}
    </div>
  );
};

export default Explorecard;
