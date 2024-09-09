import React from 'react';
import ProductCard from '../../../cards/ProductCard';
import ReactPaginate from 'react-paginate';
import paginationStyle from '../../../styles/components/pagination.module.scss';
import useAddToCartHook from '../../../hooks/CartPageHook/useAddToCart';
import NoDataFound from '../../NoRecordFound';
import ProductCardSkeleton from '../../../cards/ProductCardSkeleton';

function ProductlistingGridViewMaster({
  isLoading,
  productListingData,
  productListTotalCount,
  pageOffset,
  handlePageClick,
  wishlistData,
}: any) {
  const isNextButtonDisabled: boolean = parseInt((productListTotalCount / 12).toString(), 10) === pageOffset;
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const handleDataRendering = () => {
    if (isLoading) {
      return (
        <div className="row">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="col-md-3 col-lg-3 col-sm-6 mb-3 p-1">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      );
    }

    if (productListingData?.length > 0) {
      return (
        <>
          {productListingData?.map((data: any, i: any) => {
            return (
              <div key={innerHeight} className="col-sm-6 col-lg-3 col-xl-3 col-xxl-3 text-center mb-4">
                <ProductCard data={data} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
              </div>
            );
          })}
          <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={productListTotalCount / 12}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={`${paginationStyle.paginationBttns}`}
            previousLinkClassName={pageOffset === 0 ? paginationStyle.paginationDisabled : paginationStyle.previousBttn}
            disabledClassName={paginationStyle.paginationDisabled}
            nextLinkClassName={isNextButtonDisabled ? paginationStyle.paginationDisabled : `${paginationStyle.nextBttn}`}
            activeClassName={`${paginationStyle.paginationActive}`}
            forcePage={pageOffset}
          />
        </>
      );
    }

    if (productListingData?.length === 0) {
      return <NoDataFound title="No Record Found !!" message="We couldn't find what you searched for. Try searching again." />;
    }
  };
  return <>{handleDataRendering()}</>;
}

export default ProductlistingGridViewMaster;
