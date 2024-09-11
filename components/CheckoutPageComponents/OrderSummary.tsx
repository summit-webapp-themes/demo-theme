import React from 'react';
import useOrderSummary from '../../hooks/CheckoutPageHook/useGetOrderSummary';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { Card } from 'react-bootstrap';
import style from '../../styles/components/orderCheckout.module.scss';
import { LiaRupeeSignSolid } from 'react-icons/lia';

const OrderSummary = () => {
  const quotationId = useSelector(selectCart).quotation_Id;
  const { orderSummaryLoading: isLoading, orderSummaryError: errorMessage, orderSummary } = useOrderSummary(quotationId);
  console.log(quotationId, orderSummary, 'quotationId');
  return (
    <div className="mt-3">
      <Card style={{ width: 'auto' }}>
        <Card.Body>
          <h5 className="fw-bold">Order Summery</h5>
          <div className="d-flex flex-column">
            {orderSummary?.values?.length > 0 &&
              orderSummary?.values
                ?.filter((val: any, i: any) => val.value && val.value != 0)
                .map((item: any, i: any) => (
                  <div className="d-flex justify-content-between">
                    <p className={`m-0 ${style.p_tag} ${item.name === 'Total' ? style.p_tagBold : ''}`}>{item.name}</p>
                    <p className={`m-0 ${style.p_tag} ${item.name === 'Total' ? style.p_tagBold : ''}`}>
                      <LiaRupeeSignSolid />
                      {item.value}
                    </p>
                  </div>
                ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderSummary;
