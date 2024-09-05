import React from 'react';
import WebFilter from './FilterView/WebFilter';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { THEME_CONSTANTS } from '../../services/config/theme-config';
import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import MobileFilter from './FilterView/MobileFilter';
import { useRouter } from 'next/router';
import HorizantalFilterMaster from './HorizantalFilter/HorizantalFilterMaster';
import useMultilangHook from '../../hooks/LanguageHook/Multilanguages-hook';
import LookingSpecificProduct from './HorizantalFilter/LookingSpecificProduct';
import BreadCrumbs from '../BreadCrumbs';
import ProductlistingGridView from './ProductListingView/ProductlistingGridView';

function ProductListingMaster() {
  const {
    productListingData,
    productListTotalCount,
    toggleProductListView,
    handleToggleProductsListingView,
    handleLoadMore,
    handlePaginationBtn,
    query,
    isLoading,
    errorMessage,
    sortBy,
    handleSortBy,
    handleFilterSearchFun,
    handleFilterSearchBtn,
    searchFilterValue,
  } = useProductListing();
  const router = useRouter();
  const pathname = router.asPath;
  const { multiLanguagesData } = useMultilangHook();
  console.log(multiLanguagesData, 'multiLanguagesData');
  return (
    <>
      <section className="listing-page ">
        <div className="container d-flex justify-content-between w-100  ">
          <div className="w-50 list-toggle-rtl">
            <BreadCrumbs />
          </div>

          <HorizantalFilterMaster />
        </div>
        <div className="container-fluid">
          <div className="row ps-lg-5 pe-lg-4">
            <div className="col-12 col-md-3">
              <LookingSpecificProduct productListingData={productListingData} multiLanguagesData={multiLanguagesData} />
              <WebFilter />
            </div>
            <div className="container-md  col-md-9 ">
              <div className="row mt-2 product-listing-row">{<ProductlistingGridView productListingData={productListingData} />}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="handle_display_mob_filter">{/* <MobileFilter /> */}</div>
    </>
  );
}

export default ProductListingMaster;
