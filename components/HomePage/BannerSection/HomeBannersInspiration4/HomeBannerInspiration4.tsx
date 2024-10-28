import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styles from '../../../../styles/components/MasonryCarouselLayout.module.scss';

function HomeBannerInspiration4({ bannersList = [] }: any) {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  function splitArray(arr: any) {
    const subArray = arr.slice(0, arr.length - 2); // All but the last two elements
    const remainingElements = arr.slice(-2); // Last two elements
    return [subArray, ...remainingElements];
  }

  return (
    <div className="container-fluid slider-container">
      <div className={`${styles['grid-3']}`}>
        {splitArray(bannersList).map((banners: any, index: number) => (
          <div key={index} className={styles.item}>
            {index === 0 ? (
              <div className="masonryBannerCarousel">
                <Carousel>
                  {banners?.map((banner: any, index: number) => {
                    return (
                      <CarouselItem key={index}>
                        <Image
                          loader={myLoader}
                          src={banner?.img}
                          alt="Banner Images"
                          loading="eager"
                          priority={true}
                          width={1600}
                          height={400}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </CarouselItem>
                    );
                  })}
                </Carousel>
              </div>
            ) : (
              <Image
                loader={myLoader}
                src={banners?.img}
                alt="Banner Images"
                loading="eager"
                priority={true}
                width={1600}
                height={400}
                style={{ width: '100%', height: '100%' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBannerInspiration4;
