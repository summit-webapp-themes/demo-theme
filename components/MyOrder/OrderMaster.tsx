import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOrderListHook from '../../hooks/OrderListHooks/useOrderListHook';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import CancelledOrders from './CancelledOrders';
import PlacedOrders from './PlacedOrders';
import ListCardLoadingSkeleton from './ListCardLoadingSkeleton';

function OrderMaster() {
  const { orderListData, isLoading, errorMessage, history, handleHistoryDate } = useOrderListHook();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);

  return (
    <div className="container">
      <div className="mt-3">
        <h4>
          <b>{selectedLanguageData?.your_orders}</b>
        </h4>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="mt-2">
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
