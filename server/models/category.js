const {Pool} = require("pg");
const pool = require("../database/db");

const Category = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM category");
        return result.rows;
    }

}

module.exports = Category;
