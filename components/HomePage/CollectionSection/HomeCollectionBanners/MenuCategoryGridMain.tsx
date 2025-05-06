import React from 'react';
import styles from '../../../../styles/components/menuCategoryGrid.module.scss';
import Link from 'next/link';

const pastelColors = [
  '#FADADD', // pink
  '#D0F0C0', // mint
  '#E6E6FA', // lavender
  '#FFFACD', // lemon
  '#ADD8E6', // baby blue
  '#FFDEAD', // light orange
  '#FFE4E1', // misty rose
  '#E0FFFF', // light cyan
  '#F0E68C', // khaki
];

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

const MenuCategoryGridMain = ({ collectionData }: any) => {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        {collectionData?.slice(0, 9)?.map((item: any, index: number) => (
          <div
            key={index}
            className={`${styles.gridItem} ${spanClasses[index] || ''}`}
            style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
          >
            <Link href={`product-category/${item.DpCd}?page=1&currency=INR`} className={styles.cardLink} aria-label={item?.DpCd}>
              <div className={styles.pastelCard}>
                <span className={styles.cardText}>{item?.DpCd}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryGridMain;
