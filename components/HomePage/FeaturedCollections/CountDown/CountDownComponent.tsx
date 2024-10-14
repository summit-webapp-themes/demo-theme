import React from 'react';
import Image from 'next/image';
import helmetImage from '../../../../public/assets/images/Screenshot.png';
import styles from '../../../../styles/components/home.module.scss';
import { useTimer } from '../../../../hooks/HomePageHooks/UseTimer';
const CountDownComponent = () => {
  const { days, hours, minutes, seconds } = useTimer('2024-12-31T23:59:59');
  return (
    //  <div className="m-6" style={{ position: 'relative', height: '100vh', width: '100%' }}>
    //    <Image
    //      src={helmetImage.src}
    //      height={600}
    //      width={300}
    //      alt="Helmet Image"
    //      style={{ position: 'absolute', top: 0, left: 0 }} // Position it absolutely
    //    />
    //    <div style={{ position: 'relative', color: 'white', zIndex: 1 }} className="text-primary">
    //      Sale
    //    </div>
    //  </div>

    <div className="row">
      <div className="col-3">
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle} mb-0`}>{days}</h6>
          <p className="mb-0">Days</p>
        </div>
      </div>
      <div className="col-3">
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle}`}>{hours}</h6>
          <p className="mb-0">Hours</p>
        </div>
      </div>
      <div className="col-3">
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle}`}>{minutes}</h6>
          <p className="mb-0">Minutes</p>
        </div>
      </div>
      <div className="col-3">
        <div className={`${styles.counterComponent} `}>
          <h6 className={`${styles.counterTitle}`}>{seconds}</h6>
          <p className="mb-0">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountDownComponent;
