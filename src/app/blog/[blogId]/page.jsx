import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";


async function getData(blogId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`,{next:{revalidate:10}});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }

  return res.json();
}

export default async function BlogPosts({params}) {
  console.log(params.blogId);
  const data = await getData(params.blogId)
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="/1.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Kennedy Muthuri</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
