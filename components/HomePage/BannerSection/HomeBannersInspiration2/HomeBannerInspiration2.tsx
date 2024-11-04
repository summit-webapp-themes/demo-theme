import React from 'react';
import Image from 'next/image';
import styles from '../../../../styles/components/MasonryLayout.module.scss';

function HomeBannerInspiration2({ bannersList = [] }: any) {
  const splitArrayIntoChunks = (array: any) => {
    const result = [];
    for (let i = 0; i < array.length; i += 7) {
      result.push(array.slice(i, i + 7));
    }
    return result;
  };

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="container-fluid slider-container">
      {splitArrayIntoChunks(bannersList).map((banners, index) => {
        const gridClass = `grid-${banners.length || 0}`;
        return (
          <div className={`${styles[gridClass]} ${styles.grid} ${gridClass}`} key={index} style={{ marginTop: '10px' }}>
            {banners.map((banner: any, index: number) => (
              <div key={index} className={styles.item}>
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
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default HomeBannerInspiration2;
