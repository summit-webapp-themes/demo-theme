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
          {[...Array(3)].map((_, index: any) => (
            <div className="col-md-4 col-sm-6 col-12 px-3">
              <BlogCard data={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSectionCardContainer;
