import { Accordion, Button } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';

const ShippingAddress = ({
  renderAllShippingAddresses,
  handleRenderDefaultShippingAddress,
  handleShowAccordion,
  showAccordion,
  shippingAddress,
}: any) => {
  return (
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
  );
};

export default ShippingAddress;
