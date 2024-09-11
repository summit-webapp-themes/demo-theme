import ShippingAddressCard from './ShippingAddressCard';

const WebCheckout = ({ selectedLanguageData }: any) => {
  return (
    <div className="web-checkout-wrapper mt-0">
      <div className="row flex-lg-row flex-column-reverse">
        <div className="col-lg-8">
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-lg-6">
              <ShippingAddressCard selectedLanguageData={selectedLanguageData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCheckout;
