import React from 'react';
import styles from '../../../styles/components/MasonryLayout.module.scss';

function MasonryBanner() {
  const images = [
    // 'https://picsum.photos/200/300?image=206',
    // 'https://picsum.photos/300/300?image=206',
    // 'https://picsum.photos/300/300?image=406',
    // 'https://picsum.photos/300/300?image=606',
    // 'https://picsum.photos/300/300?image=206',
    // 'https://picsum.photos/300/300?image=306',
    // 'https://picsum.photos/300/300?image=506',
    'https://picsum.photos/300/300?image=206',
    'https://picsum.photos/200/300?image=206',
    'https://picsum.photos/300/300?image=206',
    'https://picsum.photos/300/300?image=406',
    'https://picsum.photos/300/300?image=606',
    'https://picsum.photos/300/300?image=206',
  ];

  const splitArrayIntoChunks = (array: any) => {
    const result = [];
    for (let i = 0; i < array.length; i += 7) {
      result.push(array.slice(i, i + 7));
    }
    return result;
  };

  return (
    <div className="container-fluid slider-container">
      {splitArrayIntoChunks(images).map((images, index) => {
        const gridClass = `grid-${images.length || 0}`;
        return (
          <div className={`${styles[gridClass]} ${styles.grid} ${gridClass}`} key={index} style={{ marginTop: '10px' }}>
            {images.map((image: any, index: number) => (
              <div key={index} className={styles.item}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default MasonryBanner;
