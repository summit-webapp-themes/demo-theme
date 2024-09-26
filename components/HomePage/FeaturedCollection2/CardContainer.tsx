import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../../../styles/components/featuredCard.module.scss';
import FeaturedCard from './FeaturedCard';

function CardContainer() {
  const containerRef: any = useRef(null);

  const scrollLeft = () => {
    containerRef?.current.scrollBy({
      left: -270,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef?.current.scrollBy({
      left: 270,
      behavior: 'smooth',
    });
  };
  return (
    <div className="position-relative">
      <div className={`${styles.arrowLeft} d-none d-md-block`} onClick={scrollLeft}>
        <IoIosArrowBack />
      </div>
      <div className={styles.card_container} ref={containerRef}>
        {Array.from({ length: 10 }).map(() => (
          <FeaturedCard />
        ))}
      </div>
      <div className={`${styles.arrowRight} d-none d-md-block `} onClick={scrollRight}>
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default CardContainer;
