import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';
import useGetUserAddresses from '../../hooks/CheckoutPageHook/useGetUserAddresses';
import CheckOutAddress from './CheckOutAddress';

export default function CheckoutPageMaster() {
  const {
    shippingAddressLoading,
    billingAddressLoading,
    shippingAddressError,
    billingAddressError,
    fetchUserShippingAddress,
    fetchUserBillingAddress,
    shippingAddress,
    billingAddress,
  } = useGetUserAddresses();
  useCheckout();
  return <CheckOutAddress shippingAddress={shippingAddress} billingAddress={billingAddress} />;
}
