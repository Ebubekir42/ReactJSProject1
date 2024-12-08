const {Pool} = require("pg");
const pool = require("../database/db");

const Product = {
    getAll: async () => {
        // const result = await pool.query("SELECT * FROM product");
        const result = await pool.query('select p.id, p.productname, p.unitprice, p.unitsinstock,c."categoryName", c.id as categoryid from product p inner join  category c on p.categoryid=c.id order by p.id');
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query("SELECT * FROM product WHERE id = $1",[id]);
        return result.rows[0];
    },
    getByCategoryId: async (categoryid) => {
        const result = await pool.query("SELECT * FROM product WHERE categoryid = $1",[categoryid]);
        return result.rows;
    },
    getCategoryNameByCategoryId: async (categoryid) => {
        console.log("Category ID: " + categoryid);
        const result = await pool.query("SELECT * FROM category WHERE id = $1",[categoryid]);
        if(result.rows.length > 0){
            return result.rows[0]
        }
        return "Empty";
        
    },
    create: async ({categoryid, productname, unitprice}) => {
        const result = await pool.query("INSERT INTO product (categoryid, productname, unitprice, unitsinstock) VALUES ($1, $2, $3, 1) RETURNING *", [categoryid, productname, unitprice]);
        return result.rows[0];
    },
    update: async ( {id,categoryid, productname, unitprice}) => {
        const result = await pool.query("UPDATE product SET categoryid = $1, productname = $2, unitprice = $3 WHERE id = $4 RETURNING *", [categoryid, productname, unitprice, id]);
        return result.rows[0];
    },
    delete: async (id) => {
        const result = await pool.query("DELETE FROM product WHERE id = $1", [id]);
        return result.rowCount;
    }
}
module.exports = Product;