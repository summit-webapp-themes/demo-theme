import React from 'react';
import { Form } from 'react-bootstrap';

const SelectAddress = (addressId: any, id: any, type: string, handleSelectAddress: any, addressVal: any) => {
  return (
    <>
      <Form.Check.Input
        type="radio"
        checked={addressId === id && type === 'shipping' ? true : false}
        onClick={() => handleSelectAddress(id, addressVal)}
      />
    </>
  );
};

export default SelectAddress;
