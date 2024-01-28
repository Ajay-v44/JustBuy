import { useEffect, useState } from "react";
import Productcard from "../Components/Productcard";

export default function Home() {
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products')
        .then(res=>res.json())
        .then(res=>setProducts(res))
    },[])
  return (
    <>
    

      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <Productcard/>
      </section>

     
    </>
  );
}
