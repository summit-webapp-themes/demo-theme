import { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import TopArrowCarouselCard from './CategoriesCard';

function PersonalizedCategoriesSlider({ data }: any) {
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 7,
    },
    laptop: {
      breakpoint: { max: 1200, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 320 },
      items: 1,
    },
  };

  const sliderRef = useRef<any>(null);

  return (
    <div className={`slider-container`}>
      {/* Custom slider wrapper */}
      <Carousel ref={sliderRef} responsive={responsive} arrows={false} infinite>
        {data?.map((val: any, index: number) => (
          <div key={index} className={`px-2`}>
            <TopArrowCarouselCard data={val} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PersonalizedCategoriesSlider;
