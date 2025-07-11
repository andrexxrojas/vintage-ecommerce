import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./db.js";
dotenv.config();
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ROUTES
import productRoutes from "./routes/products.js";

// BASIC CONFIG:
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// HTTP METHODS
app.use("/api", productRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// LISTENING ON PORT:
app.listen(PORT, () => {
    console.log("Server is running at port:", PORT);
})