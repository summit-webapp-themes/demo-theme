import { useEffect, useState } from "react";
import useFetchCartItems from "../../hooks/CartPageHook/useFetchCartItems";
import { useSelector } from "react-redux";
import { SelectedFilterLangDataFromStore } from "../../store/slices/general_slices/selected-multilanguage-slice";
import ListViewCard from "./ListViewCard";
import useAddToCartHook from "../../hooks/CartPageHook/useAddToCart";
import { get_access_token } from "../../store/slices/auth/token-login-slice";
import getQuotationPostApi from "../../services/api/cart-apis/get-quotation-api";
import { CONSTANTS } from "../../services/config/app-config";

function CartListing() {
  const {
    cartListingItems,
    setCartListingItems,
    isLoading,
    errorMessage,
  } = useFetchCartItems()
  const { addToCartItem, cLearCartAPIFunc, RemoveItemCartAPIFunc }: any = useAddToCartHook()
  const TokenFromStore: any = useSelector(get_access_token);
  const { SUMMIT_APP_CONFIG } = CONSTANTS
  const handleQuotation = async (e: any, quot_id: any) => {
    e.preventDefault();
    const getQuotationInCart = await getQuotationPostApi(
      SUMMIT_APP_CONFIG,
      quot_id,
      TokenFromStore?.token
    )
    if (getQuotationInCart?.data?.message?.msg === "success") {
      window.open(`${getQuotationInCart?.data?.message?.data?.print_url}`, '_blank')
    }
    return getQuotationInCart;
  };
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <h2>Shopping Cart</h2>
        <div className="text-center">
          <button
            type="button"
            className=" btn btn-outline-primary text-decoration-none text-uppercase fs-6 px-2 me-2 "
            onClick={(e: any) =>
              handleQuotation(
                e,
                cartListingItems?.name
              )
            }
          >
            {
              // selectedMultiLangData?.request_for_quotation
            }
            Request for quotation
          </button>
          <button className="btn btn-outline-danger text-decoration-none  px-1" onClick={() => cLearCartAPIFunc(cartListingItems?.name)}>Clear cart</button>
        </div>
      </div>
      <ListViewCard cartListingItems={cartListingItems} setCartListingItems={setCartListingItems} addToCartItem={addToCartItem} RemoveItemCartAPIFunc={RemoveItemCartAPIFunc} />
    </div>
  )
}

export default CartListing;
