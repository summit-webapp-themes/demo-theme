import FixedSidebar from '../../../addon-components/TwoLevelSidebar/Sidebar/SidebarMaster';
import useKCLayoutHandler from '../../../../hooks/addon-hooks/kc-hooks/useKCLayoutHandler';
import useFiltersHook from '../../../../hooks/addon-hooks/kc-hooks/useTwoLevelSidebar';
import KCProductListing from '../../../addon-components/KCProductListing';
import { useSelector } from 'react-redux';
import { KCFromStore, setGoldRate, setPalladiumRate, setPlatinumRate, setSilverRate } from '../../../../store/slices/general_slices/kc-slice';
import { setGridCols } from '../../../../store/slices/general_slices/kc-slice';

const FixedFiltersLayout = ({ children, page } : {
  children?: React.ReactNode;
  page: 'product-listing' | 'other';
}) => {
  // const gridCols = useSelector((state: any) => state.KCSlice.gridCols);
  const { gridCols, goldRate, platinumRate, palladiumRate, silverRate } = useSelector(KCFromStore);
  const {
    isLoading,
    productsData,
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
    filters,
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
  }: any = useFiltersHook(getProductsData, getCartData, getVoucherData, metalRateData, setGoldRate, setPlatinumRate, setPalladiumRate, setSilverRate);
  
  
  const handleApplyFilters = (filters?: any) => {
    handleAcceptIndivisualFilter({
      customer: selectedCustomerCode,
      selectedScope,
      ...(selectedScope?.value === 'Voucher' && { voucherNo, voucherType: selectedVoucherType }),
      ...(targetTags && { targetTags }),
      ...(collectionTags && { collectionTags }),
      ...(inspirationTags && { inspiration: inspirationTags }),
      ...(verticalTags && { vertical: verticalTags }),
      ...(designTags?.length > 0 && { designCategory: designTags}),
      ...(salesTags?.length > 0 && { salesCategory: salesTags}), 
      ...(displayQualityTags && { displayQualityTags}),
      ...(sortByTags && { sortByTags}),
      ...(priceRange && { priceRange}),
      ...(diamondCtsRange && { diamond: diamondCtsRange}),
      ...(grossWtRange && { grossWtRange}),
      ...(metalWtRange && { metalWtRange}), 
      ...(colorStoneWtRange && { colorStoneWtRange}),
      ...(centerPointerWtRange && { centerPointerWtRange}),
      ...(selectedSourceType?.value && { source: selectedSourceType}), 
      ...(selectedSourceType?.value === 'Stock' && { stockType: selectedStockType}),
      ...(selectedInStockType?.value && { inStockType: selectedInStockType}),
      ...(selectedLiveType?.value && { liveType: selectedLiveType}),
      ...(selectedMetalCol?.value && { metalColor: selectedMetalCol}),
      ...(colorStone?.value && { colorStone}),
      ...(selectedSourceType?.value !== 'Stock' && selectedCatalog?.value && { selectedCatalog }),
      ...(centerStone?.value && { centerStone }),
      ...(designCodeRange.length === 2 && designCodeRange[0] !== "" && designCodeRange[1] !== "" && { designCodeRange }),
      ...(designCodes?.length > 0 && { designCodes }),
      ...(familyCodes?.length > 0 && { familyCodes }),
      ...(goldRate && { goldRate }),
      ...(platinumRate && { platinumRate }),
      ...(palladiumRate && { palladiumRate }),
      ...(silverRate && { silverRate }),
      ...(designCodeFileUpload && { designCodeFileUpload }),
      ...filters,
    })}

  return (
    <div className="row m-0" style={{backgroundColor: page === "product-listing" ? '#FCFCFC' : '#FFFFFF', minHeight: '100vh', height: 'fit-content' }}>
      {page === 'product-listing' && (
        <div className="col-2">
          <FixedSidebar
            workScopeList={workScopeList}
            voucherTypeList={voucherTypeList}
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
          />
        </div>
      )}
      <KCProductListing 
        activeScope={activeScope}
        isLoading={isLoading} 
        error={error} 
        setError={setError} 
        cartError={cartError}
        setCartError={setCartError}
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
        stockCartBtnLoader={stockCartBtnLoader}
        createVoucherAPI={createVoucherAPI}
        selectedProducts={selectedProducts}
        handlePriceRefresh={handlePriceRefresh}
        setSelectedProducts={setSelectedProducts}
        handleQuantityChange={handleQuantityChange} 
        handleDeleteItems={handleDeleteItems}
        createOrderAPI={createOrderAPI}
        voucherTypeList={voucherTypeList}
        hideFiltersOnFirstLoad={hideFiltersOnFirstLoad}
        voucherNo={voucherNo}
        handleApplyFilters={handleApplyFilters}
        children={children}
        page={page}
        metalRateData={metalRateData}
        designSizes={designSizes}
        attributesData={attributesData}
        goldRate={goldRate}
        setGoldRate={setGoldRate}
        platinumRate={platinumRate}
        setPlatinumRate={setPlatinumRate}
        palladiumRate={palladiumRate}
        setPalladiumRate={setPalladiumRate}
        silverRate={silverRate}
        setSilverRate={setSilverRate}
      />
    </div>
  );
};

export default FixedFiltersLayout;
