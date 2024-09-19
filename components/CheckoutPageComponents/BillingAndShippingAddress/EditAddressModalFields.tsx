import React from 'react';
import { Button, Form } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';

const EditAddressModalFields = ({
  showAddress,
  stateList,
  emptyAddressFields,
  handleEditAddressChange,
  cityList,
  handlePostAddress,
}: any) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>
            Name<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            isInvalid={emptyAddressFields.includes('name')}
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={showAddress?.name}
            onChange={handleEditAddressChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address_1">
          <Form.Label>
            Address 1<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Address 1"
            name="address_1"
            defaultValue={showAddress?.address_1}
            onChange={handleEditAddressChange}
            isInvalid={emptyAddressFields.includes('address_1')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address_2">
          <Form.Label>
            Address 2<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Address 2"
            name="address_2"
            defaultValue={showAddress?.address_2}
            onChange={handleEditAddressChange}
            isInvalid={emptyAddressFields.includes('address_2')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>
            Country<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select
            aria-label="country"
            name="country"
            value={showAddress?.country}
            onChange={handleEditAddressChange}
            isInvalid={emptyAddressFields.includes('country')}
          >
            <option>{showAddress?.country}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>
            State<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select aria-label="state" name="state" defaultValue={showAddress?.state} onChange={handleEditAddressChange}>
            <option>Select State</option>
            {stateList?.map((item: any, i: any) => <option>{item?.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>
            City<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select aria-label="city" name="city" onChange={handleEditAddressChange} isInvalid={emptyAddressFields.includes('city')}>
            <option>{cityList?.length > 0 ? cityList[0].name : showAddress?.city}</option>
            {cityList.length > 0 &&
              cityList?.filter((val: any) => val.name !== cityList[0].name)?.map((item: any, i: any) => <option>{item?.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Check // prettier-ignore
          type="checkbox"
          id="set_as_default"
          name="set_as_default"
          label="Set as default address"
          onChange={handleEditAddressChange}
          checked={showAddress?.set_as_default}
        />
        <Form.Group className="mb-3" controlId="zip_code">
          <Form.Label>
            Zip/Postal Code<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip/Postal Code"
            name="postal_code"
            defaultValue={showAddress?.postal_code}
            onChange={handleEditAddressChange}
            isInvalid={emptyAddressFields.includes('postal_code')}
          />
        </Form.Group>
      </Form>
      <Button className={style.submitAddress} onClick={() => handlePostAddress(showAddress?.address_type, 'edit')}>
        Save Address
      </Button>
    </>
  );
};

export default EditAddressModalFields;
