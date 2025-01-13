import Image from 'next/image';
import React from 'react';
import bannerImage from '../../../../public/assets/images/promotional-banner-1.jpg';
import bannerImage2 from '../../../../public/assets/images/promotional-banner-2.jpg';
import styles from '../../../../styles/components/home.module.scss';
import { FaArrowRightLong } from 'react-icons/fa6';
function PromotionalBanners1Card({ data }: any) {
  console.log(data, 'data111');
  return (
    <>
      <div className="position-relative">
        <Image src={data === 0 ? bannerImage : bannerImage2} alt="banner-img" className="w-100 h-100" width={100} height={100} />
        <div className={`${styles.featured_banner_info}`}>
          <p className="m-0 mb-2">The latest on-trend styles</p>
          <p className={`${styles.featured_banner_heading} fw-bold m-0 mb-2`}> Check out our latest range</p>
          <button className={`${styles.featured_shop_now_btn} px-4`}>
            <span>Shop Now</span>
            <span className="ps-2">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
export default PromotionalBanners1Card;
