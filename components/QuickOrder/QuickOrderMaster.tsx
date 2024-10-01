import { useSelector } from 'react-redux';
import useQuickOrderHook from '../../hooks/QuickOrder/useQuickOrderHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import QuickOrderCard from './QuickOrderCard';

const QuickOrderMaster = () => {
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const {
    data,
    itemCode,
    itemList,
    setItemCode,
    handleKeyDown,
    removeItemFromQucikList,
    handleQuantityChange,
    addItemsToDCart,
    clearQuickOrder,
    handleAddProduct,
  } = useQuickOrderHook();
  return (
    <div className="container-fluid">
      <div className="my-3">
        <div className="col-12">
          <h4 className="mb-0 fw-bolder">{selectedLanguageData?.quick_order}</h4>
        </div>
        <div className="w-100">
          <div className="row w-100">
            <div className="col-lg-6 col-md-6 col-12 fs-14">
              <p className="my-3">{selectedLanguageData?.you_can_add_upto_25_valid_item_code_oem_part_no_below}</p>
            </div>
            <div className="col-lg-3 col-sm-4 col-5 col-md-3">
              <div className="text-start text-md-end p-2">
                <button
                  type="button"
                  className=" mb-0 text-uppercase py-2 px-lg-4 px-2 mt-0 fs-14 "
                  style={{
                    border: '1px solid #0071DC',
                    borderRadius: '7px',
                    backgroundColor: '#0071DC',
                    color: '#fff',
                  }}
                  onClick={clearQuickOrder}
                >
                  {selectedLanguageData?.reset_form}
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-lg-3 col-5 col-md-3">
              <div className="text-md-end text-start p-2 ">
                <button
                  type="button"
                  className=" text-white mb-0 text-uppercase py-2 px-lg-4 px-2 me-0 mt-0 fs-14"
                  style={{
                    border: '1px solid #0071DC',
                    borderRadius: '7px',
                    backgroundColor: '#0071DC',
                    color: '#fff',
                  }}
                  onClick={addItemsToDCart}
                >
                  {selectedLanguageData?.add_to_cart}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center d-none d-md-block" style={{ backgroundColor: 'rgb(215, 232, 247)' }}>
          <div className="row w-100 py-3 ">
            <div className="col-md-2 ">
              <h5 className="mb-0 pt-2 text-start ">{/* {selectedLanguageData?.image} */}</h5>
            </div>
            <div className="col-md-7  color-black  ">
              <h6 className="mb-0 pt-2 text-start fw-bolder fs-14 ">{selectedLanguageData?.details}</h6>
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
        {data?.length > 0 && (
          <div className="col-lg-12 border px-2 px-md-0">
            <div className="row w-100  mt-3">
              <QuickOrderCard
                data={data}
                itemList={itemList}
                selectedMultiLangData={selectedLanguageData}
                removeItemFromQucikList={removeItemFromQucikList}
                handleQuantityChange={handleQuantityChange}
              />
            </div>
          </div>
        )}
        <div className="row justify-content-center my-0 mt-5  py-lg-0 py-1">
          <div className="offset-0 offset-md-2 col-12 col-md-10">
            <div className="d-flex ">
              <input
                type="text"
                className="form-control w-auto border-2"
                name="inputValue"
                value={itemCode}
                onChange={(e: any) => setItemCode(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={selectedLanguageData?.item_code}
              />
              <div className="d-lg-none d-block ms-5">
                <button className="btn btn-primary" onClick={handleAddProduct}>
                  {selectedLanguageData?.add_product}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickOrderMaster;
