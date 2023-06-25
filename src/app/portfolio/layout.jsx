import React from "react";
import styles from "./page.module.css";

export default function PortfolioLayout({ children }) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
}
