import dynamic from 'next/dynamic';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));
const CollapsibleLayout = dynamic(() => import('./CollapsibleLayout'));
const TopFiltersLayout = dynamic(() => import('./TopFiltersLayout'));
const FixedFiltersLayout = dynamic(() => import('./FixedFiltersLayout'));
const FallbackLayoutComponent = dynamic(() => import('./FallbackLayouts/FallbackLayout'));

const LayoutRenderer = (props: any) => {
  const renderLayouts = () => {
    switch (props.layoutName) {
      case 'Default Layout':
        return (
          <DefaultLayout
            filterComponent={props.filterComponentInLayout}
            CardsComponent={props.productCardsInLayout}
            productsGridData={props.productsGridProps}
          />
        );
      case 'Collapsible Layout':
        return <CollapsibleLayout {...props.productsGridProps} />;
      case 'Top Filters Layout':
        return <TopFiltersLayout />;
      case 'Fixed Filters Layout':
        return <FixedFiltersLayout />;
      case 'Fallback Layout':
        return <FallbackLayoutComponent />;
      default:
        return null;
    }
  };

  return <>{renderLayouts()}</>;
};

export default LayoutRenderer;
