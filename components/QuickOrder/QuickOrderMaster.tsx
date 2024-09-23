import React from 'react';
import { useSelector } from 'react-redux';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import QuickOrderCard from './QuickOrderCard';
import useQuickOrderHook from '../../hooks/QuickOrder/useQuickOrderHook';

const QuickOrderMaster = () => {
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const { itemCode, setItemCode, handleKeyDown } = useQuickOrderHook();

  return (
    <div className="container-fluid">
      <div className="row my-4 mx-md-5">
        <div className="col-lg-12  ">
          <div className="row">
            {/* <div className="col-lg-2"></div> */}
            <div className="">
              <div className="col-12">
                <h4 className="mb-0 fw-bolder">{selectedLanguageData?.quick_order}</h4>
              </div>
              <div className="row">
                <div className="col-lg-8 my-lg-2 mt-0 mb-0 pt-0 pb-0 fs-14">
                  {selectedLanguageData?.you_can_add_upto_25_valid_item_code_oem_part_no_below}
                </div>
                <div className="col-lg-2">
                  <div className=" text-end p-2">
                    <button
                      type="button"
                      className=" mb-0 text-uppercase py-2 px-lg-4 px-5 mt-0 fs-14 "
                      style={{
                        border: '1px solid #0071DC',
                        borderRadius: '7px',
                        backgroundColor: '#0071DC',
                        color: '#fff',
                      }}
                      // onClick={handleClearReduxStore}
                    >
                      {selectedLanguageData?.reset_form}
                    </button>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="text-end p-2 ">
                    <button
                      type="button"
                      className=" text-white mb-0 text-uppercase py-2 px-lg-4 px-5 me-0 mt-0 fs-14"
                      style={{
                        border: '1px solid #0071DC',
                        borderRadius: '7px',
                        backgroundColor: '#0071DC',
                        color: '#fff',
                      }}
                      // onClick={handleAddCart}
                    >
                      {selectedLanguageData?.add_to_cart}
                    </button>
                  </div>
                </div>
              </div>
              <div className="row  mt-3 ">
                <div className="col-lg-12 text-center mx-2 " style={{ backgroundColor: 'rgb(215, 232, 247)' }}>
                  <div className="row justify-content-center  py-3 ">
                    {/* <div className="col-lg-2 cart_heading_bg_none"></div> */}
                    <div className="col-lg-2 ">
                      <h5 className="mb-0 pt-2 text-start ">{/* {selectedLanguageData?.image} */}</h5>
                    </div>
                    <div className="col-lg-7  color-black px-5 d-inline-flex justify-content-start ">
                      <h6 className="mb-0 pt-2 text-start fw-bolder fs-14 ">{selectedLanguageData?.details}</h6>
                    </div>
                    <div className="col-lg-1 d-inline-flex ">
                      <h6 className="mb-0 pt-2 text-end fw-bolder fs-14 ">{selectedLanguageData?.price}</h6>
                    </div>
                    <div className="col-lg-1 col-1 text-start  m-auto mt-0 d-inline-flex justify-content-start">
                      <h6 className="mb-0 pt-2  d-flex fw-bolder fs-14 ">{selectedLanguageData?.quantity_c}</h6>
                    </div>
                    <div className="col-lg-1 col-1 d-inline-flex justify-content-start">
                      <h6 className="mb-2 pt-2 fw-bolder fs-14 ">{selectedLanguageData?.total}</h6>
                    </div>
                  </div>
                </div>
                <div className="row mx-lg-5 mt-3">
                  <QuickOrderCard />
                </div>
                <div className="row justify-content-center my-0 mt-5  py-lg-0 py-1">
                  <div className="col-12">
                    <div className="d-flex ">
                      <input
                        type="text"
                        name="inputValue"
                        value={itemCode}
                        onChange={(e: any) => setItemCode(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={selectedLanguageData?.item_code}
                      />
                      <div className="d-lg-none d-block ms-5">
                        <button className="btn btn-primary">Add Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickOrderMaster;
