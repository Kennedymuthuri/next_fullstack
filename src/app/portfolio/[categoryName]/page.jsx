import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};

export default function Category({ params }) {
  console.log(params.categoryName);
  const data = getData(params.categoryName);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.categoryName}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt=""
              className={styles.img}
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
