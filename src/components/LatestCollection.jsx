// import React from 'react'

import { useContext,useEffect,useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./productItem";


const LatestCollection =()=>{
  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts]= useState(products.slice(0,10));

  
  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products,setLatestProducts])

  
    
  return (
    
    <div className="my-10">
    <div className="text-center py-8 text-3xl">
      <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum neque molestias omnis dolorem, alias illum eos iste reiciendis debitis ipsa odio beatae nostrum architecto, magnam, explicabo officia sequi quas.
      </p>
    </div>

    {/* rendering products  */}
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {
        latestProducts.map((item,index)=>(
          
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
    </div>
    </div>
  )
}

export default LatestCollection
