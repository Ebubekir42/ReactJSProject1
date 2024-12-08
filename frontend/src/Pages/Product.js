import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const Product = () => {
    const location = useLocation();
    const [message, setMessage] = useState("");
    const [editProduct, setEditProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filtreProducts, setFiltreProducts] = useState([]);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [isLoadingForProduct, setIsLoadingForProduct] = useState(true);
    // Dialog açma işlevi

    const handleClose = () => {
        setOpen(false);
    }

    // Dialog kapama işlevi
    const handleClose2 = () => {
        setOpen2(false);
    };
    const API_URL = "http://localhost:5000/api";
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products`);
            const data = await response.json();
            setProducts(data);
            setFiltreProducts(data);
            setIsLoadingForProduct(false);


        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

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

    const openDialog2 = (product) => {
        setEditProduct(product);
        setOpen2(true);
        // console.log("Bilgi: " + editProduct.id + " " + editProduct.productname + " " + editProduct.unitprice);
        console.log(editProduct);
    }

    const deleteProduct = async (product) => {
        try {
            const id = product.id;
            const response = await fetch(`${API_URL}/products/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {


                setMessage(`${product.productname} Product deleted successfully!`);
                fetchProducts();
                setOpen(true);
                setTimeout(() => setOpen(false), 5000);
            }
            else {
                setMessage("Product deleted unsuccessfully");
                setOpen(true);
                setTimeout(() => setOpen(false), 5000);
            }
        } catch (error) {
            setMessage("Failed deleted product. Error: !" + error);
            setOpen(true);
            setTimeout(() => setOpen(false), 5000);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProduct({ ...editProduct, [name]: value });
    };

    const handleSubmit = async (e) => {

        // formData.unitprice = parseInt(formData.unitprice, 10);
        // formData.categoryid = parseInt(formData.categoryid, 10);
        console.log(editProduct);
        e.preventDefault();
        setMessage("");
        try {
            editProduct.id = parseInt(editProduct.id, 10);
            editProduct.categoryid = parseInt(editProduct.categoryid, 10);
            editProduct.unitprice = parseInt(editProduct.unitprice, 10);
            const response = await fetch(`${API_URL}/products/update`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editProduct
                )


            });

            if (response.ok) {
                setMessage(`${editProduct.productname} updated successfully!`);
                setEditProduct(null);
                fetchProducts();
                setOpen(true);
                setTimeout(() => setOpen(false), 5000);
                // let data = await response.json();
                // console.log(data + "Updated successfully");
            }
            else {
                const error = await response.json().error;
                setMessage(`Failed to update product: ${error || "Unknown error"}`);
            }

        }
        catch (error) {
            console.error("Error updating product:", error);
            setMessage("Failed to update product: Unknown error");
        }

    };

    const updateProductByCategoryId = (e) => {
        const { name, value } = e.target;
        if(value === ""){
            setFiltreProducts(products);
        }
        else{
            const filtreproducts = products.filter(product => product.categoryid === parseInt(value));
            setFiltreProducts(filtreproducts);
        }
        
        
    }

    useEffect(() => {
        fetchCategories();
        fetchProducts();
        const storedMessage = sessionStorage.getItem("message");

        if (storedMessage) {
            setMessage(storedMessage);
            setOpen(true);
            console.log("Stored message: " + storedMessage);
            setTimeout(() => setOpen(false), 5000); // Mesajın 5 saniye sonra kapanması için setTimeout
            // Mesajı alır almaz sessionStorage'dan temizle
            sessionStorage.removeItem("message");
        }

    }, []);




    return (
        <>
            <div className="container-xl my-4 border border-light-subtle p-4">
                <div className="row">
                    <div className="col-3">
                        <div>
                            <div className="mb-4">

                                <h4 className="fs-3 fw-semibold" style={{ color: "orange" }}>Filter</h4>

                                <div>
                                    <h6 className="fs-5 fw-semibold" style={{ color: "black" }}>Category</h6>
                                    <div>
                                        <select onChange={updateProductByCategoryId} className="form-select" name="categoryid" >
                                            <option value="" >All</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>{category.categoryName}</option>
                                            ))}
                                        </select>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="">
                            {
                                message && <Dialog style={{ bottom: "auto", left: "auto", top: "10%" }}
                                    open={open} // Dialog'un açılıp kapanma durumu
                                    onClose={handleClose} // Dialog kapanma işlevi
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    id="dialog1"
                                >
                                    {/* <DialogTitle id="alert-dialog-title">{"Dialog Title"}</DialogTitle> */}
                                    <DialogContent>
                                        <Typography variant="body1">
                                            {message}
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            }
                            {
                                editProduct && <Dialog
                                    open={open2} // Dialog'un açılıp kapanma durumu
                                    onClose={handleClose2} // Dialog kapanma işlevi
                                    aria-labelledby="alert-dialog-title2"
                                    aria-describedby="alert-dialog-description2"
                                >
                                    <DialogTitle id="alert-dialog-title2">{editProduct.productname}</DialogTitle>
                                    <DialogContent>
                                        {/* <Typography variant="body1">
                                {message}
                            </Typography> */}
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <div class="mt-3">
                                                    <label for="productname" class="form-label">Product Name</label>
                                                    <input onChange={handleChange} type="text" class="form-control" id="productname" name="productname" value={editProduct.productname} placeholder="Enter product name..." />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="unitprice" class="form-label">Unit Price</label>
                                                    <input onChange={handleChange} type="text" class="form-control" id="unitprice" name="unitprice" value={editProduct.unitprice} placeholder="Enter unit price..." />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="mb-2">
                                                        <span className="text-dark fs-6">Category Name</span>
                                                    </div>

                                                    <select onChange={handleChange} name="categoryid" className="form-select" >
                                                        <option value="" disabled>Select a category</option>
                                                        {

                                                            categories.map(category => {
                                                                return <option key={category.id} value={category.id} selected={editProduct.categoryid == category.id} >{category.categoryName}</option>
                                                            })
                                                        }

                                                    </select>
                                                    <div>

                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose2} color="secondary" className="btn btn-secondary bg-seccondary">
                                            Close
                                        </Button>
                                        <Button onClick={handleSubmit} color="primary" className="btn btn-primary " >Edit</Button>
                                    </DialogActions>
                                </Dialog>
                            }

                            <div className="d-flex justify-content-between mb-4">

                                <h4 className="fs-3 fw-semibold" style={{ color: "orange" }}>Product</h4>

                                <Link href="product/add" underline="none" className="btn btn-primary text-white p-2 px-4"  >Add</Link>
                            </div>
                            <table className="table table-hover table-striped">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Category Name</th>
                                        <th>Unit Price</th>
                                        <th>Unit In Stock</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filtreProducts.map((product) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>{product.productname}</td>
                                                    <td>{product.categoryName}</td>
                                                    <td>{product.unitprice}</td>
                                                    <td>{product.unitsinstock}</td>
                                                    <td>
                                                        <button onClick={() => openDialog2(product)} className="btn btn-warning  rounded-1">Edit</button>
                                                        <button onClick={() => {
                                                            deleteProduct(product);
                                                        }} className="btn btn-danger  rounded-1 ms-2">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}


export default Product;