import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {

    const menuItems = [
        {
            title: "Clothing",
            subItems: ["Men's Vintage Wear", "Women's Vintage Wear", "Accessories"],
        },
        {
            title: "Home & Living",
            subItems: ["Vintage Decor", "Kitchenware", "Furniture"],
        },
        {
            title: "Electronics & Media",
            subItems: ["Vinyl Records", "Cassette Tapes", "Vintage Cameras"],
        },
        {
            title: "Collectibles",
            subItems: ["Toys", "Posters & Prints"],
        },
    ];

    return (
        <nav className={styles["nav-container"]}>
            <div className={styles["nav-logo"]}></div>
            <ul className={styles["nav-menu"]}>
                { menuItems.map((item, index) => (
                        <li key={item.title} className={styles["menu-item"]}>
                            <div className={styles["menu-title"]}>
                                {item.title}
                            </div>
                            {
                                item.subItems.length > 0 && (
                                    <ul className={styles["dropdown"]}>
                                        {
                                            item.subItems.map((subItem, index) => (
                                                <li key={index} className={styles["dropdown-item"]}>{subItem}</li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}