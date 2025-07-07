import React from "react";
import styles from "./App.module.css";

import PageLayout from "./components/PageLayout/PageLayout";
import Nav from "./components/Nav/Nav";
import RightSide from "./components/RightSide/RightSide";
import ProductPage from "./components/ProductPage/ProductPage";

export default function App() {
    return (
        <div className={styles["app-container"]}>
            <PageLayout>
                <Nav/>
                <RightSide>
                    <ProductPage/>
                </RightSide>
            </PageLayout>
        </div>
    )
}
