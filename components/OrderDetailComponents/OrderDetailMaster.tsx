import useOrderDetailHook from '../../hooks/OrderDetailHook/useOrderDetailHook';
import useOrderListHook from '../../hooks/OrderListHooks/useOrderListHook';

function OrderDetailMaster() {
  const { orderData, isLoading, errorMessage } = useOrderDetailHook();
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 text-start fs-4 fw-bold">Order Details</div>
        <div className="col-12">
          <div className="mt-1 mb-3 fs-14 "> Orders # SAL-ORD-2024-00063</div>
        </div>
        <div className="col-12 px-0 mx-4">
          <div className="row border">
            <div className="col-4">
              <div className="row">
                <div className="col-12 fw-bold">Billing Addres</div>
                <div className="col-12">
                  {'smit-b2 Mumbai 400006 Mumbai, Maharashtra India'.split(' ').map((item, index) => (
                    <p key={index} className="m-0 fs-12">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="col-12 fw-bold">Shipping Addres</div>
              <div className="col-12">
                {'smit-b2 Mumbai 400006 Mumbai, Maharashtra India'.split(' ').map((item, index) => (
                  <p key={index} className="m-0 fs-12">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-4">
              <div className="col-12 fw-bold">Order Summary</div>
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div className="fs-14 fw-medium">Sub total (Excl. Tax)</div>
                  <div className="fs-12">$ 58400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailMaster;
