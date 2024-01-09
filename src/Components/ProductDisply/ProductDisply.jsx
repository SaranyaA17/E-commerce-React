import React, { useContext } from 'react'
import './productdisply.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisply = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    console.log(product)
  return (
    <div className='productdisply'>
      <div className="productdisply-left">
        <div className="productdisply-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="productdisply-img">
            <img  className="productdisply-main-img" src={product.image}alt="" />
        </div>
      </div>
      <div className="productdisply-right">
        <h1>{product.name}</h1>
        <div className="productdisply-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisply-right-prices">
            <div className="productdisply-right-price-old">${product.old_price}</div>
            <div className="productdisply-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisply-right-description">
            A lightweight,usually knitted,pullover shirt, close-fiting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisply-right-size">
            <h1>Select Size</h1>
            <div className="productdisply-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisply-right-category'> <span>Category :</span>Women, T-Shirt, Crop top</p>
        <p className='productdisply-right-category'> <span>Tags :</span>Modern, Latest</p>

      </div>
    </div>
  )
}

export default ProductDisply
