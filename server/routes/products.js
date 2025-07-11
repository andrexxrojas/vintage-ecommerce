import express from "express";
import mysql from "mysql";
const router = express.Router();

import connection from "../db.js";

router.get("/products", (req, res) => {
    const category = req.query.category;

    let query = `
        SELECT
            p.product_id,
            p.name,
            p.description,
            p.price,
            p.category,
            pi.image_url
        FROM products p
        LEFT JOIN product_images pi ON p.product_id = pi.product_id AND pi.is_primary = TRUE
    `;

    const queryParams = [];
    if (category) {
        query += ` WHERE p.category = ?`;
        queryParams.push(category);
    }

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Failed to fetch products:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const formatted = results.map(product => ({
            ...product,
            image_url: product.image_url
                ? `http://localhost:5000${product.image_url}`
                : null
        }));

        res.json(formatted);
    })
})

export default router;