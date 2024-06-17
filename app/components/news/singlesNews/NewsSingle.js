import React from 'react'
import styles from "./newSingle.module.css";
import Image from 'next/image';
const NewsSingle = ({newsDatas}) => {
  const {author, title, urlToImage, source, description} = newsDatas;
  // const title = title.sort
  return (
    <div className={styles.newsSingle}>
      <div className={styles.details}>
        <div>
          <h2>{source.name}</h2>
          <h3>About <span>{description}</span></h3>
        </div>
      </div>
      {urlToImage ? (
        <Image 
          src={urlToImage} 
          alt={title} 
          width={1200} 
          height={675} 
          layout="responsive" 
        />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  )
}

export default NewsSingle