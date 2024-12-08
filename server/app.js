const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const categoryRoutes =require("./routes/categoryRoutes");

const app = express();


const port = process.env.PORT || 5000;

app.use(cors()); // CORS ayarları
app.use(bodyParser.json()); // JSON isteklerini ayrıştırma


app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});