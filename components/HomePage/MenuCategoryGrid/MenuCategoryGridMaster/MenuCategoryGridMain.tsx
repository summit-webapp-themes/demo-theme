import React from 'react';
import styles from '../../../../styles/components/menuCategoryGrid.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const MenuCategoryGridMain = ({ collectionData }: any) => {
  console.log('collectionData', collectionData);
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
            <Link href={`product-category/${item.slug}?page=1&currency=INR`} style={{ textDecoration: 'none', color: '#000' }}>
              <div>
                <h4 className={styles.gridTitle}>{item?.name}</h4>
                {item?.image ? <Image src={`${item?.image}`} alt={`${item.name}`} width={150} height={100} /> : <></>}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryGridMain;
