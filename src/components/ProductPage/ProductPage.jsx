import React from "react";
import styles from "./ProductPage.module.css";

function ProductNav() {
    return (
        <div className={styles["product-nav"]}>
            <div className={styles["page-info"]}>
                <h1 className={styles["category-name"]}>Clothing</h1>
                <p className={styles["item-count"]}>30 items</p>
            </div>
            <button className={styles["cart-btn"]}>
                Cart
                <span className={styles["cart-count"]}>0</span>
            </button>
        </div>
    )
}

export default function ProductPage() {
    return (
        <div className={styles["product-page-container"]}>
            <ProductNav/>

            <div className={styles["product-grid"]}>
                <div className={styles["product-card"]}>
                    <div className={styles["image-wrapper"]}>
                        <img src="https://i.pinimg.com/736x/2a/96/45/2a96455d0ce0f734c522419249a3f160.jpg" alt="Product Name" className={styles["product-image"]}/>
                    </div>
                    <h2 className={styles["product-title"]}>Vintage Jacket</h2>
                    <p className={styles["product-price"]}>$35.00</p>
                </div>

                <div className={styles["product-card"]}>
                    <img src="https://i.pinimg.com/736x/8c/c1/6e/8cc16e13f7c469bfbccdeb1b5b1c2f4a.jpg" alt="Product Name" className={styles["product-image"]}/>
                    <h2 className={styles["product-title"]}>Vintage Jacket</h2>
                    <p className={styles["product-price"]}>$35.00</p>
                </div>

                <div className={styles["product-card"]}>
                    <img src="https://i.pinimg.com/736x/f0/7a/62/f07a620eefa61153bc32a45128c98ab6.jpg" alt="Product Name" className={styles["product-image"]}/>
                    <h2 className={styles["product-title"]}>Vintage Jacket</h2>
                    <p className={styles["product-price"]}>$35.00</p>
                </div>
            </div>
        </div>
    )
}