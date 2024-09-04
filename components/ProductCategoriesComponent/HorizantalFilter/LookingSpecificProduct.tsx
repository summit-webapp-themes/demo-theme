import React from 'react';
import { CONSTANTS } from '../../../services/config/app-config';
import MissingPartModal from './MissingPartModal';
import useMissingPartModalHook from '../../../hooks/ProductListPageHooks/useMissingPartModalHook';

function LookingSpecificProduct({ productListingData, multiLanguagesData }: any) {
  const { handleSubmit, handleMissingPartsModalClose, showMissingPartsModal, setShowMissingPartsModal } = useMissingPartModalHook();
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="total_result">
            <p className="mb-0 pt-0 text-color-black product-font-family">
              {productListingData?.length} {multiLanguagesData?.products}
            </p>
          </div>
          {CONSTANTS.ENABLE_MISSING_PARTS && productListingData.length > 0 && (
            <>
              <span className="text-color-black product-font-family">{multiLanguagesData?.looking_for_something_specific}</span>
              <button
                onClick={() => {
                  setShowMissingPartsModal(true);
                }}
                className="missing_parts_btn ps-2 product-font-family"
              >
                {multiLanguagesData?.let_us_know}
              </button>
            </>
          )}
        </div>
      </div>
      <MissingPartModal
        showMissingPartsModal={showMissingPartsModal}
        handleMissingPartsModalClose={handleMissingPartsModalClose}
        setShowMissingPartsModal={setShowMissingPartsModal}
        multiLanguagesData={multiLanguagesData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default LookingSpecificProduct;
