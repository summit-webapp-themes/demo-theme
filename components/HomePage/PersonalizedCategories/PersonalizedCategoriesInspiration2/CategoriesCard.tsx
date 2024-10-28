import Image from 'next/image';
import React from 'react';
import noImage from '../../../../public/assets/images/no_image.png';
import styles from '../../../../styles/components/topCarousel.module.scss';
import Link from 'next/link';

function CategoriesCard({ data }: any) {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="top-arrow-carousel">
      <div className="card w-100 cursor-pointer">
        {data?.category_url ? (
          <Link href={data?.category_url} className={`${styles?.img_container} p-3`}>
            <Image className="rounded-circle" loader={imageLoader} src={data?.product_img} alt="category-image" width={120} height={120} />
          </Link>
        ) : (
          <Link href={data?.category_url} className={`${styles?.img_container} p-3`}>
            <Image className="rounded-circle" src={noImage} alt="category-image" width={100} height={100} />
          </Link>
        )}
        <div className="card-body">
          <Link href={data?.category_url} className="text-dark text-decoration-none">
            <h5 className="card-title text-center">{data?.heading}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
