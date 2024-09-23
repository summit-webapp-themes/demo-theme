import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useOrderDetailHook from '../../hooks/OrderDetailHook/useOrderDetailHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import NoDataFound from '../NoRecordFound';
import OrderDeatil from './OrderDeatil';

function OrderDetailMaster() {
  const { orderData, isLoading, errorMessage } = useOrderDetailHook();
  console.log(orderData, 'data');
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);

  return (
    <>
      {isLoading ? (
        <div className="row justify-content-center">
          <>
            <div className="col-lg-12 h-100 mx-3">
              <div className="spinner-border" role="status" />
            </div>
          </>
        </div>
      ) : orderData?.length > 0 ? (
        <OrderDeatil orderData={orderData} selectedMultiLangData={selectedMultiLangData} />
      ) : (
        <NoDataFound title={selectedMultiLangData?.no_orders_found} message={selectedMultiLangData?.orders_show_up_here} />
      )}
    </>
  );
}

export default OrderDetailMaster;
