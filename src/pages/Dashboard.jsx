import { useEffect, useState } from "react";
import { fetchProduct } from "../Services/productAction";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [search, setSearch] = useState("");
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

    return (
        <div className="p-10 pt-16">
            <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">
                Dashboard Admin
            </div>
            <DataTable
                columns={columns}
                data={product}
                pagination
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        id="default-search"
                        placeholder="search here ..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%]"
                    />
                }
            />
        </div>
    );
}
