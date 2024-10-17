import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Slider from 'react-slick';
import TopArrowCarouselCard from './TopArrowCarouselCard';

function TopArrowSlider({ data }: any) {
  let sliderRef: any = useRef(null);
  const modifiedData = [...data];
  if (modifiedData.length < 7) {
    modifiedData.push(...data);
  }
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="d-flex justify-content-end px-2">
        <div>
          <button className="border rounded-circle px-2 py-1 mx-1" onClick={previous}>
            <FaArrowLeftLong />
          </button>
          <button className="border rounded-circle px-2 py-1 mx-1" onClick={next}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {modifiedData?.map((val: any, index: any) => (
          <div key={index} className="">
            <TopArrowCarouselCard data={val} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopArrowSlider;
