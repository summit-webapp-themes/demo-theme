import React from 'react';
import styles from '../../../styles/components/twoLevelSidebarComponents.module.scss';

const FilterSummary = ({ filters }: { filters: any }) => {
  if (!filters) return null;

  const formatArray = (arr: any[]) => (Array.isArray(arr) ? arr.map((item) => item.label).join(', ') : '');

  const filterItems = [
    { label: 'Customer Code', value: filters?.customer?.label || '', subLabels: [] },
    { label: 'Source', value: '', subLabels: [
      { label: 'Source Type', value: filters?.source?.label || '' },
    ]},
    { label: 'Category', value: '', subLabels: [
      { label: 'Sales Category', value: formatArray(filters?.salesCategory) },
      { label: 'Design Category', value: formatArray(filters?.designCategory) },
    ]},
    { label: 'Price & Weight', value: '', subLabels: [
      {
        label: 'Price Range',
        value: filters?.priceRange ? `₹${filters.priceRange[0]} To ₹${filters.priceRange[1]}` : '',
      },
      {
        label: 'Diamond Cts',
        value: filters?.diamond ? `${filters.diamond[0]} To ${filters.diamond[1]}` : '',
      },
      {
        label: 'Gross Wt',
        value: filters?.grossWtRange ? `${filters.grossWtRange[0]}g To ${filters.grossWtRange[1]}g` : '',
      },
    ]},
    { label: 'Design Color', value: formatArray(filters?.designColor), subLabels: [] },
    { label: 'Analysis', value: '', subLabels: [
      { label: 'Target Show', value: filters?.targetTags?.label || '' },
      { label: 'Collection', value: filters?.collectionTags?.label || '' },
      { label: 'Inspiration', value: filters?.inspiration?.label || '' },
      { label: 'Vertical', value: filters?.vertical?.label || '' },
    ]},
    { label: 'Display Options', value: '', subLabels: [
      {
        label: 'Display Quality',
        value: filters?.displayQualityTags?.label || '',
      },
      { label: 'Sort By', value: filters?.sortByTags?.label || '' },
    ]},
  ];

  return (
    <div
      style={{
        fontSize: '14px',
        marginTop: '1rem',
        overflowY: 'scroll',
        flex: 1,
        maxHeight: 'calc(100vh - 300px)',
      }}
      className={styles.hide_scrollbar}
    >
      {/* Title (non-scrollable) */}
      {/* <div
        style={{
          fontWeight: 600,
          marginBottom: '0.5rem',
          borderBottom: '1px solid #e6d4c2',
          paddingBottom: '0.3rem',
        }}
      >
        {filters?.selectedScope?.label || ''}
      </div> */}

      {/* Scrollable content */}
      <div>
        {filterItems.map((item) =>
          item?.value || item?.subLabels?.length > 0 && item?.subLabels.some((item) => item?.value !== '') ? (
            <div
              key={item.label}
              className='row w-100'
            >
              <p className='col-6 fw-medium my-2'>{item?.label}</p> 
              <div className='col-6 ps-0'>
                {item?.value && <p className='px-2 rounded my-2' style={{ width: 'fit-content', fontWeight: 500, border: '1px solid #ECE2D4', color: '#95866F', backgroundColor: '#FFF9F1' }}>{item?.value}</p>}
              </div>
              {item?.subLabels?.length > 0 && item?.subLabels.filter((item) => item?.value !== '').map((subItem) => (
                <div
                  key={subItem?.label}
                  className='row w-100'
                >
                  <p className='col-6 fw-medium mb-2' style={{ color: '#838383'}}>{subItem?.label}</p> 
                  <div className='col-6'>
                    <p className='px-2 rounded mb-2' style={{ width: 'fit-content', fontWeight: 500, border: '1px solid #ECE2D4', color: '#95866F', backgroundColor: '#FFF9F1' }}>{subItem?.value}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default FilterSummary;
