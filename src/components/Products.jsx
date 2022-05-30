import React,{useEffect} from "react";
import axios from "axios"
import { useState } from "react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  
  const[lists,setList]=useState([])

  useEffect(()=>{
    const getList = async()=>{
      let r = await axios.get(" http://localhost:8080/products")
   
      console.log(r.data)
      setList(r.data)
    }
    getList()
  },[])

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid>
    {/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
