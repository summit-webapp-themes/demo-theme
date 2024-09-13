import React from 'react';
import { Button, Form } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';

const CreateAddressModalFields = ({ stateList, cityList, handleCreateAddressChange, handlePostAddress, address_type }: any) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={(e) => handleCreateAddressChange(e, address_type)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address_1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control type="text" placeholder="Address 1" name="address_1" onChange={(e) => handleCreateAddressChange(e, address_type)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address_2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="text" placeholder="Address 1" name="address_2" onChange={(e) => handleCreateAddressChange(e, address_type)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="country" name="country" onChange={(e) => handleCreateAddressChange(e, address_type)}>
            <option>Select Country</option>
            <option>India</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Select aria-label="state" name="state" onChange={(e) => handleCreateAddressChange(e, address_type)}>
            <option>Select State</option>
            {stateList?.map((item: any, i: any) => <option>{item?.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Select aria-label="city" name="city" onChange={(e) => handleCreateAddressChange(e, address_type)}>
            {cityList.length > 0 && cityList?.map((item: any, i: any) => <option>{item?.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Check // prettier-ignore
          type="checkbox"
          id="set_as_default"
          name="set_as_default"
          label="Set as default address"
          onChange={(e) => handleCreateAddressChange(e, address_type)}
          //   checked={showAddress?.set_as_default}
        />
        <Form.Group className="mb-3" controlId="zip_code">
          <Form.Label>Zip/Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip/Postal Code"
            name="postal_code"
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip_code">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Email Id" name="email" onChange={(e) => handleCreateAddressChange(e, address_type)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip_code">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Mobile No."
            name="contact"
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          />
        </Form.Group>
      </Form>
      <Button className={style.submitAddress} onClick={() => handlePostAddress(address_type, 'Create')}>
        Create Address
      </Button>
    </>
  );
};

export default CreateAddressModalFields;
