import { Form } from 'react-bootstrap';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import styles from '../../../../styles/components/sidebarFilter.module.scss'
import useProductListingFilterHook from '../../../../hooks/ProductListPageHooks/useProductListFilterHook';
import FilterLoadingSkeleton from './FilterLoadingSkeleton';

export default function MasterComponent() {
  const { filtersData, isLoading, errorMessage, handleFilterCheckFun, selectedFilters, clearFilters } = useProductListingFilterHook();

  const renderFilters: any = () => {
    if (isLoading) {
      return (
        <div className="row justify-content-center">
          <FilterLoadingSkeleton />
        </div>
      );
    }

    if(filtersData?.filters?.length > 0) {
      return filtersData?.filters?.map((filter: any, index: number) => {
        return (
          <div key={`filter-${filter.section}-${index}`} className={styles.filterSection} style={{ borderBottom: index < filtersData?.filters?.length - 1 ? '1px solid #F4EAE8': '0px'}}>
            <h5 className='h6 fw-semibold m-0' style={{ color: '#3D1D15'}}>{filter.section}</h5>
            {filter.values.map((filterValue: string, innerIndex: number) => (
              <div key={`filter-${filter.section}-${innerIndex}`} className='d-flex flex-column gap-2'>
                <Form.Check
                  type="checkbox"
                  name={filter.section}
                  className={styles.filterCheckBox}
                  value={filterValue}
                  checked={selectedFilters.some(
                    (selectedFilter: any) => selectedFilter.name === filter.section && selectedFilter.value.includes(filterValue)
                  )}
                  onChange={handleFilterCheckFun}
                  label={filterValue}
                />
              </div>
            ))}
            <span className={`btn btn-link mt-1 ${styles.viewAllBtn}`}>View All</span>
          </div>
        )
      });
    }


  };
  return (
    <div className="p-0 border mt-3" style={{ borderColor: '#F4EAE8'}}>
      {!isLoading && (
        <div className=' d-flex justify-content-between align-items-center gap-1 p-3' style={{ borderBottom: '1px solid #F4EAE8'}}>
          <div className=' d-flex justify-content-center align-items-center gap-2'>
            <HiOutlineAdjustmentsHorizontal size={24} color='#A3A3A3' style={{ rotate: '180deg'}} />
            <p className='m-0 fw-medium' style={{ fontSize: '20px', lineHeight: '20px'}}>Filters</p>
          </div>
          {selectedFilters?.length > 0 && (
            <button className='btn btn-link border-0 h6 text-decoration-none m-0 p-0' style={{ color: '#B3B3B3'}} onClick={clearFilters}>
              Clear All
            </button>
          )}
        </div>
      )}
      {renderFilters()}
    </div>
  );
}