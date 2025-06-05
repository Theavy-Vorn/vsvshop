import React, { useEffect, useState } from 'react';
import { fetchCategories, insertProduct, fileUpload, onFileUploadServer, updateProduct } from '../Services/productAction';
import { useLocation } from 'react-router-dom';

const FormProduct = ({edit})=> {
  //for block image use this (crossOrigin="anonymous" )
  //get data from navigation
  const location = useLocation()

  const [categories, setCategories] = useState([]);
  const [source, setSource] = useState(""); // File object for image preview
  const [product, setProduct] = useState({
    id:"",
    title: "",
    price: 0,
    description: "",
    categoryId: 3,
    images: [
      "https://www.shutterstock.com/image-vector/no-photo-image-viewer-thumbnail-260nw-2495883211.jpg"
    ]
  });

  // Fetch categories on mount
  useEffect(() => {
    console.log(edit)
    if(edit){
      console.log(location.state)
      const {id,title,price,description,category,images} = location.state
      product.id = id
      product.title = title
      product.price = price
      product.description = description
      product.categoryId = category.id
      product.images = images
    }
    fetchCategories()
      .then(res => setCategories(res))
      .catch(err => console.error("Failed to fetch categories:", err));
  }, []);

  // Handle input changes
  const OnChangeHandle = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(product);
  };

  // Handle file selection preview
  const onPreview = (e) => {
     setSource(e.target.files[0])
  };

  // Handle form submission
  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit")
    //check condition whether create or update product
    if(edit){
      //it mean that user update with old image
      if(source == ""){
        console.log('proudct',product.id)
        updateProduct(product,product.id)
        .then(res=>res.json())
        .then(res=>console.log(res))
      }
      else{
        //user browse new image
        const image = new FormData()
        image.append("file",source)
        onFileUploadServer(image)
        .then(res=>{
          product.images =[res.data.location]
          updateProduct(product,product.id)
          .then(res=>res.json())
          .then(res=>console.log(res))
        })
        alert("updated successful !");
      }
      
    }else{
        //create image object as form data
      const image = new FormData()
      image.append("file",source)
      //function to upload data to server
      onFileUploadServer(image)
      .then(res => {
        // Set uploaded image URL to product
        product.images = [res.data.location];
        console.log('Uploaded Image:', product.images);

        // Insert product including image
        return insertProduct(product);
      })
      .then(res => res.json())
      .then(res => {
        console.log('Product inserted:', res);
      })
      .catch(err => {
        console.error('Error during file upload or product insert:', err);
      });

      alert("Created successful !");
    } 
      
  };

  return (
    <div className="container m-auto mt-23 mb-10">
        <h1 className='text-2xl text-center text-purple-800 font-bold mb-5'>Form Input Product</h1>
      <form onSubmit={OnHandleSubmit} className="max-w-sm mx-auto border-2 border-purple-800 rounded-2xl p-5">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={OnChangeHandle}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="Shirt"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Price $</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={OnChangeHandle}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="$300"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Choose Category</label>
          <select
            name="categoryId"
            value={product.categoryId}
            onChange={OnChangeHandle}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={OnChangeHandle}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="It is made by ..."
            required
          />
        </div>
        <div className="mb-5 preview">
           <label className="block mb-2 text-sm font-medium text-gray-900">Choose Image</label>
           <img crossOrigin="anonymous" 
           src={source =="" ? product.images[0] : URL.createObjectURL(source)} 
           alt="" style={{width:100}}/>
        </div>

        <div className="mb-5 ">
            <input type="file"  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" name="image" id="" onChange={onPreview} /> 
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
         {edit ? "Update Product" : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
