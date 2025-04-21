import React from 'react';

const FilterSummary = ({ filters }: { filters: any }) => {
  console.log('filters in summary', filters);
  if (!filters) return null;

  const formatArray = (arr: any[]) => (Array.isArray(arr) ? arr.map((item) => item.label).join(', ') : '');

  const filterItems = [
    { label: 'Customer Code', value: filters?.customer?.label || '' },
    { label: 'Source Type', value: filters?.source?.label || '' },
    { label: 'Sales Category', value: formatArray(filters?.salesCategory) },
    { label: 'Design Category', value: formatArray(filters?.designCategory) },
    {
      label: 'Price Range',
      value: filters?.priceRange ? `${filters.priceRange[0]} - ${filters.priceRange[1]}` : '',
    },
    {
      label: 'Diamond Cts',
      value: filters?.diamond ? `${filters.diamond[0]} - ${filters.diamond[1]}` : '',
    },
    {
      label: 'Gross Wt',
      value: filters?.grossWtRange ? `${filters.grossWtRange[0]} - ${filters.grossWtRange[1]}` : '',
    },
    { label: 'Design Color', value: formatArray(filters?.designColor) },
    { label: 'Target Show', value: filters?.targetTags?.label || '' },
    { label: 'Collection', value: filters?.collectionTags?.label || '' },
    { label: 'Inspiration', value: filters?.inspiration?.label || '' },
    { label: 'Vertical', value: filters?.vertical?.label || '' },
    {
      label: 'Display Quality',
      value: filters?.displayQualityTags?.label || '',
    },
    { label: 'Sort By', value: filters?.sortByTags?.label || '' },
  ];

  return (
    <div
      style={{
        fontSize: '14px',
        padding: '0.5rem',
        borderRadius: '8px',
        backgroundColor: '#FFF6E8',
        marginTop: '1rem',
      }}
    >
      {/* Title (non-scrollable) */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: '#a67c52',
          borderBottom: '1px solid #e6d4c2',
          paddingBottom: '0.3rem',
          marginLeft: '16px',
        }}
      >
        {filters?.selectedScope?.label || ''}
      </div>

      {/* Scrollable content */}
      <div
        style={{
          overflowY: 'auto',
          maxHeight: '130px',
        }}
      >
        {filterItems.map((item) =>
          item.value ? (
            <div
              key={item.label}
              style={{
                marginBottom: '0.5rem',
                color: '#5f443e',
                marginLeft: '16px',
              }}
            >
              <strong style={{ color: '#a67c52' }}>{item.label}:</strong> <span style={{ fontWeight: 500 }}>{item.value}</span>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default FilterSummary;
