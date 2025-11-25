import FixedSidebar from '../../../addon-components/TwoLevelSidebar/Sidebar/SidebarMaster';
import useKCLayoutHandler from '../../../../hooks/addon-hooks/kc-hooks/useKCLayoutHandler';
import useFiltersHook from '../../../../hooks/addon-hooks/kc-hooks/useTwoLevelSidebar';
import KCProductListing from '../../../addon-components/KCProductListing';
import { useDispatch, useSelector } from 'react-redux';
import { setGridCols, KCFromStore, setGoldRate, setPalladiumRate, setPlatinumRate, setSilverRate, setMetalRateSidebar, setHideFiltersOnFirstLoad, setFilters, setFiltersSetOfAPI  } from '../../../../store/slices/general_slices/kc-slice';
import MetalRateSidebar from '../../../addon-components/KCTopFilterSection/MetalRateSidebar';
import { useEffect, useState } from 'react';
import CustomiseSidebar from '../../../addon-components/KCTopFilterSection/CustomiseSidebar';
import SizeModal from '../../../addon-components/KCTopFilterSection/SizeModal';
import MoveToModal from '../../../addon-components/KCTopFilterSection/MoveToModal';
import MoveToSidebarWrapper from '../../../addon-components/KCTopFilterSection/MoveToSidebarWrapper';
import DesignStockForCart from '../../../addon-components/KCTopFilterSection/DesignStockForCart';
import { Option } from '../../../../store/slices/general_slices/multilingual-slice';
import RefreshRateSidebar from '../../../addon-components/KCTopFilterSection/RefreshRateSidebar';

