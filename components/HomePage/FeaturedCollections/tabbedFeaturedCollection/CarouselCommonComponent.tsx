import React from 'react';
import style from '../../../styles/components/home.module.scss';
import Carousel from 'react-multi-carousel';
import ProductCard from '../../../cards/ProductCard';

type Props = {
  item: any;
  addToCartItem: any;
  getPartyName: any;
  wishlistData: any;
};

const CarouselCommonComponent = (props: Props) => {
  const { item, addToCartItem, getPartyName, wishlistData } = props;
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {item?.map((val: any, index: any) => (
        <div className={style.cardMargin} key={index}>
          <ProductCard key={index} data={val} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCommonComponent;
