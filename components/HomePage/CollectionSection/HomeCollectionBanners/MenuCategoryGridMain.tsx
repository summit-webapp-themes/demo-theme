import React from 'react';
import styles from '../../../../styles/components/menuCategoryGrid.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
  const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="container py-3" >
      <div className={styles.gridContainer}>
        {collectionData?.slice(0, 9)?.map((item: any, index: number) => (
          <Link
            key={index}
            href={`product-category/${item.DpCd}?page=1&currency=USD`}
            className={`${styles.gridItem} ${spanClasses[index] || ''}`}
            style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
          >
            <Image src={item?.imgUrl} alt="Product Image" fill style={{ objectFit: 'cover' }} loader={imageLoader} />
            <Link href={`product-category/${item.DpCd}?page=1&currency=USD`} className={styles.cardLink} aria-label={item?.DpCd}>
              <div className={styles.pastelCard}>
                <span className={styles.cardText}>{item?.DpCd}</span>
              </div>
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryGridMain;
