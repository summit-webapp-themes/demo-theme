import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectedFilterLangDataFromStore } from "../../store/slices/general_slices/selected-multilanguage-slice";
import { Tab, Tabs } from "react-bootstrap";
import PlacedOrders from "./PlacedOrders";
import CancelledOrders from "./CancelledOrders";
import useOrderListHook from "../../hooks/OrderListHooks/useOrderListHook";

function OrderMaster() {
    const { orderListData, isLoading, errorMessage } = useOrderListHook()
    console.log(orderListData, 'orderList')
    const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
    const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
    useEffect(() => {
        if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
            setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
        }
    }, [SelectedLangDataFromStore]);
    console.log(selectedMultiLangData, 'lang')
    return (
        <div className="container">
            <div className="mt-3">
                <h4><b>{selectedMultiLangData?.your_orders}</b></h4>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="mt-2">
                    <Tab eventKey={1} title={selectedMultiLangData?.orders} >
                        <PlacedOrders selectedMultiLangData={selectedMultiLangData} isLoading={isLoading} orderListData={orderListData} />
                    </Tab>
                    <Tab eventKey={2} title={selectedMultiLangData?.cancelled}>
                        <CancelledOrders />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default OrderMaster