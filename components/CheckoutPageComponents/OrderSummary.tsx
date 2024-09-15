import React from 'react';
import useOrderSummary from '../../hooks/CheckoutPageHook/useGetOrderSummary';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { Card } from 'react-bootstrap';
import style from '../../styles/components/orderCheckout.module.scss';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import useFetchCartItems from '../../hooks/CartPageHook/useFetchCartItems';
import Image from 'next/image';
import { CONSTANTS } from '../../services/config/app-config';

const OrderSummary = () => {
  const quotationId = useSelector(selectCart).quotation_Id;
  const { orderSummaryLoading: isLoading, orderSummaryError: errorMessage, orderSummary } = useOrderSummary(quotationId);
  const { cartListingItems } = useFetchCartItems();
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };

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
          {cartListingItems?.categories?.map((val: any) => {
            return val.orders.map((item: any, i: any) => (
              <div className=" col-md-12" key={i}>
                <div className="row mt-3 ms-2">
                  <div className=" col-md-4">
                  <div  style={{ textAlign: 'left' }}>
                    {item?.image_url && <Image src={item?.image_url} alt="product image" width={90} height={90} loader={imageLoader} />}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h6 className={`mb-0 ${style.product_item_title}`}>{item.item_name}</h6>
                    {item?.details?.map((val:any,i:any)=>
                      <div className="d-flex justify-content-between">
                      <p className={`m-0 ${style.p_tag}`}>
                      {val?.name}
                      </p>
                      <p className={`m-0 ${style.p_tag}`}>
                      {Object.values(val).includes('Price') && <LiaRupeeSignSolid />}{val.value}
                      </p>
                      </div>
                    )}
                    <div className="d-flex justify-content-between">
                      <p className={`m-0 ${style.p_tag}`}>
                        Qty
                      </p>
                      <p className={`m-0 ${style.p_tag}`}>
                        {item.qty}
                      </p>
                      </div>
                      <div className="d-flex justify-content-between"> 
                      <p className={`m-0 ${style.p_tag}`}>
                        Total Item Price:
                      </p>
                      <p className={`m-0 ${style.p_tag}`}>
                      <LiaRupeeSignSolid />
                        {item.amount}
                      </p>
                      </div>
                      <div className="d-flex justify-content-between"> 
                      <p className={`m-0 ${style.p_tag}`}>
                        Total Item Tax:
                      </p>
                      <p className={`m-0 ${style.p_tag}`}>
                        {item.tax}
                      </p>
                      </div>                   
                   
                  </div>
                </div>
              </div>
            ));
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderSummary;
