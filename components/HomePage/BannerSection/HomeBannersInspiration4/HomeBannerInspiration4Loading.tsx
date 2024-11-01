import React from 'react';
import { Placeholder } from 'react-bootstrap';
import styles from '../../../../styles/components/MasonryCarouselLayout.module.scss';

function HomeBannerInspiration4Loading() {
  return (
    <div className="container-fluid slider-container">
      <div className={`${styles['grid-3']}`}>
        {[...Array(3)].map((_: any, index: number) => (
          <div key={index} className={styles.item}>
            <Placeholder as="div" animation="glow" style={{ width: '100%', height: '100%' }}>
              <Placeholder className="w-100" style={{ height: '100%', borderRadius: '10px' }} />
            </Placeholder>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBannerInspiration4Loading;
