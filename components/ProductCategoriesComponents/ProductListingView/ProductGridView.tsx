import WebFilter from '../FilterView/WebFilter';
import ProductlistingGridViewMaster from './ProductlistingGridViewMaster';

function ProductGridView({
  isLoading,
  productListingData,
  handlePaginationBtn,
  pageOffset,
  handlePageClick,
  productListTotalCount,
  wishlistData,
}: any) {
  return (
    <div className="row ps-lg-5 pe-lg-5">
      <div className="col-12 col-md-2 p-0">
        <WebFilter />
      </div>
      <div className="container-md col-md-10">
        <div className="row mt-2 product-listing-row">
          <ProductlistingGridViewMaster
            productListingData={productListingData}
            handlePaginationBtn={handlePaginationBtn}
            productListTotalCount={productListTotalCount}
            pageOffset={pageOffset}
            handlePageClick={handlePageClick}
            wishlistData={wishlistData}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGridView;
