import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

function ToggleListingGridView({ handleToggleProductsListingView }: any) {
  return (
    <div className="col-lg-4 col-4 d-flex justify-content-end">
      <div className="ms-3 mob-breadcrum-icon d-flex">
        <div>
          {/* <i
            className="fa fa-list fa-lg cursor_pointer"
            aria-hidden="true"
            onClick={() => handleToggleProductsListingView('list-view')}
          ></i> */}
          <BsGrid3X3GapFill onClick={() => handleToggleProductsListingView('list-view')} />
        </div>
        <div>
          <i
            className="fa fa-th fa-lg ms-3 cursor_pointer"
            aria-hidden="true"
            onClick={() => handleToggleProductsListingView('grid-view')}
          ></i>
          <FaThList onClick={() => handleToggleProductsListingView('grid-view')} />
        </div>
      </div>
    </div>
  );
}

export default ToggleListingGridView;
