import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import useCatalogFunctions from '../../hooks/CatalogHooks/useCatalogFunctions';
import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { selectCatalogList } from '../../store/slices/catalog-slice/catalog-local-slice';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';
const FloatingFilterBtn = dynamic(() => import('./FloatingBtns/FloatingFilterBtn'));
const FloatingSortbyBtn = dynamic(() => import('./FloatingBtns/FloatingSortbyBtn'));
const FilterModal = dynamic(() => import('./FilterComponents/FilterModal'));
const SortbyModal = dynamic(() => import('./HorizantalFilter/SortbyModal'));
const AddToCatalogModal = dynamic(() => import('../Catalog/AddToCatalogModal'));
import LayoutRenderer from './ProductListPageLayout/LayoutRenderer';
import flattenComponentsList from '../../utils/handle-components-list';

function ProductListingMaster({ componentsList }: any) {
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
  const cartData = useSelector(selectCart).items;
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

  const layoutProps = {
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
    wishlistData,
    cartData,
    isSuperAdmin,
    pageOffset,
    handlePageClick,
  };
  const componentsListFlattenArray = flattenComponentsList(componentsList);
  const getLayoutComponentsList =
    componentsList[0]?.layout && componentsList[0]?.layout_component_list?.length > 0
      ? componentsList[0]?.layout_component_list?.flat()
      : [];

  function renderProductListPageHeaderComponents() {
    if (componentsListFlattenArray?.length === 0) return <p>No header components to display.</p>;

    if (componentsListFlattenArray?.length > 0) {
      return componentsListFlattenArray?.map((componentName: any) => {
        const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
        return (
          <section className="listing-page position-realtive">
            <Component key={componentName?.component_name} />
          </section>
        );
      });
    }
  }

  function renderProductListPageLayoutComponents() {
    if (getLayoutComponentsList?.length === 0) return <p>No layout components to display.</p>;

    if (getLayoutComponentsList?.length > 0) {
      return (
        <div className="ps-lg-5 pe-lg-4 px-md-3 px-3">
          <LayoutRenderer
            layoutName={componentsList[0]?.layout}
            layoutComponents={componentsList[0]?.layout_component_list}
            productsGridProps={layoutProps}
          />
        </div>
      );
    }
  }
  if (componentsList?.length === 0) {
    return <p> No components to display product list page.</p>;
  }
  return (
    <>
      {renderProductListPageHeaderComponents()}
      {renderProductListPageLayoutComponents()}
      <div className="sticky_filter_btn w-100  d-block d-sm-none">
        <div className="row">
          <div className="col-6 p-0 border">
            <FloatingFilterBtn handleShow={handleShowFilterModal} selectedMultiLangData={selectedMultiLangData} />
          </div>
          <div className="col-6 p-0 border">
            <FloatingSortbyBtn handleShow={handleShowSortbyModal} selectedMultiLangData={selectedMultiLangData} />
          </div>
        </div>
      </div>
      <FilterModal show={showFilterModal} handleClose={handleCloseFilterModal} title={selectedMultiLangData?.filter} />
      <SortbyModal show={showSortbyModal} handleClose={handleCloseSortbyModal} sortBy={sortBy} handleSortBy={handleSortBy} />
      <AddToCatalogModal
        show={showCatalogModal}
        handleClose={handleCloseCatalogModal}
        catalogListData={catalogListData}
        handleSaveCatalogName={handleSaveCatalogName}
      />
    </>
  );
}

export default ProductListingMaster;
