import { Accordion, Button, Form } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';
import AddressModal from './AddressModal';
import CreateAddressModal from './CreateAddressModal';

const BillingAddress = ({
  handleRenderDefaultBillingAddress,
  handleShowAccordion,
  showBillingAccordion,
  billingAddress,
  billingAddressId,
  handleBillingSelectAddress,
  stateList,
  handleEditBillingAddressChange,
  editBillingAddress,
  cityList,
  setEditBillingAddress,
  handlePostAddress,
  handleCreateAddressChange,
  emptyAddressFields,
  setEmptyAddressFields,
  billingAddressLoading,
  billingAddressError,
  showBilling,
  showCreateBillingAddModal,
  setShowBilling,
  setShowCreateBillingAddModal,
}: any) => {
  const handleClose = () => setShowBilling(false);
  const handleCloseCreateAddModal = () => setShowCreateBillingAddModal(false);
  const handleShowModal = (address_id: any) => {
    const getBillingAddress = billingAddress?.find((item: any, i: any) => item?.address_id === address_id);
    setEditBillingAddress(getBillingAddress);
    setEmptyAddressFields([]);
    setShowBilling(true);
  };
  const handleShowAddAddress = () => {
    setEmptyAddressFields([]);
    setShowCreateBillingAddModal(true);
  };

  const renderAllBillingAddresses: any = () => {
    return (
      <Form>
        {billingAddress?.map((address: any, i: any) => (
          <div key={i} className="mb-3">
            <Form.Check type="radio" id={address.address_id}>
              <Form.Check.Input
                type="radio"
                checked={billingAddressId === address.address_id ? true : false}
                onClick={() => handleBillingSelectAddress(address.address_id, billingAddress)}
              />
              <Form.Check.Label>
                <li className={`fw-bold ml-2 ${style.address_list}`}>{address.address_id} </li>
                <li className={style.address_list}>{address.user_id}</li>
                <li className={style.address_list}>
                  {address.full_address}
                  <span>
                    <Button variant="link" className={style.edit_btn} onClick={() => handleShowModal(address.address_id)}>
                      Edit Address
                    </Button>
                  </span>
                </li>
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
        <Button className={style.submitAddress} onClick={handleShowAddAddress}>
          Add Address
        </Button>
      </Form>
    );
  };

  const handleDataRendering = () => {
    if (billingAddressLoading) {
      return <h2>Loading...</h2>;
    }
    if (!billingAddressLoading && billingAddress?.length > 0) {
      return (
        <div className="col-lg-12 p-2 border rounded mt-3">
          <div className="row">
            <div className="col-md-2">
              <h6 className="mb-0 fw-bolder">Billing Address</h6>
            </div>
            <div className="col-md-8">
              <div className="w-50">{handleRenderDefaultBillingAddress(billingAddress)}</div>
            </div>
            <div className="col-md-2 d-flex justify-content-end align-items-start">
              <Button variant="text" onClick={() => handleShowAccordion('billing')} className={style.addressChange_btn}>
                Change
              </Button>
            </div>
          </div>
          {showBillingAccordion && (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordionHeaderTitle">Select a delivery address</Accordion.Header>
                <Accordion.Body>{renderAllBillingAddresses()}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </div>
      );
    }
    if (!billingAddressLoading && billingAddress?.length === 0 && billingAddressError !== '') {
      return (
        <div className="h-100vh d-flex justify-content-center align-items-center">
          <p>{billingAddressError}</p>
        </div>
      );
    }
  };
  return (
    <>
      {handleDataRendering()}
      <AddressModal
        show={showBilling}
        handleClose={handleClose}
        modalTitle={'Edit Billing Address'}
        stateList={stateList}
        handleEditAddressChange={handleEditBillingAddressChange}
        showAddress={editBillingAddress}
        cityList={cityList}
        handlePostAddress={handlePostAddress}
        setShow={setShowBilling}
        emptyAddressFields={emptyAddressFields}
      />

      <CreateAddressModal
        handleCloseCreateAddModal={handleCloseCreateAddModal}
        showCreateAddModal={showCreateBillingAddModal}
        modalTitle={'Create Billing Address'}
        stateList={stateList}
        cityList={cityList}
        handleCreateAddressChange={handleCreateAddressChange}
        handlePostAddress={handlePostAddress}
        address_type={'Billing'}
        emptyAddressFields={emptyAddressFields}
      />
    </>
  );
};

export default BillingAddress;
