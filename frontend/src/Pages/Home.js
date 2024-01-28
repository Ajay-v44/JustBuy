import { useEffect, useState } from "react";
import Productcard from "../Components/Productcard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const[products,setProducts]= useState([])
    const[searchParams,setSearchParams]=useSearchParams()
    useEffect(()=>{
       try{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res=>res.json())
        .then(res=>setProducts(res.products))
        
       }
       catch(error){
        console.log(error)
       }
    },[searchParams])
   
  return (
    <>
    

      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
      <div className="row">
       {
       products.map(product=> <Productcard  product={product}/>)}
      </div>
      </section>

     
    </>
  );
}
