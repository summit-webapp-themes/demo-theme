import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import HorizantalFilterMaster from './HorizantalFilter/HorizantalFilterMaster';
import BreadCrumbs from '../BreadCrumbs';
import ProductGridView from './ProductListingView/ProductGridView';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';
import FloatingFilterBtn from './FloatingBtns/FloatingFilterBtn';
import { useEffect, useState } from 'react';
import FilterModal from './FilterView/FilterModal';
import FloatingSortbyBtn from './FloatingBtns/FloatingSortbyBtn';
import SortbyModal from './HorizantalFilter/SortbyModal';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';

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
  } = useProductListing();
  const wishlistData = useSelector(selectWishlist).items;
  const pageOffset = Number(query?.page) - 1;
  const handlePageClick = (event: any) => {
    handlePaginationBtn(event?.selected);
  };
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortbyModal, setShowSortbyModal] = useState(false);

  const handleCloseFilterModal = () => setShowFilterModal(false);
  const handleShowFilterModal = () => setShowFilterModal(true);

  const handleCloseSortbyModal = () => setShowSortbyModal(false);
  const handleShowSortbyModal = () => setShowSortbyModal(true);
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);
  return (
    <>
      <section className="listing-page position-realtive">
        <div className="container-fluid d-flex justify-content-between w-100 ps-lg-5 pe-lg-5 px-sm-4 ">
          <div className="w-50 list-toggle-rtl">
            <BreadCrumbs />
          </div>
          <HorizantalFilterMaster sortBy={sortBy} handleSortBy={handleSortBy} />
        </div>
        <div className="container-fluid">
          <ProductGridView
            productListingData={productListingData}
            handlePaginationBtn={handlePaginationBtn}
            productListTotalCount={productListTotalCount}
            pageOffset={pageOffset}
            handlePageClick={handlePageClick}
            isLoading={isLoading}
            wishlistData={wishlistData}
          />
        </div>
        <div className="sticky_filter_btn w-100  d-block d-sm-none">
          <div className="row">
            <div className="col-6">
              <FloatingFilterBtn handleShow={handleShowFilterModal} selectedMultiLangData={selectedMultiLangData} />
            </div>
            <div className="col-6">
              <FloatingSortbyBtn handleShow={handleShowSortbyModal} selectedMultiLangData={selectedMultiLangData} />
            </div>
          </div>
        </div>
      </section>
      <FilterModal show={showFilterModal} handleClose={handleCloseFilterModal} title={selectedMultiLangData?.filter} />
      <SortbyModal show={showSortbyModal} handleClose={handleCloseSortbyModal} sortBy={sortBy} handleSortBy={handleSortBy} />
    </>
  );
}

export default ProductListingMaster;
