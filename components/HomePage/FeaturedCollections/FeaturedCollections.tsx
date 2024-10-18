import Image from 'next/image';
import React, { useState } from 'react';
import noImage from '../../../public/assets/images/no_image.png';
import ProductCard from '../../../cards/ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CollectionCards from './CollectionCards';

function FeaturedCollections({ allTagsData, addToCartItem, getPartyName, wishlistData }: any) {

  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    allTagsData?.length > 0 &&
    allTagsData.map((item: any, index: number) => {
      const firstItem = item?.value[0] || {};
      const remaingItems = item?.value?.slice(0) || [];
      return (
        <React.Fragment key={index}>
          <div className="container-fluid py-5 my-2" key={index}>
            <div className="row mx-0">
              <div className="col-md-4">
                <Image
                  loader={firstItem.image ? imageLoader : undefined}
                  src={firstItem.image ? firstItem.image : noImage}
                  width={1200}
                  height={900}
                  alt="Item Image"
                  // className={`${ProductCardStyles.product_code_img}`}
                  style={{ width: '100%', height: '100%' }}
                  priority={true}
                />
              </div>
              <div className="col-md-8">
                <CollectionCards
                  remaingItems={remaingItems}
                  addToCartItem={addToCartItem}
                  getPartyName={getPartyName}
                  wishlistData={wishlistData}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    })
  );
}

export default FeaturedCollections;
