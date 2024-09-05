import React from 'react';
import { CONSTANTS } from '../../../services/config/app-config';
import MissingPartModal from './MissingPartModal';
import useMissingPartModalHook from '../../../hooks/ProductListPageHooks/useMissingPartModalHook';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function LookingSpecificProduct({ productListingData, multiLanguagesData }: any) {
  const { handleSubmit, handleMissingPartsModalClose, showMissingPartsModal, setShowMissingPartsModal } = useMissingPartModalHook();
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="total_result">
            <p className="mb-0 pt-0 text-color-black product-font-family">{productListingData?.length} Products</p>
          </div>
          {CONSTANTS.ENABLE_MISSING_PARTS && productListingData.length > 0 && (
            <div className="d-flex flex-row">
              <p className="text-color-black product-font-family">
                Looking for something specific?
                <span>
                  <Link
                    href={'#'}
                    onClick={() => {
                      setShowMissingPartsModal(true);
                    }}
                  >
                    {' '}
                    Let us Know
                  </Link>
                </span>
              </p>
              {/* <Button
                variant="link"
                onClick={() => {
                  setShowMissingPartsModal(true);
                }}
              >
                Let us Know
              </Button> */}
            </div>
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
