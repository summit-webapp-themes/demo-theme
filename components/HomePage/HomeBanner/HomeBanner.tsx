import React from 'react';
import banner from '../../../public/assets/images/big-slider.png';
import Image from 'next/image';
import { CONSTANTS } from '../../../services/config/app-config';
import Link from 'next/link';
import style from '../../../styles/components/homeBanner.module.scss';

const HomeBanner = ({ bannersList }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS?.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="container-fluid slider-container ">
      <div className="row">
        <div className="col-12">
          {bannersList?.map((banner: any, index: any) => (
            <div className={style.banner_wrapper} key={index}>
              <Image
                loader={myLoader}
                className={`d-block image-fluid`}
                src={banner?.img}
                alt="Electronic Banner Image"
                loading="eager"
                priority={true}
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={style.home_content_wrapper}>
                <p className={`p-0 m-0 ${style.label} text-uppercase fw-bold`}>{banner?.heading}</p>
                <h2 className={`fw-bold p-0 m-0 ${style.title}`}>{banner?.title}</h2>
                <div className={`row`}>
                  <div className="col-md-12">
                    <p className={` fw-bold ${style.desciption}`}>{banner?.description}</p>
                  </div>
                </div>
                <button className={` ${style.banner_btn} fw-bold`}>
                  <Link className="text-decoration-none text-white" href={`product-category/${banner?.button_1_url}`}>
                    {banner?.button_1_title}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
