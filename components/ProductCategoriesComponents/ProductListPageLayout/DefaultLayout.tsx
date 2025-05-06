const DefaultLayout = ({ filterComponent, CardsComponent, productsGridData }: any) => {
  const renderFilter = () => {
    let Component: React.ComponentType<any>;
    switch (filterComponent) {
      case 'Standard Filters':
        Component = require(`../ProductListLayoutComponents/FiltersComponent/BasicFilters/MasterComponent`).default;
        return <Component key={'Standard Filters'} />;
      case 'Fallback Filters':
        Component = require('../ProductListLayoutComponents/FiltersComponent/FallbackFilters/FallbackFilters').default;
        return <Component key={'Fallback Filters'} />;
      default:
        return;
    }
  };
  const renderProducts = () => {
    switch (CardsComponent) {
      case 'Card with Color Variants':
        const ColorComponent = require(`../ProductListLayoutComponents/ProductGridWithImageVariantCards/MasterComponent`).default;
        return <ColorComponent key={'CardsWithColors'} {...productsGridData} />;
      case 'Card with Variant Images':
        const ImageComponent = require(`../ProductListLayoutComponents/ProductGridWithImageVariantCards/MasterComponent`).default;
        return <ImageComponent key={'CardsWithImgs'} {...productsGridData} />;
      default:
        return;
    }
  };
  return (
    <div className="ps-lg-5 pe-lg-4 px-md-3 px-3">
      <div className="row">
        <div className="col-12 col-md-2 web-filter d-none d-sm-block ">{renderFilter()}</div>
        <div className="container-md col-md-10">
          <div className=" mt-2 product-listing-row">{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
