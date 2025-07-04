import React from "react";
import styles from "./App.module.css";

import PageLayout from "./components/PageLayout/PageLayout";
import Nav from "./components/Nav/Nav";

export default function App() {
    return (
        <div className={styles["app-container"]}>
            <PageLayout>
                <Nav/>
            </PageLayout>
        </div>
    )
}
