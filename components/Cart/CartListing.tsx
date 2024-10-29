import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAddToCartHook from '../../hooks/CartPageHook/useAddToCart';
import useFetchCartItems from '../../hooks/CartPageHook/useFetchCartItems';
import getQuotationPostApi from '../../services/api/cart-apis/get-quotation-api';
import { CONSTANTS } from '../../services/config/app-config';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import NoDataFound from '../NoRecordFound';
import ListViewCard from './ListViewCard';

function CartListing() {
  const { cartListingItems, setCartListingItems, isLoading, errorMessage } = useFetchCartItems();
  const { addToCartItem, cLearCartAPIFunc, RemoveItemCartAPIFunc }: any = useAddToCartHook();
  const TokenFromStore: any = useSelector(get_access_token);
  const { SUMMIT_APP_CONFIG } = CONSTANTS;
  const [clearCartLoader, setClearCartLoader] = useState(false);
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);
  const handleQuotation = async (e: any, quot_id: any) => {
    e.preventDefault();
    const getQuotationInCart = await getQuotationPostApi(SUMMIT_APP_CONFIG, quot_id, TokenFromStore?.token);
    if (getQuotationInCart?.data?.message?.msg === 'success') {
      window.open(`${getQuotationInCart?.data?.message?.data?.print_url}`, '_blank');
    }
    return getQuotationInCart;
  };
  const handleDataRendering = () => {
    if (isLoading) {
      return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status" />
        </div>
      );
    }
    if (!isLoading && Object.keys(cartListingItems)?.length !== 0) {
      return (
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-sm-4">
              <h4>
                <b>{selectedMultiLangData?.shopping_cart}</b>
              </h4>
            </div>
            <div className="col-12 col-sm-8 text-start text-sm-end">
              <button
                type="button"
                className=" btn btn-outline-primary text-decoration-none text-uppercase px-2 me-2 fs-12 "
                onClick={(e: any) => handleQuotation(e, cartListingItems?.name)}
              >
                {selectedMultiLangData?.request_for_quotation}
              </button>
              <button
                className="btn btn-outline-danger text-decoration-none px-1 fs-12"
                onClick={() => cLearCartAPIFunc(cartListingItems?.name, setCartListingItems, setClearCartLoader)}
                disabled={clearCartLoader}
              >
                {clearCartLoader ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <>{selectedMultiLangData?.clear_cart}</>
                )}
              </button>
            </div>
          </div>
          <ListViewCard
            cartListingItems={cartListingItems}
            setCartListingItems={setCartListingItems}
            addToCartItem={addToCartItem}
            RemoveItemCartAPIFunc={RemoveItemCartAPIFunc}
            selectedMultiLangData={selectedMultiLangData}
          />
        </div>
      );
    }
    if (!isLoading && Object.keys(cartListingItems)?.length === 0) {
      return <NoDataFound title={'Your cart is empty !!'} message={'Items added to your cart will show up here'} />;
    }
  };
  return <>{handleDataRendering()}</>;
}

export default CartListing;
