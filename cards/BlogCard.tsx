import Image from 'next/image';
import React from 'react';
import blogImage1 from '../public/assets/images/blog-1.webp';
import blogImage2 from '../public/assets/images/blog-2.webp';
import blogImage3 from '../public/assets/images/blog-3.webp';
import styles from '../styles/components/home.module.scss';
function BlogCard({ data }: any) {
  const images = [blogImage1, blogImage2, blogImage3];
  return (
    <>
      <div>
        <Image src={images[data]} alt="blog-image" className="w-100 h-100 cursor-pointer" width={100} height={100} />
      </div>
      <div className="mt-3">
        <p className={`${styles.blog_headings} m-0 mb-2`}>
          <span className="text-secondary">on</span> May 6, 2022
        </p>
        <p className="m-0 mb-2">Unique First Anniversary Gift Ideas</p>
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
