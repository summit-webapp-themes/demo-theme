import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useOrderListHook from '../../../hooks/OrderListHooks/useOrderListHook';
import { SelectedFilterLangDataFromStore } from '../../../store/slices/general_slices/selected-multilanguage-slice';
import { Placeholder, Tab, Tabs } from 'react-bootstrap';
import PlacedOrders from './PlacedOrders';
import CancelledOrders from './CancelledOrders';
import OrdersDropDowm from './OrdersDropDowm';
import MyOrderSkeleton from './MyOrderSkeleton';

function OrderMaster() {
  const router = useRouter();
  const { status } = router.query;
  const { orderListData, isLoading, errorMessage } = useOrderListHook();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);

  const activeTab = status || 'completed-orders';

  const handleTabChange = (key: any) => {
    router.push(
      {
        pathname: router.pathname,
        query: { status: key },
      },
      undefined,
      { shallow: true }
    );
  };

  if (isLoading) {
    return (
      <div className="container">
        <MyOrderSkeleton />
      </div>
    );
  }
  if (selectedLanguageData && Object?.keys(selectedLanguageData)?.length > 0) {
    return (
      <div className="container">
        <div className="my-4">
          <h4 className="my-2">
            <b>{selectedLanguageData?.your_orders}</b>
          </h4>
          <Tabs activeKey={`${activeTab}`} onSelect={handleTabChange} id="uncontrolled-status-example" className="mt-2">
            <Tab eventKey="completed-orders" title={selectedLanguageData?.orders?.toUpperCase()} className="fw-bolder">
              <>
                <OrdersDropDowm selectedLanguageData={selectedLanguageData} orderListData={orderListData} />
                <PlacedOrders selectedMultiLangData={selectedLanguageData} isLoading={isLoading} orderListData={orderListData} />
              </>
            </Tab>
            <Tab eventKey="cancelled-orders" title={selectedLanguageData?.cancelled.toUpperCase()} className="fw-bolder">
              <OrdersDropDowm selectedLanguageData={selectedLanguageData} orderListData={orderListData} />
              {/* <OrdersDropDowm /> */}
              <CancelledOrders />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
  if (errorMessage) {
    return <>{errorMessage}</>;
  }
  return <></>;
}
export default OrderMaster;
