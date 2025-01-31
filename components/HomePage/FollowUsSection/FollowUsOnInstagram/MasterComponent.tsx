import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Image1 from '../../../../public/assets/images/FollowUs/IG-1.webp';
import Image2 from '../../../../public/assets/images/FollowUs/IG-2.webp';
import Image3 from '../../../../public/assets/images/FollowUs/IG-3.webp';
import Image4 from '../../../../public/assets/images/FollowUs/IG-4.webp';
import Image5 from '../../../../public/assets/images/FollowUs/IG-5.webp';
import Image6 from '../../../../public/assets/images/FollowUs/IG-4.webp';
import style from '../../../../styles/components/home.module.scss';

const imageData = [
  { Image: Image1, slug: 'image-1' },
  { Image: Image2, slug: 'image-2' },
  { Image: Image3, slug: 'image-3' },
  { Image: Image4, slug: 'image-4' },
  { Image: Image5, slug: 'image-5' },
  { Image: Image6, slug: 'image-6' },
];

const FollowUsSection = () => {
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={`${style.follow_us_container} py-4`}>
      <div className="text-center mb-4">
        <h3 className={`${style.section_title}`}>
          <span>@ FOLLOW US ON INSTAGRAM</span>
        </h3>
      </div>
      {/* Slider Section */}
      <div className="CarouselSlider">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          arrows={false}
        >
          {imageData.map((ImageList, index) => (
            <div key={`image-slide-${index}`} className={`overflow-hidden follow-us-image-container`}>
              <Image
                className={`d-block image-fluid ${style.slider_image}`}
                src={ImageList.Image}
                alt="Instagram Image"
                loading="eager"
                priority={true}
                width={360}
                height={360}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FollowUsSection;
