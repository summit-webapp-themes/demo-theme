import { Accordion, Form } from 'react-bootstrap';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import FilterLoadingSkeleton from './FilterLoadingSkeleton';
import useFilterHook from '../../../../../hooks/addon-hooks/useFilterHook';
import styles from '../../../../../styles/addon-styles/sidebarFilter.module.scss';
export default function FallbackFilters() {
  const { filtersData, isLoading, errorMessage, handleFilterCheckFun, selectedFilters, clearFilters } = useFilterHook();
  console.log('selectedFilters', selectedFilters);
  const renderFilters: any = () => {
    if (isLoading) {
      return (
          <FilterLoadingSkeleton />
      );
    }
    if (filtersData?.length > 0) {
      return filtersData.map((filter: any, index: number) => (
        <Accordion defaultActiveKey={['0', '1']} className={styles.customAccordion}>
          <Accordion.Item
            key={`filter-${filter.section}-${index}`}
            // className={styles.filterSection}
            style={{
              borderBottom: index < filtersData.length - 1 ? '1px solid #E1E3E3' : '0px',
            }}
            eventKey={index.toString()}
          >
            <Accordion.Button>
              {filter.section}
            </Accordion.Button>
            {filter.values.map((filterValue: any, innerIndex: number) => {
              const isRangeSection = filter.section === 'Price' || filter.section === 'Diamond Weight' || filter.section === 'Gross Weight';
              const label = isRangeSection ? `${filterValue.PNum} - ${filterValue.PNum1}` : filterValue.PDesc;
              // const value = isRangeSection ? [filterValue.PNum, filterValue.PNum1] : filterValue.PMCd;
              const value = isRangeSection ? `${filterValue.PNum}-${filterValue.PNum1}` : filterValue.PMCd;

              return (
                <Accordion.Body key={`filter-${filter.section}-${innerIndex}`} className="d-flex flex-column gap-1">
                  <Form.Check
                    type="checkbox"
                    name={filter.section}
                    className={styles.filterCheckBox}
                    value={value}
                    checked={selectedFilters.some(
                      (selectedFilter: any) => selectedFilter.name === filter.section && selectedFilter.value.includes(value)
                    )}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterCheckFun(e)}
                    label={label}
                  />
                </Accordion.Body>
              );
            })}
          </Accordion.Item>
        </Accordion>
      ));
    }
    if (errorMessage) {
      return (
        <div className="text-center text-danger mt-3" style={{ minHeight: '500px' }}>
          <p>{errorMessage}</p>
        </div>
      );
    }
  };
  return (
    <div className="p-0" >
      {!isLoading && (
        <div className=" d-flex justify-content-between align-items-center flex-wrap gap-1" style={{ borderTop: '1px solid #E1E3E3', borderBottom: '1px solid #E1E3E3', padding: '12px 14px' }}>
          <div className=" d-flex justify-content-center align-items-center gap-2">
            <HiOutlineAdjustmentsHorizontal size={20} color="#222222" style={{ rotate: '180deg' }} />
            <p className="m-0 fw-medium" style={{ fontSize: '16px', lineHeight: '16px' }}>
              Filters
            </p>
          </div>
          {selectedFilters?.length > 0 && (
            <button className="btn btn-link border-0 fs-14 text-decoration-none m-0 p-0" style={{ color: '#B3B3B3' }} onClick={clearFilters}>
              Clear All
            </button>
          )}
        </div>
      )}
      {renderFilters()}
    </div>
  );
}
