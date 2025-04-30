import { useEffect, useState } from 'react';
import fetchProductsData from '../../../services/api/emr-apis/get-emr-catalog-data/get-catalog-data-api';
import FixedSidebar from '../Sidebar/FixedSidebar/MasterComponent';
import KCGridCard from '../../../cards/KCGridCard';
import KCListCard from '../../../cards/KCListCard';
import { Button, ButtonGroup } from 'react-bootstrap';
import { HiOutlineMenu } from 'react-icons/hi';
import KCTopFilterSection from '../KCProductComponents/KCTopFilterSection';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import createVoucher from '../../../services/api/emr-apis/create-voucher/create-voucher-api';
import { FiGrid } from 'react-icons/fi';
import KCTopNavbar from '../KCProductComponents/KCTopNavbar';

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
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer); // cleanup on unmount or if error changes
    }
  }, [error]);

  return (
    <div className="row m-0">
      <div className="col-2">
        <FixedSidebar getProductsData={getProductsData} />
      </div>
      <div className="col-10 p-0">
        <KCTopNavbar />
        <KCTopFilterSection actionBtnLoader={actionBtnLoader} moveToActionHandler={moveToActionHandler} />
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
            <div className="alert alert-danger mt-5 text-center" role="alert" style={{ marginRight: '36px'}}>
              {error}
              {setTimeout(() => setError(null), 3000)}
            </div>
          ) : null}
          <div className="">
            <div className="d-flex justify-content-between align-items-center p-0 pt-3 pe-3">
              <p style={{ color: '#2B2B2B', fontSize: '18px', margin: 0, fontWeight: 600}}>{productsData.length === 0 || productsData.length > 1 ? `${productsData.length} Products` : `${productsData.length} Product`}</p>
              <ButtonGroup className='z-0' style={{ paddingRight: '20px'}}>
                <Button
                  variant="outline-light"
                  className="rounded-start py-1 px-3 d-flex align-items-center bg-white"
                  style={{ borderColor: '#C6C6C6' }}
                  onClick={() => setToggleProductView('list')}
                >
                  <HiOutlineMenu size={17} style={{ color: toggleProductView === 'list' ? '#A69476' : '#797878' }} />
                </Button>
                <Button
                  variant="outline-light"
                  className="rounded-end py-1 px-3 d-flex align-items-center bg-white"
                  style={{ borderColor: '#C6C6C6' }}
                  onClick={() => setToggleProductView('grid')}
                >
                  <FiGrid size={16} style={{ color: toggleProductView === 'grid' ? '#A69476' : '#797878' }} />
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
