import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import HorizantalFilterMaster from './HorizantalFilter/HorizantalFilterMaster';
import BreadCrumbs from '../BreadCrumbs';
import ProductGridView from './ProductListingView/ProductGridView';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';
import { useState } from 'react';
import AddToCatalogModal from '../Catalog/AddToCatalogModal';
import { selectCatalogList } from '../../store/slices/catalog-slice/catalog-local-slice';

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
  const isSuperAdmin = localStorage.getItem('isLoggedIn');
  const pageOffset = Number(query?.page) - 1;
  const catalogListData = useSelector(selectCatalogList).catalogList;
  const [showCatalogModal, setShowCatalogModal] = useState(false);

  const handleCloseCatalogModal = () => setShowCatalogModal(false);
  const handleShowCatalogModal = () => {
    setShowCatalogModal(true);
  };
  const handleSaveCatalogName = (catalogName: any) => {};
  const handlePageClick = (event: any) => {
    handlePaginationBtn(event?.selected);
  };

  return (
    <>
      <section className="listing-page ">
        <div className="container-fluid d-flex justify-content-between w-100 ps-lg-5 pe-lg-5 ">
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
            isSuperAdmin={isSuperAdmin}
            handleCloseCatalogModal={handleCloseCatalogModal}
            handleShowCatalogModal={handleShowCatalogModal}
          />
        </div>
      </section>
      <AddToCatalogModal show={showCatalogModal} handleClose={handleCloseCatalogModal} catalogListData={catalogListData} />
      <div className="handle_display_mob_filter">{/* <MobileFilter /> */}</div>
    </>
  );
}

export default ProductListingMaster;
