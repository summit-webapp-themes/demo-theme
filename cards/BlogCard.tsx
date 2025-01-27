import Image from 'next/image';
import React from 'react';
import blogImage1 from '../public/assets/images/blog_image1.webp';
import blogImage2 from '../public/assets/images/blog_image2.webp';
import blogImage3 from '../public/assets/images/blog_image3.webp';
import styles from '../styles/components/home.module.scss';
import { left } from '@popperjs/core';
function BlogCard({ data }: any) {
  const images = [blogImage1, blogImage2, blogImage3];
  return (
    <>
      <div className={styles.blog_section}>
        <div className={styles.blog_image_wrapper}>
          <Image
            src={images[data]}
            alt="blog-image"
            className=" cursor-pointer"
            width={500}
            height={277.5}
            layout="intrinsic"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="mt-3">
        <p className={`m-0 mb-2 ${styles.blog_heading2}`}>Unique First Anniversary Gift Ideas</p>
        <p className={`${styles.blog_heading1} m-0 mb-2`}>
          <span className="text-secondary">on</span> May 6, 2022
        </p>
      </div>
      <div className={`${styles?.blog_description} `}>
        <p>
          If you’ve been faced with the decision to reschedule or cancel your 2020 wedding, you’re not alone. If only th If you’ve been
          faced with the decision to reschedule or cancel your 2020 wedding, you’re not alone. If only th...If you’ve been faced with the
          decision to reschedule or cancel your 2020 wedding, you’re not alone. If only th...
        </p>
      </div>
    </>
  );
}

export default BlogCard;
