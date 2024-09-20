import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

const CheckStockAvailabilityBtn = ({ handleStockAvailabilityData, selectedMultiLangData }: any) => {
  return (
    <button
      onClick={() => handleStockAvailabilityData()}
      className={`border-0 px-lg-5 px-3 ms-2 py-2 rounded-1  ${styles.buttonBackGround}`}
    >
      {selectedMultiLangData?.check_availability_btn_label}
    </button>
  );
};

export default CheckStockAvailabilityBtn;
