import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import categoriesStyles from '../../../../styles/components/home.module.scss';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  return (
    <div className="container-fluid slider-container mt-4">
      <div className="row mt-3">
        {homeTopCategories?.length > 0 &&
          homeTopCategories.map((category: any, index: number) => {
            return (
              <div
                key={index}
                className="col rounded-4 p-3 mx-2"
                style={{
                  backgroundImage: `url(${encodeURI(category?.product_img)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '230px',
                }}
              >
                <div className="d-flex flex-column align-items-start justify-content-end h-100 ">
                  <h5 className={`fw-bold ${categoriesStyles.category_title}`}>{category.heading}</h5>
                  <p className={categoriesStyles.category_desc}>{category.description}</p>
                  <Link href={category?.category_url || ''}>
                    <Button type="button" className={`btn ml-3 px-2 py-1 border-0 rounded-3 ${categoriesStyles.category_btn}`}>
                      Go To Category <IoIosArrowForward />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PersonalizedCategories;
