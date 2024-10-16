import { useSelector } from 'react-redux';
import useQuickOrderHook from '../../hooks/QuickOrder/useQuickOrderHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import QuickOrderCard from './QuickOrderCard';

const QuickOrderMaster = () => {
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const {
    data,
    loading,
    error,
    itemCode,
    itemList,
    itemExist,
    setItemCode,
    handleKeyDown,
    removeItemFromQucikList,
    handleQuantityChange,
    addItemsToDCart,
    clearQuickOrder,
    handleAddProduct,
    minQuntityWarning,
  } = useQuickOrderHook();
  return (
    <div className="container-fluid px-lg-5">
      <div className="my-3">
        <div className="col-12">
          <h4 className="mb-0 fw-bolder">{selectedLanguageData?.quick_order}</h4>
        </div>
        <div className="my-1">
          <div className="d-flex align-items-center justify-content-md-between flex-column flex-md-row">
            <div className="py-1">
              {/* <p className="my-3">{selectedLanguageData?.you_can_add_upto_25_valid_item_code_oem_part_no_below}</p> */}
              <div className="d-sm-flex ">
                <div>
                  <input
                    type="text"
                    className=" quick-order form-control w-auto border-2"
                    name="inputValue"
                    value={itemCode}
                    onChange={(e: any) => setItemCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={selectedLanguageData?.item_code}
                  />
                </div>
                <div className="d-lg-none d-block ms:sm-2 ms-0 my-2 my-sm-0">
                  <button className="btn btn-primary" onClick={handleAddProduct}>
                    {selectedLanguageData?.add_product}
                  </button>
                </div>
              </div>
              <div className="text-start">{itemExist && <div className="text-danger fs-6">{itemExist}</div>}</div>
              <div className="text-start">{error && <div className="text-danger fs-6">{error}</div>}</div>
            </div>
            {data?.length > 0 && (
              <div className="d-flex">
                <div className="">
                  <div className="text-start text-md-end">
                    <button
                      type="button"
                      className=" text-uppercase fs-14 p-2 me-2"
                      style={{
                        border: '2px solid rgb(204, 134, 37)',
                        borderRadius: '7px',
                        backgroundColor: '#fff',
                      }}
                      onClick={clearQuickOrder}
                    >
                      {selectedLanguageData?.reset_form}
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="text-md-end text-start ">
                    <button
                      type="button"
                      className=" text-white text-uppercase fs-14 py-2 ps-2"
                      style={{
                        border: '2px solid rgb(204, 134, 37)',
                        borderRadius: '7px',
                        backgroundColor: 'rgb(204, 134, 37)',
                        color: '#fff',
                      }}
                      onClick={addItemsToDCart}
                    >
                      {selectedLanguageData?.add_to_cart}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {data?.length > 0 && (
          <div className="col-lg-12 text-center d-none d-md-block" style={{ backgroundColor: 'rgb(215, 232, 247)' }}>
            <div className="row w-100 py-2">
              <div className="col-md-2 ">
                <h5 className="mb-0 pt-2 fw-bolder fs-14">{selectedLanguageData?.details} </h5>
              </div>
              <div className="col-md-7  color-black  ">
                <h6 className="mb-0 pt-2 text-start fw-bolder fs-14 "></h6>
              </div>
              <div className="col-md-1 ">
                <h6 className="mb-0 pt-2  fw-bolder fs-14 ">{selectedLanguageData?.price}</h6>
              </div>
              <div className="col-md-1 col-1 text-center  ">
                <h6 className="mb-0 pt-2 fw-bolder fs-14 ">{selectedLanguageData?.quantity_c}</h6>
              </div>
              <div className="col-md-1 col-1 ">
                <h6 className="mb-2 pt-2 fw-bolder fs-14 ">{selectedLanguageData?.total}</h6>
              </div>
            </div>
          </div>
        )}
        {data?.length > 0 && (
          <div className="col-lg-12 border px-2 px-md-0">
            <div className="row w-100  mt-3">
              <QuickOrderCard
                data={data}
                itemList={itemList}
                selectedMultiLangData={selectedLanguageData}
                removeItemFromQucikList={removeItemFromQucikList}
                handleQuantityChange={handleQuantityChange}
                minQuntityWarning={minQuntityWarning}
                error={error}
                isLoading={loading}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickOrderMaster;
