import React from 'react';

function ToggleListingGridView({ handleToggleProductsListingView }: any) {
  return (
    <div className="col-lg-4 col-4 d-flex justify-content-end">
      <div className="ms-3 mob-breadcrum-icon d-flex">
        <div>
          <i
            className="fa fa-list fa-lg cursor_pointer"
            aria-hidden="true"
            onClick={() => handleToggleProductsListingView('list-view')}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-th fa-lg ms-3 cursor_pointer"
            aria-hidden="true"
            onClick={() => handleToggleProductsListingView('grid-view')}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ToggleListingGridView;
