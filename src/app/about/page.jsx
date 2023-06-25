import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Kenn from "public/1.jpg";
import Button from "@/components/Button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Kenn} fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            optio veritatis nesciunt itaque rem maxime nemo iste eaque similique
            voluptatem voluptates? Possimus eum fuga libero neque deleniti
            laudantium reiciendis ea
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Wht We do </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            omnis quod consequuntur, eos quis provident dolor velit. Laudantium
            modi provident consequuntur sit est qui in autem ab, a
            reprehenderit. Consequuntur?
          </p>
          <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
}
