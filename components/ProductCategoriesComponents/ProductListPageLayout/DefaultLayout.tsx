import filters from '../ProductListLayoutComponents/BasicFilters/MasterComponent';
import card from '../ProductListLayoutComponents/ProductGridWithImageVariantCards/MasterComponent';
const DefaultLayout = ({ filterComponent, CardsComponent, productsGridData }: any) => {
  const renderFilter = () => {
    switch (filterComponent) {
      case 'Standard Filters':
        const Component = require(`../ProductListLayoutComponents/BasicFilters/MasterComponent`).default;
        return <Component key={'Standard Filters'} />;
      default:
        return;
    }
  };
  const renderProducts = () => {
    switch (CardsComponent) {
      case 'Card with Variant Images':
        const Component = require(`../ProductListLayoutComponents/ProductGridWithImageVariantCards/MasterComponent`).default;
        return <Component key={'CardsWithImgs'} {...productsGridData} />;
      default:
        return;
    }
  };
  return (
    <div className="row">
      <div className="col-12 col-md-2 web-filter d-none d-sm-block ">{renderFilter()}</div>
      <div className="container-md col-md-10">
        <div className=" mt-2 product-listing-row">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
