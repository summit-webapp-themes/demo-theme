import React from 'react';

function SortByFilter({ selectedMultiLangData, handlePrice, price }: any) {
  return (
    <div className="col-lg-8 col-8">
      <div className="d-flex">
        <div className="d-flex pe-1 ">
          <p className="mb-0 mt-1">{selectedMultiLangData?.price}</p>
          <p className="mt-1">:-</p>
        </div>
        <div>
          <select className="form_select" aria-label="Default select example" onChange={handlePrice} value={price}>
            <option value="low_to_high">{selectedMultiLangData?.low_to_high}</option>
            <option value="high_to_low">{selectedMultiLangData?.high_to_low}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortByFilter;
