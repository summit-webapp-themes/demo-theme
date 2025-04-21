import { useState } from 'react';
import fetchProductsData from '../../../services/api/get-emr-catalog-data/get-catalog-data-api';
import FixedSidebar from '../Sidebar/FixedSidebar/MasterComponent';
const FixedFiltersLayout = () => {
  const [productsData, setProductsData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const getProductsData = async (filtersData: any) => {
    const getProductsData = await fetchProductsData(filtersData);
    console.log('getProductsData', getProductsData);
    if (getProductsData?.data?.msg === 'success') {
      const productsData = getProductsData?.data?.data;
      setProductsData(productsData);
    } else {
      const errorMessage = getProductsData?.data?.error || 'Error fetching data';
      setError(errorMessage);
      setProductsData([]);
    }
  };
  return (
    <div className="row">
      <div className="col-2">
        <FixedSidebar getProductsData={getProductsData} />
      </div>
      <div className="col-10">
        <div className="ms-5">
          {error ? (
            <div className="alert alert-danger mt-5 text-center" role="alert">
              {error}
            </div>
          ) : productsData?.length > 0 ? (
            <div className="container mt-4">
              {productsData?.map((item: any, index: any) => (
                <div className="card shadow-sm mb-4" key={index}>
                  <div className="card-header text-white" style={{ backgroundColor: '#fffaf2' }}>
                    <strong>Order #{item.OdNo}</strong> — {item.OdDmCd}
                  </div>
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Company Code:</strong> {item.OdCoCd}
                      </div>
                      <div className="col-md-4">
                        <strong>Type Code:</strong> {item.OdTc}
                      </div>
                      <div className="col-md-4">
                        <strong>Year:</strong> {item.OdYy}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Char:</strong> {item.OdChr}
                      </div>
                      <div className="col-md-4">
                        <strong>Order Sr:</strong> {item.OdSr}
                      </div>
                      <div className="col-md-4">
                        <strong>Sale Price:</strong> ₹{item.OdSalPrc.toLocaleString()}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <strong>Gross Wt:</strong> {item.GrossWt}g
                      </div>
                      <div className="col-md-4">
                        <strong>Diamond Wt:</strong> {item.DiaWt}ct
                      </div>
                      <div className="col-md-4">
                        <strong>Stone Wt:</strong> {item.CsWt}ct
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-center mt-5">No data available</h2>
              <p className="text-center">Please adjust your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedFiltersLayout;
