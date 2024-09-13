import { Accordion, Button } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';
import { useState } from 'react';
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
}: any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showCreateAddModal, setShowCreateAddModal] = useState(false);
  const handleShowModal = (address_id: any) => {
    const getShippingAddress = shippingAddress.find((item: any, i: any) => item.address_id === address_id);
    console.log(getShippingAddress, 'getShippingAddress');
    // setShippingAddress(getShippingAddress);
    setEditShippingAddress(getShippingAddress);
    setShow(true);
  };
  const handleCloseCreateAddModal = () => setShowCreateAddModal(false);
  const handleShowAddAddress = () => {
    setShowCreateAddModal(true);
  };
  console.log(editShippingAddress, 'editShippingAddress');
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
  return (
    <>
      <div className="col-lg-12 p-2 border mt-3 ">
        <div className="row">
          <div className="col-md-2">
            <h6 className="mb-0 fw-bolder">Shipping Address</h6>
          </div>
          <div className="col-md-8">
            <div className="w-50">{handleRenderDefaultShippingAddress(shippingAddress)}</div>
          </div>
          <div className="col-md-2">
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
      <AddressModal
        show={show}
        handleClose={handleClose}
        modalTitle={'Edit Shipping Address'}
        showAddress={editShippingAddress}
        stateList={stateList}
        handleEditAddressChange={handleEditShippingAddressChange}
        cityList={cityList}
        handlePostAddress={handlePostAddress}
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
      />
    </>
  );
};

export default ShippingAddress;
