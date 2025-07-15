import dynamic from 'next/dynamic';
import { FC } from 'react';

interface LayoutProps {
  filterComponentInLayout: string;
  productCardsInLayout: string;
  productsGridProps?: any;
  layoutName: string;
}

const DefaultLayout = dynamic(() => import('./DefaultLayout'), { ssr: false });
const CollapsibleLayout = dynamic(() => import('./CollapsibleLayout'), { ssr: false });
const TopFiltersLayout = dynamic(() => import('./TopFiltersLayout'), { ssr: false });
const FixedFiltersLayout = dynamic(() => import('./FixedFiltersLayout'), { ssr: false });
const FallbackLayoutComponent = dynamic(() => import('./FallbackLayouts/FallbackLayout'), { ssr: false });

const LayoutRenderer: FC<LayoutProps> = (props) => {
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
