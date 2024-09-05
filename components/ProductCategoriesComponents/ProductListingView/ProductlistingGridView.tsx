import React from 'react';
import ProductCard from '../../../cards/ProductCard';

function ProductlistingGridView({
  filtersData,
  loading,
  selectedFilters,
  handleApplyFilters,
  productListingData,
  selectedMultiLangData,
}: any) {
  return (
    <>
      {productListingData.map((data: any, i: any) => {
        return (
          <div key={innerHeight} className="col-sm-6 col-lg-3 col-xl-3 col-xxl-3 text-center mb-4">
            <ProductCard data={data} />
          </div>
        );
      })}
    </>
  );
}

export default ProductlistingGridView;
