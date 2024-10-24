import React from 'react';
import { Button, Form } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';

const CreateAddressModalFields = ({
  stateList,
  cityList,
  handleCreateAddressChange,
  emptyAddressFields,
  handlePostAddress,
  address_type,
}: any) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>
            Name<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            isInvalid={emptyAddressFields?.includes('name')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
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
            isInvalid={emptyAddressFields?.includes('address_1')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address_2">
          <Form.Label>
            Address 2<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Address 1"
            name="address_2"
            isInvalid={emptyAddressFields?.includes('address_2')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          />
        </Form.Group>
        {!localStorage.getItem('party_name') && (
          <>
            <Form.Group className="mb-3" controlId="address_2">
              <Form.Label>
                GST Number<span className="mandatoryField">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="GST Number"
                name="gst_number"
                isInvalid={emptyAddressFields?.includes('gst_number')}
                onChange={(e) => handleCreateAddressChange(e, address_type)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address_2">
              <Form.Label>
                Email<span className="mandatoryField">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                isInvalid={emptyAddressFields?.includes('email')}
                onChange={(e) => handleCreateAddressChange(e, address_type)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address_2">
              <Form.Label>
                Contact No.<span className="mandatoryField">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact No."
                name="contact"
                isInvalid={emptyAddressFields?.includes('contact')}
                onChange={(e) => handleCreateAddressChange(e, address_type)}
              />
            </Form.Group>
          </>
        )}
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>
            Country<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select
            aria-label="country"
            name="country"
            isInvalid={emptyAddressFields?.includes('country')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          >
            <option>Select Country</option>
            <option>India</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>
            State<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select
            aria-label="state"
            name="state"
            isInvalid={emptyAddressFields.includes('state')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          >
            <option>Select State</option>
            {stateList?.map((item: any, i: any) => <option>{item?.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>
            City<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Select
            aria-label="city"
            name="city"
            isInvalid={emptyAddressFields.includes('city')}
            onChange={(e) => handleCreateAddressChange(e, address_type)}
          >
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
          <Form.Label>
            Zip/Postal Code<span className="mandatoryField">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            isInvalid={emptyAddressFields.includes('postal_code')}
            placeholder="Zip/Postal Code"
            name="postal_code"
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
