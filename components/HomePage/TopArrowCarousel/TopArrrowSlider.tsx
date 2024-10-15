import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Slider from 'react-slick';
import ProductCard from '../../../cards/ProductCard';

function TopArrowSlider({ data, addToCartItem, getPartyName, wishlistData }: any) {
  console.log(data, 'data');
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2>{data[0]?.tag_name}</h2>
          <p className="mt-2 mb-0 ms-5 text-secondary">{data[0]?.description}</p>
        </div>
        <div>
          <button className="btn border py-2 bg-light rounded-circle me-3 " onClick={previous}>
            <FaArrowLeft />
          </button>
          <button className="btn border py-2 bg-light rounded-circle" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data[0]?.value?.length > 0 &&
          data[0]?.value?.map((item: any, index: number) => (
            <div key={index}>
              <ProductCard key={index} data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default TopArrowSlider;
