import React, { useEffect, useState } from 'react';
import { fetchCategories, insertProduct, fileUpload } from '../Services/productAction';

const FormProduct = () => {
  const [categories, setCategories] = useState([]);
  const [source, setSource] = useState(""); // File object for image preview

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    categoryId: 3,
    images: []
  });

  // Fetch categories on mount
  useEffect(() => {
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

  // Handle file selection
  const onFileUpload = (e) => {
     console.log(e.target.files)
     setSource(e.target.files[0])
  };

  // Handle form submission
  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    insertProduct(product)
    .then(res =>{
        res.json()
        if(res.status == 201){
            alert("Created success !")
        }
    })
    .then(res => console.log(res))
   
      
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
          <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
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
           <img src={source && URL.createObjectURL(source)} alt="" style={{width:100}}/>
        </div>

        <div className="mb-5 ">
            <input type="file" name="image" id="" onChange={onFileUpload} />
          
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
