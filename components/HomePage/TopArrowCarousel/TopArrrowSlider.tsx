import { useRef, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import TopArrowCarouselCard from './TopArrowCarouselCard';
import styles from '../../../styles/components/topCarousel.module.scss';
import Carousel from 'react-multi-carousel';

function TopArrowSlider({ data }: any) {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalItems = data?.length < 7 ? data?.length * 2 : data?.length; // Total number of items in the remainingItems array
  const halfIndex = Math.ceil(totalItems / 1.5); // Index that splits the items into two halves
  const sliderRef = useRef<any>(null);
  const handleNext = (): void => {
    if (currentSlide < totalItems - 1) {
      // Check if not on the last slide
      setCurrentSlide(currentSlide + 1);
      // Move the carousel to the next slide
      sliderRef?.current?.next();
    }
  };
  const handlePrev = (): void => {
    if (currentSlide > 0) {
      // Check if not on the first slide
      setCurrentSlide(currentSlide - 1);
      // Move the carousel to the previous slide
      sliderRef?.current?.previous();
    }
  };
  return (
    <div className={`${styles.slider_container}`}>
      <div className="d-flex justify-content-between px-2">
        <div>
          <h2>Featured Categories</h2>
        </div>
        <div>
          <button className="border rounded-circle px-2 py-1 mx-1" onClick={handlePrev}>
            <FaArrowLeftLong />
          </button>
          <button className="border rounded-circle px-2 py-1 mx-1" onClick={handleNext}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Custom slider wrapper */}
      <Carousel ref={sliderRef} responsive={responsive} arrows={false} infinite>
        {data.slice(0, halfIndex).map((val: any, index: number) => (
          <div key={index} className={`${styles.slider_item}`}>
            <TopArrowCarouselCard data={val} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TopArrowSlider;
