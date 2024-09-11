import checkOutStyles from '../../styles/components/checkout.module.scss';
const ShippingAddressCard = ({ selectedLanguageData }: any) => {
  return (
    <div className="mt-0 pt-0 shipping-margin-t">
      <h4 className="mb-0 shipping-margin-t-mob products-name">{selectedLanguageData?.shipping_addresses}</h4>

      <div className="d-flex align-items-center mb-0  mt-0 pt-0 cart-checkbox-mg mb-2">
        <button className="ms-0 ps-0 address_icon" onClick={() => {}}>
          <i className="fa fa-edit text-primary fs-2 ship_edit"></i>
        </button>

        <div className={`fs-4 mt-1 ms-0 ps-0 ${checkOutStyles.ship_heading}`} onClick={() => {}}>
          {selectedLanguageData?.create_new_shipping_address}
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressCard;
