import React, { useState, useRef, useEffect } from "react";
import styles from "./Nav.module.css";
import { gsap } from "gsap";

export default function Nav() {
    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (index) => {
        if (openIndex === index) {
            // Animate closing
            gsap.to(dropdownRefs.current[index], {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => setOpenIndex(null),
            });
        } else {
            // Close previously open dropdown if any
            if (openIndex !== null && dropdownRefs.current[openIndex]) {
                gsap.to(dropdownRefs.current[openIndex], {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            }

            setOpenIndex(index);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    }

    useEffect(() => {
        if (openIndex !== null && dropdownRefs.current[openIndex]) {
            const dropdown = dropdownRefs.current[openIndex];
            gsap.set(dropdown, { height: "auto", opacity: 1 });
            gsap.from(dropdown, {
                height: 0,
                duration: 0.4,
                ease: "power2.out",
            });

            gsap.from(dropdown.children, {
                opacity: 0,
                y: 10,
                stagger: 0.05,
                delay: 0.1,
                duration: 0.3,
            });
        }
    }, [openIndex]);

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
            <div className={styles["store-logo"]}>VNTG</div>

            <div className={styles["mobile-menu-toggle"]} onClick={toggleMobileMenu}>
                Menu
            </div>

            <ul className={
                `${styles["nav-menu"]} ${isMobileMenuOpen ? styles["open"] : ""}`
            }>
                {menuItems.map((item, index) => (
                    <li key={item.title} className={styles["menu-item"]}>
                        <div
                            className={`${styles["menu-title"]} ${openIndex === index ? styles["active-title"] : ""}`}
                            onClick={() => toggleDropdown(index)}
                        >
                            {item.title}
                        </div>

                        <ul
                            ref={(el) => (dropdownRefs.current[index] = el)}
                            className={styles["dropdown"]}
                            style={{
                                overflow: "hidden",
                                height: 0,
                                opacity: 0,
                                paddingTop: openIndex === index ? "5px" : "0px",
                                paddingBottom: openIndex === index ? "5px" : "0px",
                                paddingLeft: "10px"
                            }}
                        >
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} className={styles["dropdown-item"]}>
                                    {subItem}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}