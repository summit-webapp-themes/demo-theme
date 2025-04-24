import React, { useState } from 'react';
import { Form, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';

const MoveToVoucher = ({ handleMoveToQuotation }: any) => {
  const [selectedOption, setSelectedOption] = useState('Quotation');

  const handleSelect = (eventKey: any) => {
    setSelectedOption(eventKey);
  };

  return (
    <Row className="align-items-center">
      <Col xs="auto">
        <Form.Label className="mb-0">Move To</Form.Label>
      </Col>
      <Col xs="auto">
        <DropdownButton
          id="move-to-dropdown"
          title={selectedOption}
          onSelect={handleSelect}
          variant="outline-secondary"
          className="border rounded"
          style={{ borderColor: '#b59d7f', color: '#6d5844' }}
        >
          <Dropdown.Item eventKey="Quotation">Quotation</Dropdown.Item>
          <Dropdown.Item eventKey="Cart">Cart</Dropdown.Item>
        </DropdownButton>
      </Col>
      <Col xs="auto">
        <Button
          variant="outline-secondary"
          style={{
            backgroundColor: '#b59d7f',
            borderColor: '#b59d7f',
            color: '#fff',
          }}
          onClick={() => handleMoveToQuotation(selectedOption)}
        >
          Go
        </Button>
      </Col>
    </Row>
  );
};

export default MoveToVoucher;
