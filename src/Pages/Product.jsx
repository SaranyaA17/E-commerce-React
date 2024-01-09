import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisply from '../Components/ProductDisply/ProductDisply'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelateProduct from '../Components/RelateProduct/RelateProduct'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId) );
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisply product={product} />
      <DescriptionBox />
      <RelateProduct/>
    </div>
  )
}

export default Product
