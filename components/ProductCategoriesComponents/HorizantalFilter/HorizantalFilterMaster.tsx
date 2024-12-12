import React from 'react';
import { THEME_CONSTANTS } from '../../../services/config/theme-config';
import ToggleListingGridView from './ToggleListingGridView';
import SortByFilter from './SortByFilter';
import BreadCrumbs from '../../BreadCrumbs';
import CustomDropdown from './CustomDropdown';

function HorizantalFilterMaster({ handleToggleProductsListingView, sortBy, handleSortBy }: any) {
  return (
    <div className="row list-toggle-rtl">
      {THEME_CONSTANTS.ENABLE_TOGGLE_PRODUCT_LISTING_VIEW && (
        <>
          {/* <ToggleListingGridView handleToggleProductsListingView={handleToggleProductsListingView} /> */}
          <CustomDropdown sortBy={sortBy} handleSortBy={handleSortBy} />
          {/* <SortByFilter sortBy={sortBy} handleSortBy={handleSortBy} /> */}
        </>
      )}
    </div>
  );
}

export default HorizantalFilterMaster;
