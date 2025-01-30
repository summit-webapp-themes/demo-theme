import Image from 'next/image';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../../../../styles/components/home.module.scss';
import { imageLoader } from '../../../../utils/image_loader';
import { dateFormat } from '../../../../utils/dataFormat';
import Carousel from 'react-multi-carousel';
const BlogSectionCarousel = ({ blogData }: any) => {
  if (!blogData || blogData?.length === 0) {
    return <p>No blogs available</p>;
  }

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 768 }, // Tablet should start at 768px
      items: 2, // Show 2 items in tablet
    },
    mobile: {
      breakpoint: { max: 767, min: 0 }, // Mobile should end at 767px
      items: 1, // Show 1 item in mobile
    },
  };
  return (
    <>
      <div className={`${styles.featuredCollectionTitle} fw-bold w-100 `}>
        <p className=" text-center  font-poppins text-uppercase">From The Blogs</p>
      </div>
      <div className={`${styles.carousel_blog_container} mb-5`}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          arrows={true} // Hide default arrows
          swipeable={true}
          draggable={true}
          showDots={false}
          customLeftArrow={
            <button className={styles.carousel_blog_arrow_left}>
              <FaChevronLeft />
            </button>
          }
          customRightArrow={
            <button className={styles.carousel_blog_arrow_right}>
              <FaChevronRight />
            </button>
          }
        >
          {blogData?.map((blog: any, index: number) => (
            <div key={index} className={styles.carousel_blog_card}>
              <div className={styles.carousel_blog_banner_image_container}>
                <Image
                  src={blog.custom_image}
                  loader={imageLoader}
                  alt="blog-image"
                  className={`w-100 cursor-pointer ${styles.carousel_blog_banner_image}`}
                  width={100}
                  height={277.5}
                  objectFit="cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="mt-3">
                <p className={`m-0 mb-2 ${styles.blog_heading2} font-poppins`}>{blog?.title}</p>
                <p className={`${styles.blog_heading1} m-0 mb-2`}>
                  <span className="text-secondary">By</span> admin <span className="text-secondary">on</span>{' '}
                  {dateFormat(blog?.published_on)}
                </p>
              </div>
              <div className={styles.blog_description}>
                <p>{blog?.blog_intro}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default BlogSectionCarousel;
