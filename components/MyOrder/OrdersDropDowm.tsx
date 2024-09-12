import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const OrdersDropDown = ({ selectedLanguageData, orderListData }: any) => {
  const router = useRouter();
  const { filter } = router.query;
  const currentFilter = filter || 'this_month';
  const arrayForFilters = [
    { value: 'this_month', text: selectedLanguageData?.this_month },
    { value: 'last_30_days', text: selectedLanguageData?.last_30_days },
    { value: 'past_3_months', text: selectedLanguageData?.past_3_months },
    { value: '2022', text: '2022' },
    { value: '2021', text: '2021' },
    { value: '2020', text: '2020' },
  ];

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, filter: selectedValue },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-4 col-6">
            <select className="form-select w-75" style={{ fontSize: '12.5px' }} onChange={handleFilterChange} value={currentFilter}>
              {arrayForFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.text}
                </option>
              ))}
            </select>
          </div>
          <div className="col text-end me-2 order-myorder-margin">
            <p className="mb-0 order-ptag">
              <span className="bold">{orderListData?.length}</span> {selectedLanguageData?.orders}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDropDown;
