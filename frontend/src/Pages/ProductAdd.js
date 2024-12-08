import { FormControl, Input, InputLabel, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {

    const navigate = useNavigate();
    const API_URL = "http://localhost:5000/api";

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_URL}/categories`);
            const data = await response.json();
            setCategories(data);
        }
        catch (error) {
            console.error("Error fetching categories" + error);
        }
    }

    useEffect(() => {
        fetchCategories();
    })

    const [formData, setFormData] = useState({
        productname: "",
        unitprice: "",
        categoryid: ""
    });

    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        formData.unitprice = parseInt(formData.unitprice, 10);
        formData.categoryid = parseInt(formData.categoryid, 10);
        e.preventDefault();
        setMessage("");
        try {
            const response = await fetch(`${API_URL}/products/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData
                )


            });

            if (response.ok) {
                setFormData({
                    productname: "",
                    unitprice: "",
                    unitsinstock: 1,
                    categoryid: ""
                });
                let data = await response.json();
                sessionStorage.setItem("message", `${data.productname} Product added successfully`);
                navigate("/product",);
            }
            else {
                const error = await response.json().error;
                setMessage(`Failed to add product: ${error || "Unknown error"}`);
            }

        }
        catch (error) {
            console.error("Error adding product:", error);
            setMessage("Failed to add product: Unknown error");
        }

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container-xl my-4 border border-light-subtle p-4">
                {
                    message && (
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    )
                }
                <div className="">
                    <h4 className="fs-3 fw-semibold" style={{ color: "orange" }}>Product Add</h4>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div class="mt-3">
                                <label for="productname" class="form-label">Product Name</label>
                                <input onChange={handleChange} type="text" class="form-control" id="productname" name="productname" placeholder="Enter product name..." />
                            </div>
                            <div class="mb-3">
                                <label for="unitprice" class="form-label">Unit Price</label>
                                <input onChange={handleChange} type="text" class="form-control" id="unitprice" name="unitprice" placeholder="Enter unit price..." />
                            </div>
                            <div className="mb-3">
                                <div className="mb-2">
                                    <span className="text-dark fs-6">Category Name</span>
                                </div>

                                <select onChange={handleChange} name="categoryid" className="form-select" >
                                    <option key={0} value={0} selected ></option>
                                    {
                                        categories.map(category => {
                                            return <option key={category.id} value={category.id}>{category.categoryName}</option>
                                        })
                                    }

                                </select>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary mt-2">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );

}
export default ProductAdd;