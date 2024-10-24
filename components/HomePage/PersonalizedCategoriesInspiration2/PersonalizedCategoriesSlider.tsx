import { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import styles from '../../../styles/components/topCarousel.module.scss';
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
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const sliderRef = useRef<any>(null);

  return (
    <div className={`${styles.slider_container}`}>
      {/* Custom slider wrapper */}
      <Carousel ref={sliderRef} responsive={responsive} arrows={false} infinite>
        {data?.map((val: any, index: number) => (
          <div key={index} className={`${styles.slider_item}`}>
            <TopArrowCarouselCard data={val} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PersonalizedCategoriesSlider;
