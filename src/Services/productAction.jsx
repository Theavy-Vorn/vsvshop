import axios from "axios";
import { base_URL } from "../utils/constant";

export const fetchCategories = async () => {
  const res = await fetch(`${base_URL}categories`, {
    method: "GET"
  });

  return res.json(); // Now res is a Response object, so this works
};

// fetch product

export const  fetchProduct = async()=>{
  const res = await fetch(`${base_URL}products`)
  return res.json()
}
// create function to insert product
export const insertProduct= async(product) =>{
  const res = await fetch(`${base_URL}products`,{
    method:"POST",
    headers:{
      "Content-Type"  : "application/json"
    },
    body:JSON.stringify(product)
  })
 
  return res;
}

// function to insert file image
export const onFileUploadServer = async(image) =>{
  const res = await axios({
    method:"POST",
    headers:{
      "Content-Type" : "multipart/form-data"
    },
    url:`${base_URL}files/upload`,
    data:image
  })
  return res
}