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
    fetchUserShippingAddress,
    fetchUserBillingAddress,
    shippingAddress,
    billingAddress,
  } = useGetUserAddresses();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  useCheckout();
  return <CheckOutAddress shippingAddress={shippingAddress} billingAddress={billingAddress} />;
}
