import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Category({ params }) {
  console.log(params.categoryName);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.categoryName}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/1.jpg"
            alt=""
            className={styles.img}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/1.jpg"
            alt=""
            className={styles.img}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/1.jpg"
            alt=""
            className={styles.img}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
