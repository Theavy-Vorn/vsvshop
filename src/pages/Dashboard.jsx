
import { useEffect, useState } from "react";
import { fetchProduct } from "../Services/productAction";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";


export default function Dashboard(){
    const navigate = useNavigate();
    // declare state product
    const [product,setProduct] = useState([])
     const columns = [
       {
        name:"Title",
        selector:row=>row.title,
        sortable:true
       },
       {
        name:"Price",
        selector:row=>row.price,
        sortable:true
       },
    //    {
    //     name:"Description",
    //     selector:row=>row.description,
       
    //    },
       {
        name:"Photos",
        selector:row=> <img src={row.images[0]} crossOrigin="anonymous" alt="default" style={{width:"50px",height:"50px"}} />,
      
       },
       {
        name:"Actions",
        selector:row => 
           <div className="flex gap-2 pt-2">
                <button type="submit" 
                onClick={()=>navigate("/edit",{
                    state:row
                })}
                class="sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Edit</button>
                <button type="button" class="sm focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
           </div>
       }
    ];
    useEffect(()=>{
        fetchProduct()
        .then(res=>setProduct(res))

    },[])
    return(
        <div className="p-10 pt-16">
            <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">Dashboard Admin</div>
           <DataTable 
                columns={columns}
                data={product}
                pagination
           />
        </div>
    )
}