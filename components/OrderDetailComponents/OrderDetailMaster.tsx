import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useOrderDetailHook from '../../hooks/OrderDetailHook/useOrderDetailHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import NoDataFound from '../NoRecordFound';
import OrderDeatil from './OrderDeatil';
import ListCardLoadingSkeleton from '../MyOrder/ListCardLoadingSkeleton';

function OrderDetailMaster() {
  const { orderData, isLoading, errorMessage } = useOrderDetailHook();
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);

  return (
    <div className="container">
      {isLoading ? (
        <>
          {[...Array(5)].map(() => (
            <ListCardLoadingSkeleton />
          ))}
        </>
      ) : orderData?.length > 0 ? (
        <OrderDeatil orderData={orderData} selectedMultiLangData={selectedMultiLangData} />
      ) : (
        <NoDataFound title={selectedMultiLangData?.no_orders_found} message={selectedMultiLangData?.orders_show_up_here} />
      )}
    </div>
  );
}

export default OrderDetailMaster;
