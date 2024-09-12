import { Accordion, Button } from 'react-bootstrap';
import style from '../../../styles/components/orderCheckout.module.scss';

const BillingAddress = ({
  renderAllBillingAddresses,
  handleRenderDefaultBillingAddress,
  handleShowAccordion,
  showBillingAccordion,
  billingAddress,
}: any) => {
  return (
    <div className="col-lg-12 p-2 border mt-3">
      <div className="row">
        <div className="col-md-2">
          <h6 className="mb-0 fw-bolder">Billing Address</h6>
        </div>
        <div className="col-md-8">
          <div className="w-50">{handleRenderDefaultBillingAddress(billingAddress)}</div>
        </div>
        <div className="col-md-2">
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
};

export default BillingAddress;
