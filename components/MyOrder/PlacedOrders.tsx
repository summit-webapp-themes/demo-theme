import MyOrderCard from '../../cards/MyOrderCard';
import NoDataFound from '../NoRecordFound';
import { Placeholder } from 'react-bootstrap';

function PlacedOrders({ selectedMultiLangData, isLoading, orderListData }: any) {
  return (
    <>
      <div role="tabpanel" aria-hidden="false">
        {isLoading === true ? (
          <div className="row justify-content-center">
            {[...Array(10)].map(() => (
              <>
                <div className="card">
                  <Placeholder animation="glow">
                    <div className="row">
                      <div className="col-4">
                        <Placeholder className="" style={{ width: '100%', height: 200 }} />
                      </div>
                      <div className="col-8">
                        <Placeholder className="" style={{ width: '100%', height: 200 }} />
                      </div>
                    </div>
                  </Placeholder>
                </div>
              </>
            ))}
          </div>
        ) : (
          <>
            {orderListData && orderListData?.length > 0 ? (
              <>
                {orderListData &&
                  orderListData
                    ?.filter((items: any) => items?.payment_status !== 'Cancelled')
                    ?.map((data: any, i: any) => (
                      <div className="row color-black fs-14 fw-light" key={i}>
                        <div className="col-lg-12">
                          <div className="order_card cart_table mb-2 card ">
                            <MyOrderCard data={data} selectedMultiLangData={selectedMultiLangData} />
                          </div>
                        </div>
                      </div>
                    ))}
              </>
            ) : (
              <NoDataFound
                heading={selectedMultiLangData?.no_orders_found}
                content={selectedMultiLangData?.orders_show_up_here}
                selectedMultiLangData={selectedMultiLangData}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
export default PlacedOrders;
