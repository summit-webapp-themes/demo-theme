import { useState } from 'react';
import fetchProductsData from '../../../services/api/get-emr-catalog-data/get-catalog-data-api';
import FixedSidebar from '../Sidebar/FixedSidebar/MasterComponent';
import KCGridCard from '../../../cards/KCGridCard';
import KCListCard from '../../../cards/KCListCard';
import { Button, ButtonGroup } from 'react-bootstrap';
import { IoGrid } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';

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
      const errorMessage = getProductsData?.data?.message || 'Error fetching data';
      setError(errorMessage);
      setProductsData([]);
      setIsLoading(false);
    }
  };
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
          ) : null}
          <div className="container mt-5 d-flex justify-content-end">
            <ButtonGroup className="pe-4">
              <Button
                variant="outline-light"
                className="rounded-start py-1 px-3 d-flex align-middle"
                style={{ borderColor: '#C6C6C6' }}
                onClick={() => setToggleProductView('list')}
              >
                <HiOutlineMenu size={18} style={{ color: toggleProductView === 'list' ? '#A69476' : 'black' }} />
              </Button>
              <Button
                variant="outline-light"
                className="rounded-end py-1 px-3 d-flex align-middle"
                style={{ borderColor: '#C6C6C6' }}
                onClick={() => setToggleProductView('grid')}
              >
                <IoGrid size={16} style={{ color: toggleProductView === 'grid' ? '#A69476' : 'black' }} />
              </Button>
            </ButtonGroup>
          </div>
          {toggleProductView === 'grid' ? (
            <KCGridCard productsData={productsData} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
          ) : (
            <KCListCard productsData={productsData} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedFiltersLayout;
