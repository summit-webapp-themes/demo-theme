import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';

export default function CheckoutPageMaster() {
  //   const { addressLoading, addressError, shippingAddress } = useGetUserAddresses();
  useCheckout();
  return <div></div>;
}
