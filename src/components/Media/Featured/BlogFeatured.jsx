"use client"
import React from 'react';
import Image from "next/image";
import styles from './blogFeatured.module.css'
const BlogFeatured = ( {data} ) => {
  console.log(data)
  
    return (
    
     
          <div className={styles.featuredImage}>
            <Image
            className={styles.featuredimg}
              src={data.image}
              alt="Blog Featured"
           
            />
          </div>
          
        )
    }
    export default BlogFeatured;