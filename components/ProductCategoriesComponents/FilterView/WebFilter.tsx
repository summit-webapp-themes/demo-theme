import React from 'react';
import useProductListingFilterHook from '../../../hooks/ProductListPageHooks/useProductListFilterHook';
import { Accordion } from 'react-bootstrap';
import FilterLoadingLayout from './FilterLoadingLayout';

function WebFilter() {
  const { filtersData, isLoading, errorMessage, debouncedHandleFilterCheckFun, selectedFilters } = useProductListingFilterHook();

  const renderFilters: any = () => {
    if (isLoading) {
      return (
        <div className="row justify-content-center">
          {[...Array(3)].map(() => (
            <>
              <div className="col-lg-12 mx-3">
                <FilterLoadingLayout />
              </div>
            </>
          ))}
        </div>
      );
    }
    if (filtersData?.filters?.length > 0) {
      return filtersData?.filters?.map((filter: any, index: any) => {
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
                      onChange={debouncedHandleFilterCheckFun}
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
      });
    }
  };
  return (
    <div className="filter_section">
      <div className="filter_block">
        <div className="accordion accordion_custom" id="myAccordion">
          {renderFilters()}
        </div>
      </div>
    </div>
  );
}

export default WebFilter;