const FixedFiltersLayout = ({ children, page } : {
  children?: React.ReactNode;
  page: 'product-listing' | 'other';
}) => {
  const { gridCols, goldRate, platinumRate, palladiumRate, silverRate, metalRateSidebar, prevCSFilters, filters, filtersSetOfAPI } = useSelector(KCFromStore);
  const [moveToSidebar, setMoveToSidebar] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [customiseSidebar, setCustomiseSidebar] = useState(false);
  const [moveToModal, setMoveToModal] = useState(false);
  const [showMoveToJQTModal, setShowMoveToJQTModal] = useState(false);
  const [refreshRateSidebar, setRefreshRateSidebar] = useState(false);
  const {
    isLoading,
    productsData,
    productsCount,
    cartProductsData,
    voucherProductsData,
    error,
    setError,
    cartError,
    setCartError,
    getProductsData,
    getCartData,
    getVoucherData,
    deleteCs,
    handlePriceRefresh,
    selectedProducts,
    setSelectedProducts,
    toggleProductView,
    setToggleProductView,
    toggleGroupByView,
    setToggleGroupByView,
    actionBtnLoader,
    createVoucherAPI,
    handleQuantityChange,
    handleDeleteItems,
    createOrderAPI,
    metalRateData,
    designSizes,
    attributesData,
    stockCartBtnLoader,
    copyStockDesigns,
    blockStockDesigns,
    getVoucherHeaderDetails,
    getFilteredSalesCustomer,
    filteredSalesCustomerData,
    getVoucherList,
    voucherListData,
    rateLookUpList,
    getRateLookUp,
    defaultRateLookUpValues,
    checkDesignStockForCart,
    designStockForCart,
    rmCategoryList,
    getRefreshRateParams,
    postRefreshRate,
  } = useKCLayoutHandler();

  const {
    activeScope,
    sessionTypeState,
    applyFilterBtnLoader,
    sessionLoader,
    isSidebarVisible,
    selectedFilter,
    targetTags,
    setTargetTags,
    collectionTags,
    setCollectionTags,
    inspirationTags,
    setInspirationTags,
    verticalTags,
    setVerticalTags,
    openSidebar,
    closeSidebar,
    handleAcceptIndivisualFilter,
    customerCodeList,
    selectedCustomerCode,
    setSelectedCustomerCode,
    sourceTypeList,
    selectedSourceType,
    setSelectedSourceType,
    centerStone,
    setCenterStone,
    colorStone,
    setColorStone,
    selectedMetalCol,
    setSelectedMetalCol,
    selectedCatalog,
    setSelectedCatalog,
    selectedStockType,
    setSelectedStockType,
    selectedInStockType,
    setSelectedInStockType,
    selectedLiveType,
    setSelectedLiveType,
    statusTags,
    setStatusTags,
    originTags,
    setOriginTags,
    typeTags,
    setTypeTags,
    statusList,
    originList,
    typeList,
    inStockTypeList,
    liveTypeList,
    metalColList,
    sourceCatalogueList,
    salesCategoryList,
    designCategoryList,
    designTags,
    salesTags,
    setDesignTags,
    setSalesTags,
    displayQualityTags,
    sortByList,
    displayQualityList,
    sortByTags,
    styleCodeList,
    styleCodeTags,
    bagNoList,
    bagNumberTags,
    designColorList,
    designColourTags,
    priceRange,
    diamondCtsRange,
    grossWtRange,
    metalWtRange,
    colorStoneWtRange,
    centerPointerWtRange,
    setDesignColourTags,
    setBagNumberTags,
    setStyleCodeTags,
    setSortByTags,
    setDisplayQualityTags,
    setDesignColorList,
    setGrossWtRange,
    setMetalWtRange,
    setColorStoneWtRange,
    setCenterPointerWtRange,
    setDiamondCtsRange,
    setPriceRange,
    selectedColorStone,
    setSelectedColorStone,
    inspirationList,
    collectionList,
    verticalList,
    workScopeList,
    voucherTypeList,
    scopeVoucherTypeList,
    selectedScope,
    setSelectedScope,
    selectedVoucherType,
    setselectedVoucherType,
    voucherNo,
    setVoucherNo,
    targetShowList,
    showFilters,
    setFromDmCd,
    setToDmCd,
    confirmationOptions,
    designCodeRange,
    setDesignCodeRange,
    hideFiltersOnFirstLoad,
    designCodes,
    setDesignCodes,
    familyCodes,
    setFamilyCodes,
    designCodeFileUpload,
    setDesignCodeFileUpload,
    pageNo,
    setPageNo,
    imageSearchFileUpload,
    setImageSearchFileUpload,
    customerStock,
    setCustomerStock,
    handleResetInputs,
    voucherHeaderOptions,
    setVoucherHeaderOptions,
    hydrateStatesFromFilters,
    selectedSalesPersons,
    setSelectedSalesPersons,
    selectedCustomers,
    setSelectedCustomers,
    voucherOdNoRange,
    setVoucherOdNoRange,
    dateRange, 
    setDateRange,
  }: any = useFiltersHook(getProductsData, getCartData, getVoucherData, getVoucherList, metalRateData, setGoldRate, setPlatinumRate, setPalladiumRate, setSilverRate, filters, filtersSetOfAPI, setFilters, setFiltersSetOfAPI, prevCSFilters, getVoucherHeaderDetails );
  const voucherMode = [
    { label: 'New', value: 'new' },
    { label: 'Existing', value: 'existing' },
  ]
  const dispatch = useDispatch();
  const [selectedModalVoucherType, setSelectedModalVoucherType] = useState<any>();
  const [selectedVoucherMode, setSelectedVoucherMode] = useState<any>();
  const [modalVoucherNo, setModalVoucherNo] = useState({
    OdCoCd: 'KC',
    OdTc: '',
    OdYy: '',
    OdChr: '',
    OdNo: '',
  });
  const [rmRate, setRmRate] = useState<Option | null>(null);
  const [labRate, setLabRate] = useState<Option | null>(null);
  const [metalLoss, setMetalLoss] = useState<Option | null>(null);
  const [jmvOdChr, setJmvOdChr] = useState<Option | null>(null);
  const [copyWithRate, setCopyWithRate] = useState<Option | null>(null);
  const [rmCategory, setRmCategory] = useState<Option | null>(null);
  const [copyLabRate, setCopyLabRate] = useState<Option | null>(null);
  const [rmDate, setRmDate] = useState<Date | null>(null);

  const handleClose = () => {
    setMoveToSidebar(false);
    setSelectedModalVoucherType(null);
    setSelectedVoucherMode(null);
    setModalVoucherNo({
      OdCoCd: 'KC',
      OdTc: '',
      OdYy: '',
      OdChr: '',
      OdNo: '',
    });
  };

  const handleApplyFilters = async (filters?: any, isPageIncrementValue?: boolean) => {
    // handleResetInputs();
    selectedCustomerCode?.value !== ""  && dispatch(setHideFiltersOnFirstLoad(false));
    return handleAcceptIndivisualFilter({
     customer: selectedCustomerCode,
      selectedScope,
      voucherNo,
      voucherType: selectedVoucherType,
      targetTags,
      collectionTags,
      inspiration: inspirationTags,
      vertical: verticalTags,
      designCategory: designTags,
      salesCategory: salesTags,
      displayQualityTags,
      sortByTags,
      priceRange,
      diamond: diamondCtsRange,
      grossWtRange,
      metalWtRange,
      colorStoneWtRange,
      centerPointerWtRange,
      source: selectedSourceType,
      stockType: selectedStockType,
      inStockType: selectedInStockType,
      liveType: selectedLiveType,
      metalColor: selectedMetalCol,
      colorStone,
      selectedCatalog,
      centerStone,
      designCodeRange,
      designCodes,
      familyCodes,
      goldRate,
      platinumRate,
      palladiumRate,
      silverRate,
      designCodeFileUpload,
      imageSearchFileUpload,
      page: filters?.page || 1,
      customerStock,
      selectedSalesPersons,
      selectedCustomers,
      voucherOdNoRange,
      dateRange,
      ...filters,
    }, isPageIncrementValue);
  }
  
  useEffect(() => {
    setSelectedProducts([]);
    dispatch(setMetalRateSidebar(false));
    setMoveToSidebar(false);
    setCustomiseSidebar(false);
  }, [filters, filtersSetOfAPI, activeScope, selectedScope?.value, selectedStockType?.value, selectedVoucherType?.value]);
  return (
    <div className="row m-0" style={{backgroundColor: page === "product-listing" ? '#FCFCFC' : '#FFFFFF', minHeight: '100vh', height: 'fit-content' }}>
      {page === 'product-listing' && (
        <div className="col-2">
          <FixedSidebar
            workScopeList={workScopeList}
            voucherTypeList={voucherTypeList}
            scopeVoucherTypeList={scopeVoucherTypeList}
            selectedScope={selectedScope}
            setSelectedScope={setSelectedScope}
            selectedVoucherType={selectedVoucherType}
            setselectedVoucherType={setselectedVoucherType}
            voucherNo={voucherNo}
            setVoucherNo={setVoucherNo}
            visible={isSidebarVisible}
            selectedFilter={selectedFilter}
            selectedCustomerCode={selectedCustomerCode}
            setSelectedCustomerCode={setSelectedCustomerCode}
            customerCodeList={customerCodeList}
            statusList={statusList}
            originList={originList}
            typeList={typeList}
            inStockTypeList={ inStockTypeList}
            liveTypeList={liveTypeList}
            metalColList={metalColList}
            sourceCatalogueList={sourceCatalogueList}
            inspirationList={inspirationList}
            targetShowList={targetShowList}
            collectionList={collectionList}
            verticalList={verticalList}
            salesCategoryList={salesCategoryList}
            designCategoryList={designCategoryList}
            displayQualityList={displayQualityList}
            sortByList={sortByList}
            styleCodeList={styleCodeList}
            bagNoList={bagNoList}
            designColorList={designColorList}
            selectedSourceType={selectedSourceType}
            setSelectedSourceType={setSelectedSourceType}
            sourceTypeList={sourceTypeList}
            centerStone={centerStone}
            setCenterStone={setCenterStone}
            colorStone={colorStone}
            setColorStone={setColorStone}
            selectedMetalCol={selectedMetalCol}
            setSelectedMetalCol={setSelectedMetalCol}
            selectedCatalog={selectedCatalog}
            setSelectedCatalog={setSelectedCatalog}
            selectedStockType={selectedStockType}
            setSelectedStockType={setSelectedStockType}
            selectedInStockType={selectedInStockType}
            setSelectedInStockType={setSelectedInStockType}
            selectedLiveType={selectedLiveType}
            setSelectedLiveType={setSelectedLiveType}
            handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
            closeSidebar={closeSidebar}
            selectedColorStone={selectedColorStone}
            setSelectedColorStone={setSelectedColorStone}
            designTags={designTags}
            setDesignTags={setDesignTags}
            salesTags={salesTags}
            setSalesTags={setSalesTags}
            displayQualityTags={displayQualityTags}
            setDisplayQualityTags={setDisplayQualityTags}
            setDesignColorList={setDesignColorList}
            sortByTags={sortByTags}
            setSortByTags={setSortByTags}
            styleCodeTags={styleCodeTags}
            setStyleCodeTags={setStyleCodeTags}
            bagNumberTags={bagNumberTags}
            setBagNumberTags={setBagNumberTags}
            designColourTags={designColourTags}
            setDesignColourTags={setDesignColourTags}
            statusTags={statusTags}
            setStatusTags={setStatusTags}
            originTags={originTags}
            setOriginTags={setOriginTags}
            typeTags={typeTags}
            targetTags={targetTags}
            setTargetTags={setTargetTags}
            collectionTags={collectionTags}
            setCollectionTags={setCollectionTags}
            inspirationTags={inspirationTags}
            setInspirationTags={setInspirationTags}
            verticalTags={verticalTags}
            setVerticalTags={setVerticalTags}
            setTypeTags={setTypeTags}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            diamondCtsRange={diamondCtsRange}
            setDiamondCtsRange={setDiamondCtsRange}
            grossWtRange={grossWtRange}
            setGrossWtRange={setGrossWtRange}
            metalWtRange={metalWtRange}
            setMetalWtRange={setMetalWtRange}
            colorStoneWtRange={colorStoneWtRange}
            setColorStoneWtRange={setColorStoneWtRange}
            centerPointerWtRange={centerPointerWtRange}
            setCenterPointerWtRange={setCenterPointerWtRange}
            setFromDmCd={setFromDmCd}
            setToDmCd={setToDmCd}
            filters={filters}
            showFilters={showFilters}
            applyFilterBtnLoader={applyFilterBtnLoader}
            sessionLoader={sessionLoader}
            isSidebarVisible={isSidebarVisible}
            openSidebar={openSidebar}
            handleApplyFilters={handleApplyFilters}
            sessionTypeState={sessionTypeState}
            confirmationOptions={confirmationOptions}
            deleteCs={deleteCs}
            designCodeRange={designCodeRange}
            setDesignCodeRange={setDesignCodeRange}
            hideFiltersOnFirstLoad={hideFiltersOnFirstLoad}
            setSelectedProducts={setSelectedProducts}
            designCodes={designCodes}
            setDesignCodes={setDesignCodes}
            familyCodes={familyCodes}
            setFamilyCodes={setFamilyCodes}
            designCodeFileUpload={designCodeFileUpload}
            setDesignCodeFileUpload={setDesignCodeFileUpload}
            imageSearchFileUpload={imageSearchFileUpload}
            setImageSearchFileUpload={setImageSearchFileUpload}
            customerStock={customerStock}
            setCustomerStock={setCustomerStock}
            setFiltersSetOfAPI={setFiltersSetOfAPI}
            setFilters={setFilters}
            handleResetInputs={handleResetInputs}
            getVoucherHeaderDetails={getVoucherHeaderDetails}
            voucherHeaderOptions={voucherHeaderOptions}
            setVoucherHeaderOptions={setVoucherHeaderOptions}
            hydrateStatesFromFilters={hydrateStatesFromFilters}
            getFilteredSalesCustomer={getFilteredSalesCustomer}
            filteredSalesCustomerData={filteredSalesCustomerData}
            selectedSalesPersons={selectedSalesPersons}
            setSelectedSalesPersons={setSelectedSalesPersons}
            selectedCustomers={selectedCustomers}
            setSelectedCustomers={setSelectedCustomers}
            voucherOdNoRange={voucherOdNoRange}
            setVoucherOdNoRange={setVoucherOdNoRange}
            dateRange={dateRange} 
            setDateRange={setDateRange}
          />
        </div>
      )}
      <KCProductListing 
        activeScope={activeScope}
        isLoading={isLoading} 
        error={error} 
        cartError={cartError}
        toggleProductView={toggleProductView} 
        setToggleProductView={setToggleProductView}
        toggleGroupByView={toggleGroupByView}
        setToggleGroupByView={setToggleGroupByView}
        gridCols={gridCols}
        setGridCols={setGridCols}
        productsData={productsData}
        cartProductsData={cartProductsData}
        voucherProductsData={voucherProductsData}
        deleteCs={deleteCs}
        selectedCustomerCode={selectedCustomerCode}
        actionBtnLoader={actionBtnLoader}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        handleQuantityChange={handleQuantityChange} 
        handleDeleteItems={handleDeleteItems}
        hideFiltersOnFirstLoad={hideFiltersOnFirstLoad}
        handleApplyFilters={handleApplyFilters}
        children={children}
        page={page}
        selectedVoucherType={selectedVoucherType}
        setMetalRateSidebar={(value: boolean) => dispatch(setMetalRateSidebar(value))}
        setSizeModal={(value: boolean) => setSizeModal(value)}
        setCustomiseSidebar={(value: boolean) => setCustomiseSidebar(value)}
        setMoveToSidebar={(value: boolean) => setMoveToSidebar(value)}
        setRefreshRateSidebar={(value: boolean) => setRefreshRateSidebar(value)}
        pageNo={pageNo}
        setPageNo={setPageNo}
        applyFilterBtnLoader={applyFilterBtnLoader}
        productsCount={productsCount}
        prevCSFilters={prevCSFilters}
        voucherListData={voucherListData}
        setVoucherNo={setVoucherNo}
        filters={filters}
        getRateLookUp={getRateLookUp}
        getRefreshRateParams={getRefreshRateParams}
      />
      <MetalRateSidebar 
        showSidebar={metalRateSidebar} 
        setShowSidebar={(value: boolean) => dispatch(setMetalRateSidebar(value))} 
        handleApplyFilters={handleApplyFilters}
        goldRate={goldRate}
        setGoldRate={setGoldRate}
        platinumRate={platinumRate}
        setPlatinumRate={setPlatinumRate}
        palladiumRate={palladiumRate}
        setPalladiumRate={setPalladiumRate}
        silverRate={silverRate}
        setSilverRate={setSilverRate}
      />
      <MoveToSidebarWrapper 
        moveToSidebar={moveToSidebar}
        setMoveToSidebar={(value: boolean) => setMoveToSidebar(value)}
        handleClose={handleClose}
        selectedCustomerCode={selectedCustomerCode}
        voucherType={voucherTypeList}
        selectedVoucherType={selectedVoucherType}
        selectedModalVoucherType={selectedModalVoucherType}
        setSelectedModalVoucherType={setSelectedModalVoucherType}
        voucherMode={voucherMode}
        selectedVoucherMode={selectedVoucherMode}
        setSelectedVoucherMode={setSelectedVoucherMode}
        voucherNo={modalVoucherNo} 
        setVoucherNo={setModalVoucherNo}
        createVoucherAPI={createVoucherAPI}
        copyStockDesigns={copyStockDesigns}
        actionBtnLoader={actionBtnLoader}
        stockCartBtnLoader={stockCartBtnLoader}
        createOrderAPI={createOrderAPI}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        handleApplyFilters={handleApplyFilters}
        activeScope={activeScope}
        setMoveToModal={(value: boolean) => setMoveToModal(value)}
        blockStockDesigns={blockStockDesigns}
        selectedStockType={selectedStockType}
        getVoucherHeaderDetails={getVoucherHeaderDetails}
        voucherHeaderOptions={voucherHeaderOptions}
        setVoucherHeaderOptions={setVoucherHeaderOptions}
        rateLookUpList={rateLookUpList}
        defaultRateLookUpValues={defaultRateLookUpValues}
        rmRate={rmRate}
        setRmRate={setRmRate}
        labRate={labRate}
        setLabRate={setLabRate}
        metalLoss={metalLoss}
        setMetalLoss={setMetalLoss}
        jmvOdChr={jmvOdChr}
        setJmvOdChr={setJmvOdChr}
        setShowMoveToJQTModal={setShowMoveToJQTModal}
        checkDesignStockForCart={checkDesignStockForCart}
        confirmationOptions={confirmationOptions}
        voucherOdNoRange={voucherOdNoRange}
        setVoucherOdNoRange={setVoucherOdNoRange}
        dateRange={dateRange} 
        setDateRange={setDateRange}
        rmCategoryList={rmCategoryList}
        copyWithRate={copyWithRate}
        setCopyWithRate={setCopyWithRate}
        rmCategory={rmCategory}
        setRmCategory={setRmCategory}
        copyLabRate={copyLabRate}
        setCopyLabRate={setCopyLabRate}
        rmDate={rmDate}
        setRmDate={setRmDate}
        handleResetInputs={handleResetInputs}
      />
      <CustomiseSidebar 
        showSidebar={customiseSidebar} 
        setShowSidebar={(value: boolean) => setCustomiseSidebar(value)} 
        activeScope={activeScope} 
        selectedCustomerCode={selectedCustomerCode} 
        selectedProducts={selectedProducts} 
        handlePriceRefresh={handlePriceRefresh} 
        hideFiltersOnFirstLoad={hideFiltersOnFirstLoad} 
        goldRate={goldRate} 
        platinumRate={platinumRate} 
        palladiumRate={palladiumRate} 
        silverRate={silverRate} 
        attributesData={attributesData}      
      />
      <SizeModal
        showModal={sizeModal}
        setShowModal={(value: boolean) => setSizeModal(value)}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        designSizes={designSizes}
        handleApplyFilters={handleApplyFilters}
      />
      <DesignStockForCart 
        showModal={showMoveToJQTModal} 
        setShowModal={(value: boolean) => setShowMoveToJQTModal(value)} 
        selectedProducts={selectedProducts} 
        setSelectedProducts={setSelectedProducts} 
        designStockForCart={designStockForCart} 
        selectedCustomerCode={selectedCustomerCode}      
        copyStockDesigns={copyStockDesigns}
        handleApplyFilters={handleApplyFilters}
        rmRate={rmRate}
        setRmRate={setRmRate}
        labRate={labRate}
        setLabRate={setLabRate}
        metalLoss={metalLoss}
        setMetalLoss={setMetalLoss}
        rateLookUpList={rateLookUpList}
        setJmvOdChr={setJmvOdChr}
        setMoveToModal={setMoveToModal}
        setMoveToSidebar={setMoveToSidebar}
        handleClose={handleClose}
        setVoucherNo={setModalVoucherNo}
      />
      <MoveToModal 
        moveToModal={moveToModal} 
        setMoveToModal={(value: boolean) => setMoveToModal(value)} 
        handleClose={handleClose}
        voucherType={selectedModalVoucherType} 
        voucherMode={selectedVoucherMode?.value} 
        voucherNo={modalVoucherNo} 
        handleApplyFilters={handleApplyFilters}
        voucherOdNoRange={voucherOdNoRange}
        setVoucherOdNoRange={setVoucherOdNoRange}
        dateRange={dateRange} 
        setDateRange={setDateRange}
        handleResetInputs={handleResetInputs}
      />
      <RefreshRateSidebar
        open={refreshRateSidebar}
        setOpen={(value: boolean) =>  setRefreshRateSidebar(value)}
        copyWithRate={copyWithRate}
        setCopyWithRate={setCopyWithRate}
        rmCategory={rmCategory}
        setRmCategory={setRmCategory}
        copyLabRate={copyLabRate}
        setCopyLabRate={setCopyLabRate}
        rmDate={rmDate}
        setRmDate={setRmDate}
        confirmationOptions={confirmationOptions}
        rmCategoryList={rmCategoryList}
        postRefreshRate={postRefreshRate}
        btnLoader={actionBtnLoader}
        selectedProducts={selectedProducts}
        selectedCustomerCode={selectedCustomerCode}
        handleApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default FixedFiltersLayout;
