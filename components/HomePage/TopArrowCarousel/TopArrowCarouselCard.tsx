import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/images/no_image.png';
import styles from './../../../styles/components/topCarousel.module.scss';

function TopArrowCarouselCard() {
  return (
    <div className="top-arrow-carousel">
      <div className="card w-100">
        <div className={`${styles?.img_container} p-3`}>
          <Image className="rounded-circle" src={image} alt="category-image" width={100} height={100} />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
    </div>
  );
}

export default TopArrowCarouselCard;
