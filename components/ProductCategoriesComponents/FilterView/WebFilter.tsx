import React from 'react';
import useProductListingFilterHook from '../../../hooks/ProductListPageHooks/useProductListFilterHook';
import { Accordion } from 'react-bootstrap';
import FilterLoadingLayout from './FilterLoadingLayout';
import FilterColour from './GenericFilters/FilterColour';

function WebFilter() {
  const { filtersData, isLoading, errorMessage, handleFilterCheckFun, selectedFilters } = useProductListingFilterHook();

  const renderFilters: any = () => {
    if (isLoading) {
      return (
        <div className="row justify-content-center">
          {[...Array(1)].map((_, index: number) => (
            <div key={index}>
              <div className="col-lg-12 mx-3">
                <FilterLoadingLayout />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (filtersData?.filters?.length > 0) {
      return filtersData.filters.map((filter: any, index: any) => {
        // Render FilterColour component for "color" section inside an Accordion
        if (filter.section === 'Color') {
          return (
            <Accordion key={index} defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{filter?.section}</Accordion.Header>
                <Accordion.Body>
                  <FilterColour key={index} filter={filter} handleFilterCheckFun={handleFilterCheckFun} selectedFilters={selectedFilters} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        }
        // Render default accordion for other filters
        return (
          <Accordion key={index} defaultActiveKey="0">
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
