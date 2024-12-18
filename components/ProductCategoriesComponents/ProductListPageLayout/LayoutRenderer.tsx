import dynamic from 'next/dynamic';
const DefaultLayout = dynamic(() => import('./DefaultLayout'));
const CollapsibleLayout = dynamic(() => import('./CollapsibleLayout'));
const TopFiltersLayout = dynamic(() => import('./TopFiltersLayout'));

const LayoutRenderer = ({
  ComponentsList,
  isLoading,
  productListingData,
  handlePaginationBtn,
  pageOffset,
  handlePageClick,
  productListTotalCount,
  wishlistData,
  isSuperAdmin,
  handleShowCatalogModal,
  handleDeleteCatalogItem,
  cartData,
}: any) => {
  const renderLayouts = () => {
    switch (ComponentsList?.layout) {
      case 'DefaultLayout':
        return <DefaultLayout />;
      case 'CollapsibleLayout':
        return <CollapsibleLayout />;
      case 'TopFiltersLayout':
        return <TopFiltersLayout />;

      default:
        break;
    }
  };
  return <>{renderLayouts()}</>;
};

export default LayoutRenderer;
