import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CONSTANTS } from '../../services/config/app-config';
import { currency_selector_state } from '../../store/slices/general_slices/multi-currency-slice';
import cartStyles from '../../styles/components/cartlist.module.scss';
import NoImage from '../../public/assets/images/no_image.png'
import debounce from 'debounce';

function ListViewCard({ cartListingItems, setCartListingItems, addToCartItem, RemoveItemCartAPIFunc, selectedMultiLangData }: any) {
  const router = useRouter();
  const currency_state_from_redux: any = useSelector(currency_selector_state);
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [updatedCartList, setUpdatedCartList]: any = useState([]);

  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };

  const handleDeleteItem = (item_code: any) => {
    const params = {
      item_code: item_code,
      quotation_id: cartListingItems?.name,
    };
    RemoveItemCartAPIFunc(params, setCartListingItems);
  };

  const goToCheckout = () => {
    router.push('/checkout');
  };

  const handleUpdateCart = useCallback((updatedList: any) => {
    const params = {
      // currency: currency_state_from_redux?.selected_currency_value ? currency_state_from_redux?.selected_currency_value : currency_state_from_redux?.default_currency_value,
      currency: 'INR',
      party_name: cartListingItems?.party_name,
      item_list: updatedList
    }
    addToCartItem(params, setCartListingItems)
  }, [])

  const debouncedUpdateCart = useMemo(() => {
    return debounce(handleUpdateCart, 2000);
  }, [handleUpdateCart]);

  const handleQtyChange = (item_code: string, value: string) => {
    const newQty = Number(value);
    const updatedItems = cartListingItems?.categories?.map((category: any) => ({
      ...category,
      orders: category.orders.map((item: any) => {
        if (item.item_code === item_code) {
          return { ...item, qty: newQty };
        }
        return item;
      }),
    }));
    setCartListingItems((prevItems: any) => ({ ...prevItems, categories: updatedItems }));
    setUpdatedCartList([{ item_code, quantity: newQty }]);
    debouncedUpdateCart(updatedCartList)
  };
  useEffect(() => {
    if (cartListingItems?.categories?.length > 0) {
      const firstCategory = cartListingItems.categories[0];
      if (firstCategory?.orders?.length > 0) {
        const firstOrder = firstCategory.orders[0];
        setCurrencySymbol(firstOrder.currency_symbol);
      }
    }
  }, [cartListingItems]);
  return (
    <div className="py-3">
      {cartListingItems?.categories?.length > 0 &&
        cartListingItems?.categories?.map((category: any) => (
          <div className="border p-4">
            <h5><b>{category?.category}</b></h5>
            <div className="row d-md-none d-lg-block d-sm-none d-none fs-14 ">
              <div className="col-lg-12 col-md-6 fs-14">
                <div className={`row ${cartStyles.cart_header}`}>
                  <div className="col-lg-2  col-md-12 m-0"> </div>
                  <div className="col-lg-7 col-md-12">
                    <b>{selectedMultiLangData?.item_with_desc}</b>
                  </div>
                  <div className="col-lg-1 col-md-12 text-center">
                    <b>{selectedMultiLangData?.price_c}</b>
                  </div>
                  <div className="col-lg-1 col-md-12 text-center">
                    <b>{selectedMultiLangData?.quantity_c}</b>
                  </div>
                  <div className="col-lg-1 col-md-12 text-center">
                    <b>{selectedMultiLangData?.total}</b>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                {category?.orders?.length > 0 &&
                  category?.orders?.map((item: any) => (
                    <div className="row mt-3 ms-2">
                      <div className="col-lg-2 col-md-12">
                        {item?.image_url && (
                          <Image src={item?.image_url ? item?.image_url : NoImage} alt="product image" width={100} height={100} loader={imageLoader} />
                        )}
                      </div>
                      <div className="col-lg-7 col-md-12">
                        {item?.item_name} <br />
                        <b>
                          {selectedMultiLangData?.item_code} : {item?.item_code}
                        </b>
                        <div>
                          <button className="btn btn-link text-decoration-none p-0 fs-14" onClick={() => handleDeleteItem(item?.item_code)}>
                            {selectedMultiLangData?.delete}
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-12">
                        {item?.currency_symbol}
                        {item?.amount}
                      </div>
                      <div className="col-lg-1 col-md-12">
                        <input
                          type="number"
                          value={item?.qty}
                          className="w-100 text-center border"
                          onChange={(e) => handleQtyChange(item?.item_code, e.target.value)}
                        />
                      </div>
                      <div className="col-lg-1 col-md-12">
                        {item?.currency_symbol}
                        {item?.amount}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {category?.orders?.length > 0 &&
              category?.orders?.map((item: any) => (
                <div className="row d-lg-none d-md-block">
                  <div className="col-12 border">
                    <div className="row">
                      <div className="col-6 col-sm-6">
                        {item?.image_url && (
                          <Image src={item?.image_url ? item?.image_url : NoImage} alt="product image" width={100} height={100} loader={imageLoader} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 border">
                    <div className="row">
                      <div className="col-6">
                        <b>{selectedMultiLangData?.item_with_desc}</b>
                      </div>
                      <div className="col-6">
                        {item?.item_name} <br />
                        <b>
                          {selectedMultiLangData?.item_code} : {item?.item_code}
                        </b>
                        <div>
                          <button className="btn btn-link text-decoration-none p-0" onClick={() => handleDeleteItem(item?.item_code)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 border">
                    <div className="row">
                      <div className="col-6">
                        <b>{selectedMultiLangData?.price_c} </b>
                      </div>
                      <div className="col-6">
                        {item?.currency_symbol}
                        {item?.amount}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 border">
                    <div className="row">
                      <div className="col-6">
                        <b>{selectedMultiLangData?.quantity_c}</b>
                      </div>
                      <div className="col-6">
                        <input
                          type="number"
                          value={item?.qty}
                          className="w-auto text-start border-0"
                          onChange={(e) => handleQtyChange(item?.item_code, e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 border">
                    <div className="row">
                      <div className="col-6">
                        <b>{selectedMultiLangData?.total}</b>
                      </div>
                      <div className="col-6">
                        {item?.currency_symbol}
                        {item?.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      <div className="container mt-3 mb-0 pb-0">
        <div className="col-12 pb-0 mb-0">
          <div className="row justify-content-start fs-14">
            <div className="col-md-8 col-lg-6 text-start ">
              <>
                <div className="row fs-16 ">
                  <div className="col-lg-6 col-6  "><b>{selectedMultiLangData?.sub_total}</b> </div>:
                  <div className="col-lg-5 col-md-5 col-sm-5 col-6  ">
                    <b>{currencySymbol} {cartListingItems?.grand_total_excluding_tax}</b>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-6 col-6 fs-16 "><b>{selectedMultiLangData?.order_total_including_tax}</b> </div>:
                  <div className="col-lg-5 col-md-5 col-sm-5 col-6 fs-16 ">
                    <b>{currencySymbol} {cartListingItems?.grand_total_including_tax}</b>
                  </div>
                  <div className="col-12">
                    <div className="row  mt-2">
                      <div className="col-6 d-flex align-items-center text-center ">
                        <Link href="/checkout">
                          <button
                            type="button"
                            className='btn btn-primary fs-12 py-1'
                            onClick={goToCheckout}
                          >
                            {selectedMultiLangData?.order_checkout}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      {/* <EnqModal show={showEnqModal} handleClose={handleCloseEnqModal} /> */}
    </div>
  );
}
export default ListViewCard;

