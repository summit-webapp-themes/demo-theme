import { useState } from 'react';
import fetchProductsData from '../../../services/api/get-emr-catalog-data/get-catalog-data-api';
import FixedSidebar from '../Sidebar/FixedSidebar/MasterComponent';
import KCGridCard from '../../../cards/KCGridCard';
import KCListCard from '../../../cards/KCListCard';
import { Button, ButtonGroup } from 'react-bootstrap';
import { IoGrid } from 'react-icons/io5';
import { HiOutlineMenu } from "react-icons/hi";

const FixedFiltersLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [toggleProductView, setToggleProductView] = useState<'grid' | 'list'>('grid');
  const getProductsData = async (filtersData: any) => {
    setIsLoading(true);
    const getProductsData = await fetchProductsData(filtersData);
    if (getProductsData?.data?.msg === 'success') {
      const productsData = getProductsData?.data?.data;
      setProductsData(productsData);
      setIsLoading(false);
    } else {
      const errorMessage = getProductsData?.data?.error || 'Error fetching data';
      setError(errorMessage);
      setProductsData([]);
      setIsLoading(false);
    }
  };
  const testProduct = [
    {
      OdNo: 'JY-2025-001',
      OdId: 'ID-2025-001',
      OdCoCd: 'VVS1',
      OdSalPrc: 36521,
      OdKt: 18,
      DiaWt: 1.33
    },
    {
      OdNo: 'JY-2025-002',
      OdId: 'ID-2025-002',
      OdCoCd: 'VVS2',
      OdSalPrc: 36521,
      OdKt: 18,
      DiaWt: 1.33
    },
  ]
  return (
    <div className="row">
      <div className="col-2">
        <FixedSidebar getProductsData={getProductsData} />
      </div>
      <div className="col-10">
        <div className="ms-5">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading products...</p>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger mt-5 text-center" role="alert">
              {error}
            </div>
          ) : productsData?.length > 0 ? (
            <div className="container mt-4">
              {productsData?.map((item: any, index: any) => (
                <div className="card shadow-sm mb-4" key={index}>
                  <div className="card-header text-black" style={{ backgroundColor: '#fffaf2' }}>
                    <strong> Style Code</strong> — {item.OdDmCd}
                  </div>
                  <div className="card-body">
                    <div>
                      <strong>Company Code:</strong> {item.OdCoCd} | <strong>Sale Price:</strong> ₹{item.OdSalPrc.toLocaleString()} |{' '}
                      <strong>Od Kt:</strong> {item.OdKt} | <strong>Diamond Wt:</strong> {item.DiaWt}ct
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
          <div className=' container d-flex justify-content-end'>
            <ButtonGroup className="pe-4">
              <Button variant='outline-light' className='rounded-start py-1 px-3 d-flex align-middle' style={{ borderColor: '#C6C6C6'}} onClick={() => setToggleProductView('list')}>
                <HiOutlineMenu size={18} style={{ color: toggleProductView === "list" ? "#A69476" : "black"}} />
              </Button>
              <Button variant='outline-light' className='rounded-end py-1 px-3 d-flex align-middle' style={{ borderColor: '#C6C6C6'}} onClick={() => setToggleProductView('grid')}>
                <IoGrid size={16} style={{ color: toggleProductView === "grid" ? "#A69476" : "black"}} />
              </Button>
            </ButtonGroup>
          </div>
          {
            toggleProductView === 'grid' ? 
            <KCGridCard productsData={testProduct} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
            : <KCListCard productsData={testProduct} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
          }
        </div>
      </div>
    </div>
  );
};

export default FixedFiltersLayout;
