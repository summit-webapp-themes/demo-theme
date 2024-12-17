import Image from 'next/image';
import React from 'react';
import { imageLoader } from '../utils/image_loader';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import styles from '../styles/components/cartlist.module.scss';

interface CartCardPropsTypes {
  orderData: any;
  RemoveItemCartAPIFunc: any;
  quotationId: string;
  setCartListingItems: any;
}

const CartCard = ({ orderData, RemoveItemCartAPIFunc, quotationId, setCartListingItems }: any) => {
  const getPriceFromDetails = (details: any) => {
    const priceDetail = details.find((detail: any) => detail.name === 'Price');
    return priceDetail ? priceDetail?.value : 'N/A';
  };
  const handleRemoveItem = (itemCode: any) => {
    const params = {
      item_code: itemCode,
      quotation_id: quotationId,
    };
    RemoveItemCartAPIFunc(params, setCartListingItems);
  };

  return (
    <>
      <div className="row py-4">
        <div className="col-xl-5">
          <div className="d-flex">
            <div>
              {orderData?.image_url?.length > 0 && (
                <Image
                  src={orderData?.image_url[0]}
                  className="img-fluid"
                  alt="product-image"
                  loader={imageLoader}
                  width={120}
                  height={100}
                ></Image>
              )}
            </div>
            <div className="ms-3 mt-3">
              <strong>{orderData?.item_name}</strong>
              <div>
                <span className={`${styles.cart_action_icons} pe-2`}>
                  <FaRegEdit />
                </span>
                <span className={`${styles.cart_action_icons} pe-2`} onClick={() => handleRemoveItem(orderData?.item_code)}>
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 text-secondary mt-3">
          {orderData?.currency_symbol}
          {getPriceFromDetails(orderData?.details)}
        </div>

        <div className="col-xl-3"></div>
        <div className="col-xl-2 ">
          <div className="text-end mt-3">
            {orderData?.currency_symbol}
            {orderData?.amount}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartCard;
