import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../../../../styles/components/homeCategory.module.scss';
import { imageLoader } from '../../../../utils/image_loader';

const PersonalizedCategoriesWithGridLayout = ({ bannersList }: any) => {
  return (
    <div className="container ">
      <div className="row">
        {bannersList?.map((category: any, index: any) => (
          <div className={`col-md-6 ${style.electornics_wrapper} mt-4`} key={index}>
            <div className={style.Electronics_image_container}>
              <Image
                loader={imageLoader}
                className={`d-block image-fluid ${style.catagoryImg}`}
                src={category?.product_img}
                alt="Electronic Banner Image"
                loading="eager"
                priority={true}
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={style.Electronics_description_container}>
                <h2 className={`${style.electronics_title} fw-bold`}>{category?.heading}</h2>
                <div className={`${style.electronics_description_wrapper} row`}>
                  <div className="col-md-10">
                    <p className={`${style.electronics_description} fw-bold`}>{category?.description}</p>
                  </div>
                </div>
                <button className={`${style.electronics_btn} fw-bold`}>
                  <Link className="text-decoration-none text-black" href={`product-category/${category?.category_url || category?.slug}`}>
                    Buy now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedCategoriesWithGridLayout;
