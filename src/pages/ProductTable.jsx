import { useEffect, useState } from "react";
import { fetchProduct } from "../Services/productAction";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux/actions/productAction";

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [product, setProduct] = useState([]);
    const [originalProduct, setOriginalProduct] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            name: "Title",
            selector: row => row.title,
            sortable: true
        },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true
        },
        {
            name: "Photos",
            selector: row => (
                <img
                    src={row.images[0]}
                    crossOrigin="anonymous"
                    alt="default"
                    style={{ width: "50px", height: "50px" }}
                />
            )
        },
        {
            name: "Actions",
            selector: row => (
                <div className="flex gap-2 pt-2">
                    <button
                        type="submit"
                        onClick={() => navigate("/edit", { state: row })}
                        className="sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(row.id)}
                        className="sm focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ];

    useEffect(() => {
        fetchProduct().then(res => {
            setProduct(res);
            setOriginalProduct(res);
        });
    }, []);

    useEffect(() => {
        const result = originalProduct.filter(pro =>
            pro.title?.toLowerCase().includes(search.toLowerCase())
        );
        setProduct(result);
    }, [search, originalProduct]);

    const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete ?");
    if (confirmDelete) {
        await deleteProduct(id);
        const updatedList = product.filter(item => item.id !== id);
        setProduct(updatedList);
        setOriginalProduct(updatedList);
        setSuccessMessage(" Product deleted successfully!");
        setTimeout(() => {
            setSuccessMessage(""); // Clear message after 3 seconds
        }, 3000);
    }
};


    return (
        <div className="p-10 pt-16 w-[90%] m-auto">
             {successMessage && (
                <div className="fixed top-15 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-xl shadow-lg z-50 transition-all duration-300">
                    {successMessage}
                </div>
            )}

            <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">
                Product Admin
            </div>
            <div>
            <input
                type="text"
                id="default-search"
                placeholder="search here ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%]"
            />
            </div>
           {/* <h2 className="text-2xl font-bold mb-4 text-purple-800 mt-3">All Products</h2> */}
            <Link to={"/createproduct"} >
                <button className="sm focus:outline-none mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">+ Add Product</button>
            </Link>
            <DataTable
                columns={columns}
                data={product}
                pagination
                subHeader
                // subHeaderComponent={
            //         <input
            //     type="text"
            //     id="default-search"
            //     placeholder="search here ..."
            //     value={search}
            //     onChange={(e) => setSearch(e.target.value)}
            //     className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%]"
            // />
                // }
            />
        </div>
    );
}
