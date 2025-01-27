import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/home.module.scss';
import { dateFormat } from '../utils/dataFormat';
import { imageLoader } from '../utils/image_loader';
function BlogCard({ blog }: any) {
  return (
    <>
      <div>
        <Image src={blog.custom_image}
          loader={imageLoader}
          alt="blog-image"
          className="w-100 h-100 cursor-pointer"
          width={100} height={100}

        />
      </div>
      <div className="mt-3">
        <p className={`${styles.blog_heading1} m-0 mb-2`}>
          <span className="text-secondary">on</span> {dateFormat(blog?.published_on)}
        </p>
        <p className={`m-0 mb-2 ${styles.blog_heading2}`}>{blog?.title}</p>
      </div>
      <div className={`${styles?.blog_description} `}>
        <p>
          {blog?.blog_intro}
        </p>
      </div>
    </>
  );
}

export default BlogCard;