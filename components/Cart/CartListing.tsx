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
  const { cartListingItems, setCartListingItems, isLoading } = useFetchCartItems();
  const { addToCartItem, cLearCartAPIFunc, RemoveItemCartAPIFunc }: any = useAddToCartHook();
  const TokenFromStore: any = useSelector(get_access_token);
  const { SUMMIT_APP_CONFIG } = CONSTANTS;
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
  return (
    <>
      {isLoading ? (
        ''
      ) : Object.keys(cartListingItems)?.length !== 0 ? (
        <div className="container py-4">
          <div className="d-flex justify-content-between">
            <h2>Shopping Cart</h2>
            <div className="text-center">
              <button
                type="button"
                className=" btn btn-outline-primary text-decoration-none text-uppercase fs-6 px-2 me-2 "
                onClick={(e: any) => handleQuotation(e, cartListingItems?.name)}
              >
                {selectedMultiLangData?.request_for_quotation}
              </button>
              <button
                className="btn btn-outline-danger text-decoration-none  px-1"
                onClick={() => cLearCartAPIFunc(cartListingItems?.name, setCartListingItems)}
              >
                Clear cart
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
      ) : (
        <NoDataFound title={'Your cart is empty !!'} message={'Items added to your cart will show up here'} />
      )}
    </>
  );
}

export default CartListing;
