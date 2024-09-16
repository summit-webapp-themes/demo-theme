import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

const CheckStockAvailabilityBtn = ({ handleStockAvailabilityData }: any) => {
  return (
    <button onClick={() => handleStockAvailabilityData()} className={`border-0 px-5 mx-3 py-2 rounded-1 my-3 ${styles.buttonBackGround}`}>
      Check Availability
    </button>
  );
};

export default CheckStockAvailabilityBtn;
