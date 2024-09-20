import React from 'react';
import horizontalFilterStyles from '../../../styles/components/productCard.module.scss';
function SortByFilter({ sortBy, handleSortBy }: any) {
  return (
    <div className="col-lg-8 col-8">
      <select
        className={`form-select form-select  ${horizontalFilterStyles.sort_by_select} `}
        value={sortBy}
        onChange={(e) => handleSortBy(e.target.value)}
      >
        <option value="latest" selected>
          Latest Products
        </option>
        <option value="oldest">Oldest Products</option>
        <option value="low_to_high">Low To High</option>
        <option value="high_to_low">High To Low</option>
      </select>
    </div>
  );
}

export default SortByFilter;
