const db = require('../db');
class ProductController {
    async createProduct(req, res) {
        const{title, subtitle, price, img} = req.body;
        const newProduct = await db.query(`INSERT INTO product (title, subtitle, price, img) VALUES ($1, $2, $3, $4) RETURNING *`, [title, subtitle, price, img])
        res.json(newProduct.rows[0]);

    }
    async updateProduct(req, res) {
        const {id, title, subtitle, price, img } = req.body;
        const newProduct = await db.query(`UPDATE product SET title = $2, subtitle = $3, price = $4, img = $5 WHERE id = $1 RETURNING *`, [id, title, subtitle, price, img])
        res.json(newProduct.rows[0]);
    }
    async getProducts(req, res) {
        const newProduct = await db.query(`SELECT * FROM product`);
        res.json(newProduct.rows);
    }
    async deleteProduct(req, res) {
        const id = req.params.id;
        const newProduct = await db.query(`DELETE FROM product WHERE id = $1 RETURNING *`, [id])
        res.json(newProduct.rows[0]);
    }
    async getProd(req, res) {
        const newProduct = await db.query(`SELECT * FROM`);
        res.json(newProduct.rows);
    }
}

module.exports = new ProductController();