import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

function CheckStockAvailabilityBtn({ handleStockAvailabilityData, selectedMultiLangData }: any) {
  return (
    <button
      onClick={() => handleStockAvailabilityData()}
      className={`border-0 px-lg-5 px-md-4 mx-xl-3 mx-lg-1 mx-md-3 mx-1 py-2 rounded-1 ${styles.buttonBackGround}`}
    >
      {selectedMultiLangData?.check_availability_btn_label}
    </button>
  );
}

export default CheckStockAvailabilityBtn;
