import { useRouter } from 'next/router';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOrderListHook from '../../hooks/OrderListHooks/useOrderListHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import CancelledOrders from './CancelledOrders';
import PlacedOrders from './PlacedOrders';

function OrderMaster() {
  const { orderListData, isLoading, errorMessage, history, handleHistoryDate, handleUpdateQuery } = useOrderListHook();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const { query } = useRouter();
  const handleTabSelect = (key: any) => {
    if (key === '1') {
      handleUpdateQuery('completed-orders', history);
    } else if (key === '2') {
      handleUpdateQuery('cancelled-orders', history);
    }
  };
  return (
    <div className="container">
      <div className="mt-3">
        <h4>
          <b>{selectedLanguageData?.your_orders}</b>
        </h4>
        <Tabs
          activeKey={query?.status === 'completed-orders' ? 1 : 2}
          id="uncontrolled-tab-example"
          className="mt-2"
          onSelect={handleTabSelect}
        >
          <Tab eventKey={1} title={selectedLanguageData?.orders}>
            <PlacedOrders
              selectedMultiLangData={selectedLanguageData}
              isLoading={isLoading}
              orderListData={orderListData}
              handleHistoryDate={handleHistoryDate}
              history={history}
            />
          </Tab>
          <Tab eventKey={2} title={selectedLanguageData?.cancelled}>
            <CancelledOrders
              selectedMultiLangData={selectedLanguageData}
              isLoading={isLoading}
              orderListData={orderListData}
              handleHistoryDate={handleHistoryDate}
              history={history}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default OrderMaster;
