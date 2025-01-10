import React from 'react';
import BlogCard from '../../../../cards/BlogCard';
import styles from '../../../../styles/components/home.module.scss';

function BlogSectionCardContainer() {
  return (
    <div className="custom-container-xl px-4 ">
      <div className="my-5">
        <div className={`${styles.featuredCollectionTitle} fw-bold w-100 text-center mb-5`}>
          <p className="m-0">From The Blogs</p>
        </div>
        <div className="row px-1 ">
          <div className="col-4 px-3">
            <BlogCard />
          </div>
          <div className="col-4 px-3">
            <BlogCard />
          </div>
          <div className="col-4 px-3">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSectionCardContainer;
