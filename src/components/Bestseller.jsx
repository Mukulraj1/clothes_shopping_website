// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./productItem";

const BestSeller = () => {

    const {products}=useContext(ShopContext);
    const [bestseller,setBestSeller] = useState([]);
    

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0.5))
    },[products])

  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut officia sunt tempora fuga aperiam placeat cumque. Hic aliquid facilis quos asperiores, fuga in ducimus! Porro, voluptatem? Illo, totam assumenda?
            </p>

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {
        bestseller.map((item,index)=>(
          
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
        </div>
      
    </div>
  )
}

export default BestSeller




// import React from 'react'
// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./productItem";


// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => item.bestSeller);
//     setBestSeller(bestProduct.slice(0, 5)); // Corrected slice method to get the first 5 best-selling products
//   }, [products]);

//   return (
//     <div className="my-10">
//       <div className="text-center text-3xl py-8">
//         <Title text1="BEST" text2="SELLERS" />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut
//           officia sunt tempora fuga aperiam placeat cumque. Hic aliquid facilis
//           quos asperiores, fuga in ducimus! Porro, voluptatem? Illo, totam
//           assumenda?
//         </p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {bestSeller.map((item) => (
//           <ProductItem
//             key={item._id}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;


