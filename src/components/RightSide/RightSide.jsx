import React from "react";
import styles from "./RightSide.module.css";

export default function RightSide({ children }) {
    return (
        <div className={styles["rightside-container"]}>
            {children}
        </div>
    )
}