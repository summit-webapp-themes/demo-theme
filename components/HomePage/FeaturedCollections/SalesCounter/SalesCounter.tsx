import React from 'react';
import Image from 'next/image';
import helmetImage from '../../../../public/assets/images/Screenshot.png';
import styles from '../../../../styles/components/home.module.scss';
const SalesCounter = () => {
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
    <div className="card border-0">
      <div className="d-flex justify-content-center align-items-center flex-row w-100">
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle} mb-0`}>16</h6>
          <p className="mb-0">Days</p>
        </div>
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle}`}>7</h6>
          <p className="mb-0">Hours</p>
        </div>
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle}`}>2</h6>
          <p className="mb-0">Minutes</p>
        </div>
        <div className={`${styles.counterComponent}`}>
          <h6 className={`${styles.counterTitle}`}>11</h6>
          <p className="mb-0">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default SalesCounter;
