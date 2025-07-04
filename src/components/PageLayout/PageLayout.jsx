import React from "react";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children }) {
    return (
        <div className={styles["page-layout"]}>
            {children}
        </div>
    )
}