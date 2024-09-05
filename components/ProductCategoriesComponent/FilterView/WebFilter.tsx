import React from 'react';
import useProductListingFilterHook from '../../../hooks/ProductListPageHooks/useProductListFilterHook';
import { Accordion } from 'react-bootstrap';

function WebFilter() {
  const { filtersData, isLoading, errorMessage, handleFilterCheckFun, selectedFilters } = useProductListingFilterHook();
  console.log(filtersData, 'filtersData');
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
          ) : filtersData?.filters?.length > 0 ? (
            filtersData?.filters?.map((filter: any, index: any) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{filter?.section}</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
