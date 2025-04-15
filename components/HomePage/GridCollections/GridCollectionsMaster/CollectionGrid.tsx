import React from 'react';
import styles from '../../../../styles/components/collectionsGrid.module.scss';
import Image from 'next/image';

const CollectionGrid = ({ collectionData }: any) => {
  const spanClasses = [
    styles.fullSpan,
    styles.span2fr,
    styles.span3fr,
    styles.span3frAlt,
    styles.span2frAlt,
    styles.span2fr,
    styles.span3fr,
    styles.span3frAlt,
    styles.span2frAlt,
  ];

  return (
    <div className="container">
      <div className={styles.gridContainer}>
        {collectionData?.slice(0, 9)?.map((item: any, index: number) => (
          <div key={index} className={`${styles.gridItem} ${spanClasses[index] || ''}`}>
            <div>
              <h4 className={styles.gridTitle}>{item?.name}</h4>
              {item?.image ? <Image src={item?.image} alt={item.name} width={150} height={100} /> : <></>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
