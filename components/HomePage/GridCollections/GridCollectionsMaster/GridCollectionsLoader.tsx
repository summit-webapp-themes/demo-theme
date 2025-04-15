import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import styles from '../../../../styles/components/collectionsGrid.module.scss';

const GridCollectionsLoader = () => {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.fullSpan}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 50 }} />
          </Placeholder>
        </div>

        <div className={`${styles.gridItem} ${styles.span2fr}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>
        <div className={`${styles.gridItem} ${styles.span3fr}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>

        <div className={`${styles.gridItem} ${styles.span3frAlt}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>
        <div className={`${styles.gridItem} ${styles.span2frAlt}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>

        <div className={`${styles.gridItem} ${styles.span2fr}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>
        <div className={`${styles.gridItem} ${styles.span3fr}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>

        <div className={`${styles.gridItem} ${styles.span3frAlt}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>
        <div className={`${styles.gridItem} ${styles.span2frAlt}`}>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '100%', height: 150 }} />
          </Placeholder>
        </div>
      </div>
    </div>
  );
};

export default GridCollectionsLoader;
