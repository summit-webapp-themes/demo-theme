import Image from 'next/image';
import React from 'react';
import noImage from '../../../../public/assets/images/no_image.png';
import TopArrowCarouselCards from './FeaturedCollectionInspiration3CarouselCards';

function TopArrowCarouselData({ allTagsData, addToCartItem, getPartyName, wishlistData }: any) {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    allTagsData?.length > 0 &&
    allTagsData.map((item: any, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="container-fluid py-5 my-2 slider-container mt-5" key={index}>
            <h4 className="fw-bold col-7 pb-0 mb-0 pb-md-2 mb-md-2">{item.description}</h4>
            <div className="row mx-0">
              <div className="col-md-4 d-none d-md-block ps-0">
                <Image
                  loader={item?.tag_image ? imageLoader : undefined}
                  src={item?.tag_image ? item?.tag_image : noImage}
                  width={1200}
                  height={900}
                  alt="Item Image"
                  style={{ width: '100%', height: '100%' }}
                  priority={true}
                />
              </div>
              <div className="col-md-8 mt-0 pt-3 pt-md-0 px-0 px-md-3">
                <TopArrowCarouselCards
                  remainingItems={item?.value || []}
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

export default TopArrowCarouselData;
