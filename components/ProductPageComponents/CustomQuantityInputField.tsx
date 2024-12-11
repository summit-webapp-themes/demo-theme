import React from 'react';
import styles from '../../styles/components/customQuantityInputField.module.scss';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CustomQuantityInputField = ({
  productDetailData,
  qty,
  handleQtyModificationOnInputEdit,
  handleQtyModificationOnButtonClick,
  selectedMultiLangData,
}: any) => {
  return (
    <>
      <div className={`mb-1 mt-2`}>
        <FaMinus className={`cursor-pointer ${styles.quantity_decrease}`} onClick={() => handleQtyModificationOnButtonClick('decrease')} />
        <input
          className={`rounded-5 fw-bold ${styles.quantity_input}`}
          id="productQuantity"
          name="quantity"
          value={qty}
          onChange={(e) => handleQtyModificationOnInputEdit(e)}
        />
        <FaPlus className={`cursor-pointer ${styles.quantity_increase}`} onClick={() => handleQtyModificationOnButtonClick('increase')} />
      </div>
    </>
  );
};

export default CustomQuantityInputField;
