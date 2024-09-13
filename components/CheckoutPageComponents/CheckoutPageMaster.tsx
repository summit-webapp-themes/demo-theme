import { useSelector } from 'react-redux';
import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';
import useGetUserAddresses from '../../hooks/CheckoutPageHook/useGetUserAddresse';
import CheckOutAddress from './CheckOutAddress';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';

export default function CheckoutPageMaster() {
  const {
    shippingAddressLoading,
    billingAddressLoading,
    shippingAddressError,
    billingAddressError,
    shippingAddress,
    billingAddress,
    handleEditShippingAddressChange,
    handleEditBillingAddressChange,
    setEditShippingAddress,
    editShippingAddress,
    editBillingAddress,
    cityList,
    setEditBillingAddress,
    handlePostAddress,
    handleCreateAddressChange,
  } = useGetUserAddresses();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const { stateList, handlePlaceOrder } = useCheckout();
  return (
    <CheckOutAddress
      shippingAddress={shippingAddress}
      billingAddress={billingAddress}
      stateList={stateList}
      handlePlaceOrder={handlePlaceOrder}
      handleEditShippingAddressChange={handleEditShippingAddressChange}
      handleEditBillingAddressChange={handleEditBillingAddressChange}
      setEditShippingAddress={setEditShippingAddress}
      editShippingAddress={editShippingAddress}
      cityList={cityList}
      editBillingAddress={editBillingAddress}
      setEditBillingAddress={setEditBillingAddress}
      handlePostAddress={handlePostAddress}
      handleCreateAddressChange={handleCreateAddressChange}
    />
  );
}
