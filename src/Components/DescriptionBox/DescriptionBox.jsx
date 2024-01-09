import React from 'react'
import './descriptionbox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-decription">
        <p>An e-commerce website is on online platform that facilitates the buying and selling of products or servicies over the internet. It serves as a virtual marketplace wherre bussiness and individuals can showcase their products, interact,with customers,and conduct transcriptions without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience, accessibility and the global reach they offer</p>
        <p>E-commerce website typically disply products or services along with detailed descriptions,images,price and any available variations(e.g. size,color). Each product usually has its own dedicated page with relevent information.</p>
      </div>

    </div>
  )
}

export default DescriptionBox
