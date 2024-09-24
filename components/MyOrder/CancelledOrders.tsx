import MyOrderCard from '../../cards/MyOrderCard';
import NoDataFound from '../NoRecordFound';
import ListCardLoadingSkeleton from './ListCardLoadingSkeleton';

function CancelledOrders({ selectedMultiLangData, isLoading, orderListData, handleHistoryDate, history }: any) {
  const orderCancelled: any = orderListData.length > 0 && orderListData.filter((items: any) => items?.payment_status === 'Cancelled');
  return (
    <>
      <div role="tabpanel" aria-hidden="false">
        <div className="row my-4 fs-14">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-2 col-sm-4 col-6">
                <select className="form-select w-auto " onChange={handleHistoryDate} value={history}>
                  <option value="this_month">{selectedMultiLangData?.this_month}</option>
                  <option value="last_30_days">{selectedMultiLangData?.last_30_days}</option>
                  <option value="past_3_months">{selectedMultiLangData?.past_3_months}</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div className="col text-end me-2 order-myorder-margin">
                <p className="mb-0 order-ptag">
                  <span className="bold">{orderListData?.length}</span> {selectedMultiLangData?.orders}
                </p>
              </div>
            </div>
          </div>
        </div>
        {isLoading === true ? (
          <>
            {[...Array(5)].map(() => (
              <ListCardLoadingSkeleton />
            ))}
          </>
        ) : (
          <>
            {orderCancelled && orderCancelled?.length > 0 ? (
              <>
                {orderCancelled &&
                  orderCancelled?.map((data: any, i: any) => (
                    <div className="row color-black fs-14" key={i}>
                      <div className="col-lg-12">
                        <div className="order_card cart_table mb-2 card">
                          <MyOrderCard data={data} selectedMultiLangData={selectedMultiLangData} />
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <NoDataFound title={selectedMultiLangData?.no_orders_found} message={selectedMultiLangData?.orders_show_up_here} />
            )}
          </>
        )}
      </div>
    </>
  );
}
export default CancelledOrders;
