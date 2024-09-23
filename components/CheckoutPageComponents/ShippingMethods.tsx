import React from 'react';
import { Form } from 'react-bootstrap';
import style from '../../styles/components/orderCheckout.module.scss';

const ShippingMethods = ({ handleUserAddressChange, showLocation }: any) => {
  return (
    <>
      <h5 className="mt-3 fw-bolder">Shipping Methods</h5>
      <div className="row">
        <div className="col-md-6">
          <Form className="d-flex ">
            <Form.Label className="fw-bolder">Select Delivery Type:</Form.Label>
            <div className={style.radio_tag}>
              <Form.Check
                type="radio"
                id={`door_delivery`}
                label={`Door Delivery`}
                name="delivery"
                value={1}
                onClick={(e) => handleUserAddressChange(e, 'door_delivery')}
              />
            </div>
            <div className={style.radio_tag}>
              <Form.Check
                type="radio"
                id={`godown_delivery`}
                label={`Godown Delivery`}
                name="delivery"
                value={0}
                onClick={(e) => handleUserAddressChange(e, 'godown_delivery')}
              />
            </div>
          </Form>
          {showLocation && (
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location (Preferred godown of Transporter)</Form.Label>
              <Form.Control type="text" placeholder="Preferred Location" name="location" onChange={(e) => handleUserAddressChange(e)} />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="remark">
            <Form.Label>Special remark (if any)</Form.Label>
            <Form.Control as="textarea" rows={1} name="remarks" onChange={(e) => handleUserAddressChange(e)} />
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default ShippingMethods;
