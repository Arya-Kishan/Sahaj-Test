"use client"
import Image from "next/image";
import Link from "next/link";
import styles from './blogFeatured.module.css'
import FormateDate from "../FormateDate";

const BlogFeatured = ({ data }) => {
  const singlefeaturedData = data?.slice(0, 1)
  return (

    <div>
      <div className={styles.featuredWrapper}>
        <div className={styles.featuredImage}>
          {singlefeaturedData[0]?.BlogImage? 
           <Image
            className={styles.featuredimg}
            src={singlefeaturedData[0]?.BlogImage}
            alt="Blog Featured"
            width={500}
            height={500}
          />
          :<h1>Blog Featured</h1>}
        
          <div className={styles.textContainer}>
            <div className={styles.date}>{FormateDate(singlefeaturedData[0]?.createdAt)}</div>
            <h1 className={styles.title} >{singlefeaturedData[0]?.title}</h1>
            <div>{singlefeaturedData[0]?.BlogPitchLine}</div>

            {singlefeaturedData[0]?.Tags && (
              <div className={styles.blogCardButtonsContainer}>
                {singlefeaturedData[0]?.Tags.map((tags, index) => (
                  <button className={styles.blogCardButton} key={index}>
                    {tags}
                  </button>
                ))}
              </div>
            )}


            <Link className={styles.readMore} href={`/blog/${singlefeaturedData[0]?.Slug}`}>
              <button className={styles.readMoreButton}>Read More
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17.5L17 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7.5H17V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>


  )
}
export default BlogFeatured;