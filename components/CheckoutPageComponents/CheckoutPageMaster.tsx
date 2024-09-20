import { useSelector } from 'react-redux';
import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';
import useGetUserAddresses from '../../hooks/CheckoutPageHook/useGetUserAddresses';
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
    emptyAddressFields,
    setEmptyAddressFields,
    show,
    showCreateAddModal,
    showBilling,
    showCreateBillingAddModal,
    setShowCreateAddModal,
    setShowBilling,
    setShow,
    setShowCreateBillingAddModal,
  } = useGetUserAddresses();
  const { stateList, handlePlaceOrder, handleUserAddressChange, showLocation } = useCheckout();

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
      handleUserAddressChange={handleUserAddressChange}
      emptyAddressFields={emptyAddressFields}
      setEmptyAddressFields={setEmptyAddressFields}
      shippingAddressLoading={shippingAddressLoading}
      billingAddressLoading={billingAddressLoading}
      shippingAddressError={shippingAddressError}
      billingAddressError={billingAddressError}
      showLocation={showLocation}
      show={show}
      showCreateAddModal={showCreateAddModal}
      showBilling={showBilling}
      showCreateBillingAddModal={showCreateBillingAddModal}
      setShowCreateAddModal={setShowCreateAddModal}
      setShowBilling={setShowBilling}
      setShow={setShow}
      setShowCreateBillingAddModal={setShowCreateBillingAddModal}
    />
  );
}
