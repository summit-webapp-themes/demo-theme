import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

const CheckStockAvailabilityBtn = ({
  handleStockAvailabilityData,
  selectedMultiLangData,
  stockAvailabilityLoader,
  setStockAvailabilityLoader,
}: any) => {
  return (
    <button
      onClick={() => handleStockAvailabilityData(setStockAvailabilityLoader)}
      className={`border-0 ms-2 py-2 rounded-1  ${styles.buttonBackGround} ${styles?.detail_page_btn}`}
    >
      {stockAvailabilityLoader ? (
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      ) : (
        <span>{selectedMultiLangData?.check_availability_btn_label}</span>
      )}
    </button>
  );
};

export default CheckStockAvailabilityBtn;
