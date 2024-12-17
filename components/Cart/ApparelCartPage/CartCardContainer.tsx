import React from 'react';
import CartCard from '../../../cards/CartCard';

interface CartCardContainerPropTypes {
  cartListingItems: any;
  RemoveItemCartAPIFunc: any;
  setCartListingItems: any;
}

const CartCardContainer = ({ cartListingItems, RemoveItemCartAPIFunc, setCartListingItems }: CartCardContainerPropTypes) => {
  const allOrders = cartListingItems?.categories?.flatMap((category: any) => category?.orders);
  console.log(cartListingItems, 'data111');
  return (
    <div>
      <div className="text-uppercase py-5 text-center bg-blue text-light ">
        <h5 className="m-0">Shopping Cart</h5>
      </div>
      <div className="container-xl mt-5 ">
        <div className="row text-uppercase fw-bold">
          <div className="col-xl-5">product</div>
          <div className="col-xl-2 text-start">price</div>
          <div className="col-xl-3 text-center">quantity</div>
          <div className="col-xl-2 text-end">total</div>
        </div>
        <hr />
        <div>
          {allOrders?.length > 0 &&
            allOrders?.map((order: any) => (
              <CartCard
                orderData={order}
                RemoveItemCartAPIFunc={RemoveItemCartAPIFunc}
                quotationId={cartListingItems?.name}
                setCartListingItems={setCartListingItems}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartCardContainer;
