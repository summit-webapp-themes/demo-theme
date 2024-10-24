import { Accordion, Button } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';
import AddressModal from './AddressModal';
import { Form } from 'react-bootstrap';
import CreateAddressModal from './CreateAddressModal';

const ShippingAddress = ({
  handleRenderDefaultShippingAddress,
  handleShowAccordion,
  showAccordion,
  shippingAddress,
  addressId,
  handleSelectAddress,
  stateList,
  handleEditShippingAddressChange,
  setEditShippingAddress,
  editShippingAddress,
  cityList,
  handlePostAddress,
  handleCreateAddressChange,
  emptyAddressFields,
  setEmptyAddressFields,
  shippingAddressLoading,
  shippingAddressError,
  show,
  showCreateAddModal,
  setShowCreateAddModal,
  setShow,
}: any) => {
  const handleClose = () => setShow(false);
  const handleShowModal = (address_id: any) => {
    const getShippingAddress = shippingAddress.find((item: any, i: any) => item.address_id === address_id);
    setEditShippingAddress(getShippingAddress);
    setEmptyAddressFields([]);
    setShow(true);
  };
  const handleCloseCreateAddModal = () => setShowCreateAddModal(false);
  const handleShowAddAddress = () => {
    setEmptyAddressFields([]);
    setShowCreateAddModal(true);
  };
  const renderAllShippingAddresses: any = () => {
    return (
      <Form>
        {shippingAddress?.map((address: any, i: any) => (
          <div key={i} className="mb-3">
            <Form.Check type="radio" id={address.address_id}>
              <Form.Check.Input
                type="radio"
                checked={addressId === address.address_id ? true : false}
                onClick={() => handleSelectAddress(address.address_id, shippingAddress)}
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
    if (shippingAddressLoading) {
      return <h2>Loading...</h2>;
    }
    if (!shippingAddressLoading && shippingAddress?.length > 0) {
      return (
        <div className="col-lg-12 border rounded mt-2 mt-md-0 py-2 ">
          <div className="row">
            <div className="col-md-2">
              <h6 className="mb-0 fw-bolder ps-2">Shipping Address</h6>
            </div>
            <div className="col-md-8">
              <div className="w-50">{handleRenderDefaultShippingAddress()}</div>
            </div>
            <div className="col-md-2 d-flex justify-content-end align-items-start">
              <Button variant="text" onClick={() => handleShowAccordion('shipping')} className={style.addressChange_btn}>
                Change
              </Button>
            </div>
          </div>
          {showAccordion && (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordionHeaderTitle">Select a delivery address</Accordion.Header>
                <Accordion.Body>{renderAllShippingAddresses()}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </div>
      );
    }
    if (!shippingAddressLoading && shippingAddress?.length === 0 && shippingAddressError !== '') {
      return (
        <div className="h-100vh">
          {/* <p>{shippingAddressError}</p> */}
          <h5>Please provide your address to proceed with the order.</h5>

          <Button className={`mt-3 ${style.submitAddress}`} onClick={handleShowAddAddress}>
            Add Address
          </Button>
        </div>
      );
    }
  };
  return (
    <>
      {handleDataRendering()}
      <AddressModal
        show={show}
        handleClose={handleClose}
        modalTitle={'Edit Shipping Address'}
        showAddress={editShippingAddress}
        stateList={stateList}
        handleEditAddressChange={handleEditShippingAddressChange}
        cityList={cityList}
        handlePostAddress={handlePostAddress}
        setShow={setShow}
        emptyAddressFields={emptyAddressFields}
      />
      <CreateAddressModal
        handleCloseCreateAddModal={handleCloseCreateAddModal}
        showCreateAddModal={showCreateAddModal}
        modalTitle={'Create Shipping Address'}
        stateList={stateList}
        cityList={cityList}
        handleCreateAddressChange={handleCreateAddressChange}
        handlePostAddress={handlePostAddress}
        address_type={'Shipping'}
        emptyAddressFields={emptyAddressFields}
        setShowCreateAddModal={setShowCreateAddModal}
      />
    </>
  );
};

export default ShippingAddress;
