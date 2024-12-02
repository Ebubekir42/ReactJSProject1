
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
