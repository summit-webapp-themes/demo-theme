import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import style from '../../styles/components/orderCheckout.module.scss';
import BillingAddress from './BillingAndShippingAddress/BillingAddress';
import ShippingAddress from './BillingAndShippingAddress/ShippingAddress';
import OrderSummery from './OrderSummary';
import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';

const CheckOutAddress = ({
  shippingAddress,
  billingAddress,
  stateList,
  handlePlaceOrder,
  handleEditShippingAddressChange,
  handleEditBillingAddressChange,
  setEditShippingAddress,
  editShippingAddress,
  editBillingAddress,
  cityList,
  setEditBillingAddress,
  handlePostAddress,
  handleCreateAddressChange,
}: any) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [showBillingAccordion, setShowBillingAccordion] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(true);
  const [showSelectedAddress, setShowSelectedAddress] = useState<any>({});
  const [showSelectedBillingAddress, setShowSelectedBillingAddress] = useState<any>({});
  const [addressId, setAddressId] = useState<number | string>();
  const [billingAddressId, setBillingAddressId] = useState<any>();

  const handleShowAccordion = (type: string) => {
    if (type === 'shipping') {
      setShowAccordion((prev) => !prev);
    } else {
      setShowBillingAccordion((prev) => !prev);
    }
  };

  const handleShowBillingAddress = () => {
    setShowBillingAddress((prev) => !prev);
  };
  const handleSelectAddress = (id: number | string, address: any) => {
    setAddressId(id);
    const getSelectedAddress = address?.find((val: any, i: number) => val.address_id === id);
    setShowSelectedAddress(getSelectedAddress);
  };
  const handleBillingSelectAddress = (id: number | string, address: any) => {
    setBillingAddressId(id);
    const getSelectedAddress = address?.find((val: any, i: number) => val.address_id === id);
    setShowSelectedBillingAddress(getSelectedAddress);
  };
  const handleRenderDefaultShippingAddress: any = (address: any) => {
    const defaultAddress = address?.length > 0 && address?.find((item: any, val: any) => item?.set_as_default === true);

    useEffect(() => {
      if (defaultAddress) {
        setAddressId(defaultAddress.address_id);
        setShowSelectedAddress(defaultAddress);
      }
    }, [defaultAddress]);
    return (
      Object?.keys(showSelectedAddress)?.length > 0 && (
        <ul>
          <li className={`fw-bold ml-2 ${style.address_list}`}>{showSelectedAddress.address_id} </li>
          <li className={style.address_list}>{showSelectedAddress.user_id}</li>
          <li className={style.address_list}>{showSelectedAddress.full_address}</li>
        </ul>
      )
    );
  };

  const handleRenderDefaultBillingAddress: any = (address: any) => {
    const defaultBillingAddress = address?.length > 0 && address?.find((item: any, val: any) => item?.set_as_default === true);

    useEffect(() => {
      if (defaultBillingAddress) {
        setBillingAddressId(defaultBillingAddress.address_id);
        setShowSelectedBillingAddress(defaultBillingAddress);
      }
    }, [defaultBillingAddress]);
    return (
      Object?.keys(showSelectedBillingAddress)?.length > 0 && (
        <ul>
          <li className={`fw-bold ml-2 ${style.address_list}`}>{showSelectedBillingAddress.address_id} </li>
          <li className={style.address_list}>{showSelectedBillingAddress.user_id}</li>
          <li className={style.address_list}>{showSelectedBillingAddress.full_address}</li>
        </ul>
      )
    );
  };

  return (
    <div className={`container-fluid w-100 ps-lg-5 pe-lg-5`}>
      <h4 className="text-center mt-4 fw-bold"> Order Checkout</h4>
      <div className="row">
        <div className="col-md-8">
          <div className="row listing-card py-2">
            <ShippingAddress
              handleRenderDefaultShippingAddress={handleRenderDefaultShippingAddress}
              handleShowAccordion={handleShowAccordion}
              showAccordion={showAccordion}
              shippingAddress={shippingAddress}
              addressId={addressId}
              handleSelectAddress={handleSelectAddress}
              stateList={stateList}
              setEditShippingAddress={setEditShippingAddress}
              handleEditShippingAddressChange={handleEditShippingAddressChange}
              editShippingAddress={editShippingAddress}
              cityList={cityList}
              handlePostAddress={handlePostAddress}
              handleCreateAddressChange={handleCreateAddressChange}
            />
            <Form className="mt-2">
              <div key={`default-checkbox`} className="mb-3">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  checked={showBillingAddress}
                  onClick={handleShowBillingAddress}
                  id={`default-checkbox`}
                  label={`Use the same address for Billing`}
                />
              </div>
            </Form>
            {!showBillingAddress && (
              <BillingAddress
                handleRenderDefaultBillingAddress={handleRenderDefaultBillingAddress}
                handleShowAccordion={handleShowAccordion}
                showBillingAccordion={showBillingAccordion}
                billingAddress={billingAddress}
                billingAddressId={billingAddressId}
                handleBillingSelectAddress={handleBillingSelectAddress}
                stateList={stateList}
                handleEditBillingAddressChange={handleEditBillingAddressChange}
                cityList={cityList}
                editBillingAddress={editBillingAddress}
                setEditBillingAddress={setEditBillingAddress}
                handlePostAddress={handlePostAddress}
                handleCreateAddressChange={handleCreateAddressChange}
              />
            )}
          </div>
          <Button variant="primary" className="" onClick={() => handlePlaceOrder(billingAddressId, addressId, showBillingAddress)}>
            Place Order
          </Button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <OrderSummery />
        </div>
      </div>
    </div>
  );
};

export default CheckOutAddress;
