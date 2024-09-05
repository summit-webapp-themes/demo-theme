import React from 'react';
import useProductListingFilterHook from '../../../hooks/ProductListPageHooks/useProductListFilterHook';

function WebFilter() {
  const { filtersData, isLoading, errorMessage, handleFilterCheckFun, selectedFilters } = useProductListingFilterHook();
  return (
    <div className="filter_section">
      <div className="filter_block">
        <div className="accordion accordion_custom" id="myAccordion">
          {isLoading ? (
            <div className="row justify-content-center">
              {[...Array(2)].map(() => (
                <>
                  <div className="col-lg-12 mx-3">
                    {/* <FiltersLoadingLayout /> */}
                    Loading...
                  </div>
                </>
              ))}
            </div>
          ) : filtersData?.length > 0 ? (
            filtersData?.map((filter: any, index: any) => {
              return (
                <div className="accordion-item accordion_item_custom" key={index}>
                  <h2 className="accordion-header bold filter_heading pe-3" id={'heading' + index}>
                    <button
                      type="button"
                      className="text-uppercase accordion-button bold accordion_btn_custom"
                      data-bs-toggle="collapse"
                      data-bs-target={'#collapse' + index}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={'collapse' + index}
                    >
                      {filter?.section}
                    </button>
                  </h2>

                  <div
                    id={'collapse' + index}
                    className={
                      index === 0
                        ? 'accordion-collapse collapse custom_collapse_css show '
                        : 'accordion-collapse custom_collapse_css collapsed'
                    }
                    aria-labelledby={'heading' + index}
                  >
                    <div className="card-body p-0 checkbox-wrapper product-font-family">
                      {filter.values.map((filterValue: any, innerIndex: any) => (
                        <div className="form_check_filter checkbox-line-height d-flex align-items-center" key={innerIndex}>
                          <input
                            type="checkbox"
                            name={filter.section}
                            value={filterValue}
                            checked={selectedFilters.some(
                              (selectedFilter: any) => selectedFilter.name === filter.section && selectedFilter.value.includes(filterValue)
                            )}
                            onChange={handleFilterCheckFun}
                          />
                          <label className="form-check-label filter-label accordion-checkbox checkbox-margin" htmlFor="flexCheckDefault">
                            {filterValue}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default WebFilter;
