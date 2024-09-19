import { useState } from 'react';
import { useSelector } from 'react-redux';
import useCatalogFunctions from '../../hooks/CatalogHooks/useCatalogFunctions';
import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import { selectCatalogList } from '../../store/slices/catalog-slice/catalog-local-slice';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';
import BreadCrumbs from '../BreadCrumbs';
import AddToCatalogModal from '../Catalog/AddToCatalogModal';
import HorizantalFilterMaster from './HorizantalFilter/HorizantalFilterMaster';
import ProductGridView from './ProductListingView/ProductGridView';

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
  const isSuperAdmin = localStorage.getItem('isSuperAdmin');
  const pageOffset = Number(query?.page) - 1;
  const catalogListData = useSelector(selectCatalogList).catalogList;
  const { handleAddProductToCatalog, handleDeleteCatalogItem }: any = useCatalogFunctions();
  const [catalogItem, setCatalogItem] = useState('');
  const [showCatalogModal, setShowCatalogModal] = useState(false);
  const handleCloseCatalogModal = () => setShowCatalogModal(false);
  const handleShowCatalogModal = (item: any) => {
    setCatalogItem(item);
    setShowCatalogModal(true);
  };
  const handleSaveCatalogName = (catalogName: any) => {
    if (catalogItem !== '' && catalogName !== '') {
      handleAddProductToCatalog(catalogName, catalogItem);
      setShowCatalogModal(false);
    }
  };
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
            handleShowCatalogModal={handleShowCatalogModal}
            handleDeleteCatalogItem={handleDeleteCatalogItem}
          />
        </div>
      </section>
      <AddToCatalogModal
        show={showCatalogModal}
        handleClose={handleCloseCatalogModal}
        catalogListData={catalogListData}
        handleSaveCatalogName={handleSaveCatalogName}
      />
      <div className="handle_display_mob_filter">{/* <MobileFilter /> */}</div>
    </>
  );
}

export default ProductListingMaster;
