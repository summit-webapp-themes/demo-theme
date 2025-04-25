import { useEffect, useState } from 'react';
import fetchProductsData from '../../../services/api/emr-apis/get-emr-catalog-data/get-catalog-data-api';
import FixedSidebar from '../Sidebar/FixedSidebar/MasterComponent';
import KCGridCard from '../../../cards/KCGridCard';
import KCListCard from '../../../cards/KCListCard';
import { Button, ButtonGroup } from 'react-bootstrap';
import { IoGrid } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import KCTopFilterSection from '../KCFilterComponents/KCTopFilterSection';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import createVoucher from '../../../services/api/emr-apis/create-voucher/create-voucher-api';

const FixedFiltersLayout = () => {
  const TokenFromStore: any = useSelector(get_access_token);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [toggleProductView, setToggleProductView] = useState<'grid' | 'list'>('grid');
  const [actionBtnLoader, setActionBtnLoader] = useState<boolean>(false);

  const getProductsData = async (filtersData: any, isDBData: boolean) => {
    setIsLoading(true);
    const getProductsData = await fetchProductsData(filtersData, TokenFromStore?.token);
    if (getProductsData?.data?.msg === 'success') {
      const productsData = getProductsData?.data?.data;
      setProductsData(productsData);
      setIsLoading(false);
      if (isDBData) {
        const filteredData = productsData?.map((item: any) => ({
          OdCoCd: item.OdCoCd,
          OdTc: item.OdTc,
          OdYy: item.OdYy,
          OdChr: item.OdChr,
          OdNo: item.OdNo,
          OdSr: item.OdSr,
        }));
        const apiBody = { dsgList: filteredData, ToOdChr: 'CS' };
        const postQuotation = await createVoucher(apiBody, TokenFromStore?.token);
      }
    } else {
      const errorMessage = getProductsData?.response?.data?.error || 'Error fetching data';
      setError(errorMessage);
      setProductsData([]);
      setIsLoading(false);
    }
  };

  const moveToActionHandler = async (voucherName: string) => {
    const data = { dsgList: selectedProducts, ToOdChr: voucherName === 'quotation' ? 'QT' : 'CT' };
    setActionBtnLoader(true);
    setError(null);
    try {
      const postQuotation = await createVoucher(data, TokenFromStore?.token);
      if (postQuotation?.data?.msg === 'success') {
        alert('Voucher created successfully!');
        setActionBtnLoader(false);
        setSelectedProducts([]);
      } else {
        const errorMessage = postQuotation?.response?.data?.error || 'Error creating voucher';
        setActionBtnLoader(false);
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error creating voucher:', error);
      setError('An unexpected error occurred while creating the voucher');
    }
  };

  return (
    <div className="row">
      <div className="col-2">
        <FixedSidebar getProductsData={getProductsData} />
      </div>
      <div className="col-10">
        <hr className="m-0" style={{ borderColor: '#A69476' }} />
        <div className="ms-5">
          <KCTopFilterSection actionBtnLoader={actionBtnLoader} moveToActionHandler={moveToActionHandler} />
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
          <div className="">
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
    </div>
  );
};

export default FixedFiltersLayout;
