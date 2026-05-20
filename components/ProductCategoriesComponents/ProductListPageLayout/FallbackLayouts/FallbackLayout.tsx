import useKCLayoutHandler from '../../../../hooks/addon-hooks/kc-hooks/useKCLayoutHandler';
import useFiltersHook from '../../../../hooks/addon-hooks/kc-hooks/useTwoLevelSidebar';
import KCProductListing from '../../../addon-components/KCProductListing';
import { useDispatch, useSelector } from 'react-redux';
import { setGridCols, KCFromStore, setGoldRate, setPalladiumRate, setPlatinumRate, setSilverRate, setMetalRateSidebar, setHideFiltersOnFirstLoad, setFilters, setFiltersSetOfAPI, setUserDefaultSidebar, setShowProductCardDetails, setSelectAllProducts, setToggleProductView } from '../../../../store/slices/general_slices/kc-slice';
import { useEffect, useRef, useState } from 'react';
import { Option } from '../../../../store/slices/general_slices/multilingual-slice';
import useUserDefaultData from '../../../../hooks/addon-hooks/kc-hooks/useUserData';
import { currencyDisplayOptions } from '../../../../utils/addon-utils/currency-map';
import { languageDisplayOptions } from '../../../../utils/addon-utils/language-options';
import { useRouter } from 'next/router';
import FallbackLayoutSidebar from './FallbackLayoutSidebar';
import FallbackLayoutModals from './FallbackLayoutModals';
import useCart from '../../../../hooks/addon-hooks/useCart';

const getQueryParam = (param?: string | string[]) => {
  if (!param) return undefined;
  return Array.isArray(param) ? param[0] : param;
};

const FixedFiltersLayout = ({ children, page }: {
  children?: React.ReactNode;
  page: 'product-listing' | 'other';
}) => {
  const router = useRouter();
  const scope = router.isReady ? getQueryParam(router.query.scope) : undefined;
  const cmcd = router.isReady ? getQueryParam(router.query.cmcd) : undefined;
  const { fetchCartData } = useCart();

  const { currentScope, gridCols, goldRate, platinumRate, palladiumRate, silverRate, metalRateSidebar, prevCSFilters, filters, filtersSetOfAPI, userDefaultData, userDefaultSidebar, showProductCardDetails, toggleProductView, selectAllProducts } = useSelector(KCFromStore);
  const [moveToSidebar, setMoveToSidebar] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [customiseSidebar, setCustomiseSidebar] = useState(false);
  const [moveToModal, setMoveToModal] = useState(false);
  const [showMoveToJQTModal, setShowMoveToJQTModal] = useState(false);
  const [syncStockModal, setSyncStockModal] = useState(false);
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
    toggleGroupByView,
    setToggleGroupByView,
    actionBtnLoader,
    createVoucherAPI,
    handleQuantityChange,
    handleDeleteItems,
    createOrderAPI,
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
    metLookUpList,
    labLookUpList,
    getRateLookUp,
    defaultRateLookUpValues,
    checkDesignStockForCart,
    designStockForCart,
    rmCategoryList,
    getRefreshRateParams,
    postRefreshRate,
    getList,
    productsGrandTotal,
    getVoucherCompanyCode,
    locationList,
    fetchLocationsList,
    filterVoucherTypesList,
    moveToVoucherTypesMap,
    syncStockList,
    moveToInputsMap,
    setMoveToInputsMap,
    fetchSalesCategories,
    salesCategoryListFromCategory,
    getProductDesignOptions,
    getGradeChangeParamsList,
    getDiamondChangeParamsList,
    getColorStoneChangeParamsList,
    checkStockAndUpdate,
    isStockLoading,
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
    stockIdFileUpload,
    setStockIdFileUpload,
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
    stockIds,
    setStockIds,
    showPending,
    setShowPending,
    subLocationType,
    setSubLocationType,
    printOptions,
  }: any = useFiltersHook(
    getProductsData,
    getCartData,
    getVoucherData,
    getVoucherList,
    setGoldRate,
    setPlatinumRate,
    setPalladiumRate,
    setSilverRate,
    filters,
    filtersSetOfAPI,
    setFilters,
    setFiltersSetOfAPI,
    prevCSFilters,
    getVoucherHeaderDetails,
    setSelectedProducts,
    getVoucherCompanyCode,
    scope,
    cmcd,
  );
  const { postUserDefaultData } = useUserDefaultData();

  const voucherMode = [
    { label: 'New', value: 'new' },
    { label: 'Existing', value: 'existing' },
  ]
  const dispatch = useDispatch();
  const [selectedCartType, setSelectedCartType] = useState<Option | null>(null);
  const [selectedModalVoucherType, setSelectedModalVoucherType] = useState<any>();
  const [selectedVoucherMode, setSelectedVoucherMode] = useState<any>({ label: 'New', value: 'new' });
  const [modalVoucherNo, setModalVoucherNo] = useState({
    OdCoCd: '',
    OdTc: '',
    OdYy: '',
    OdChr: '',
    OdNo: '',
  });
  const [modalVoucherHeaderOptions, setModalVoucherHeaderOptions] = useState<any>();
  const [syncStockVoucherHeaderOptions, setSyncStockVoucherHeaderOptions] = useState<any>();
  const [rmRate, setRmRate] = useState<Option | null>(null);
  const [labRate, setLabRate] = useState<Option | null>(null);
  const [metalLoss, setMetalLoss] = useState<Option | null>(null);
  const [jmvOdChr, setJmvOdChr] = useState<Option | null>(null);
  const [copyWithRate, setCopyWithRate] = useState<Option | null>(null);
  const [rmCategory, setRmCategory] = useState<Option | null>(null);
  const [copyLabRate, setCopyLabRate] = useState<Option | null>(null);
  const [rmDate, setRmDate] = useState<Date | null>(null);
  const [profileCurrency, setProfileCurrency] = useState<any>(null);
  const [profileLanguage, setProfileLanguage] = useState<any>(null);
  const [sidebarGoldRate, setSidebarGoldRate] = useState(0);
  const [sidebarPlatinumRate, setSidebarPlatinumRate] = useState(0);
  const [sidebarPalladiumRate, setSidebarPalladiumRate] = useState(0);
  const [sidebarSilverRate, setSidebarSilverRate] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<any>(null);
  const [sidebarCustomer, setSidebarCustomer] = useState<Option | null>(null);
  const [refreshFrom, setRefreshFrom] = useState<Option | null>({ label: 'Date', value: 'date' });
  const refreshFromOptions = [
    {
      label: 'Date',
      value: 'date',
    },
    {
      label: 'Edit Met Rate',
      value: 'metal_rate',
    }
  ]
  const [hasMore, setHasMore] = useState(false);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [forceComplete, setForceComplete] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const totalProducts = productsCount;

  useEffect(() => {
    setSelectedFilters({
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
      designCodeFileUpload,
      stockIdFileUpload,
      imageSearchFileUpload,
      page: filters?.page || 1,
      customerStock,
      selectedSalesPersons,
      selectedCustomers,
      voucherOdNoRange,
      dateRange,
      stockIds,
      subLocationType,
      selectAllProducts,
      ...(selectedVoucherType?.value === 'JMI' && { showPending }),
    });
  }, [
    selectedCustomerCode,
    selectedScope,
    voucherNo,
    selectedVoucherType,
    targetTags,
    collectionTags,
    inspirationTags,
    verticalTags,
    designTags,
    salesTags,
    displayQualityTags,
    sortByTags,
    priceRange,
    diamondCtsRange,
    grossWtRange,
    metalWtRange,
    colorStoneWtRange,
    centerPointerWtRange,
    selectedSourceType,
    selectedStockType,
    selectedInStockType,
    selectedLiveType,
    selectedMetalCol,
    colorStone,
    selectedCatalog,
    centerStone,
    designCodeRange,
    designCodes,
    familyCodes,
    designCodeFileUpload,
    stockIdFileUpload,
    imageSearchFileUpload,
    filters?.page,
    customerStock,
    selectedSalesPersons,
    selectedCustomers,
    voucherOdNoRange,
    dateRange,
    stockIds,
    subLocationType,
    selectAllProducts,
    showPending,
  ]);

  const handleClose = () => {
    setMoveToSidebar(false);
    setSelectedModalVoucherType(null);
    setSelectedVoucherMode({ label: 'New', value: 'new' });
    setModalVoucherNo({
      OdCoCd: '',
      OdTc: '',
      OdYy: '',
      OdChr: '',
      OdNo: '',
    });
    setJmvOdChr(null);
  };

  const handleSliderClose = () => {
    dispatch(setMetalRateSidebar(false));
    dispatch(setUserDefaultSidebar(false));
    setMoveToSidebar(false);
    setCustomiseSidebar(false);
    setMetalRateSidebar(false);
    setRefreshRateSidebar(false);
  }

  const handleApplyFilters = async (filters?: any, isPageIncrementValue?: boolean) => {
    // handleResetInputs();
    if ((filters?.customer?.value !== filtersSetOfAPI?.customer?.value) && (filters?.selectedScope?.value !== filtersSetOfAPI?.selectedScope?.value)) {
      setSelectedProducts([]);
      dispatch(setSelectAllProducts(false));
    } else if ((filters?.customer?.value === filtersSetOfAPI?.customer?.value) && (filters?.selectedScope?.value !== filtersSetOfAPI?.selectedScope?.value)) {
      setSelectedProducts([]);
      dispatch(setSelectAllProducts(false));
    } else if ((filters?.customer?.value !== filtersSetOfAPI?.customer?.value) && (filters?.selectedScope?.value === filtersSetOfAPI?.selectedScope?.value)) {
      setSelectedProducts([]);
      dispatch(setSelectAllProducts(false));
    }
    if (filters?.customer?.value !== filtersSetOfAPI?.customer?.value) {
      fetchCartData('CT', filters?.customer);
      fetchCartData('SCT', filters?.customer);
    }
    selectedCustomerCode?.value !== "" && dispatch(setHideFiltersOnFirstLoad(false));

    const shouldResetForVoucher = filters?.selectedScope?.value === 'Voucher';
    const resetVoucherFilters = {
      targetTags: [],
      collectionTags: [],
      inspiration: [],
      vertical: [],
      designCategory: [],
      salesCategory: [],
      displayQualityTags: [],
      sortByTags: [],
      priceRange: [0, 0],
      diamond: [0, 0],
      grossWtRange: [0, 0],
      metalWtRange: [0, 0],
      colorStoneWtRange: [0, 0],
      centerPointerWtRange: [0, 0],
      colorStone: null,
      selectedCatalog: [],
      centerStone: null,
      source: null,
      stockType: null,
      inStockType: null,
      liveType: null,
      metalColor: null,
      selectedMetalCol: null,
      designCodeRange: ['', ''],
      designCodes: [],
      familyCodes: [],
      designCodeFileUpload: null,
      stockIdFileUpload: null,
      imageSearchFileUpload: null,
      customerStock: false,
      selectedSalesPersons: [],
      selectedCustomers: [],
      dateRange: null,
      stockIds: [],
      subLocationType: null,
      voucherOdNoRange: filters?.voucherOdNoRange ?? [0, 0],
      selectAllCustomers: false,
      selectedSubCustomers: [],
    };

    const payload = {
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
      designCodeFileUpload,
      stockIdFileUpload,
      imageSearchFileUpload,
      page: filters?.page || 1,
      customerStock,
      selectedSalesPersons,
      selectedCustomers,
      voucherOdNoRange,
      dateRange,
      stockIds,
      subLocationType,
      selectAllProducts,
      ...(selectedVoucherType?.value === "JMI" && { showPending }),
      ...filters,
    };

    const finalPayload = shouldResetForVoucher ? { ...payload, ...resetVoucherFilters, ...filters } : payload;

    if (shouldResetForVoucher) {
      handleResetInputs();
    }

    return await handleAcceptIndivisualFilter(finalPayload, isPageIncrementValue);
  }

  const startProgress = (totalProducts: number) => {
    if (!totalProducts) return;
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }

    setUpdatedCount(0);
    setForceComplete(false);
    progressRef.current = setInterval(() => {
      setUpdatedCount(prev => {
        if (prev >= totalProducts - 1) {
          clearInterval(progressRef.current!);
          progressRef.current = null;
          return prev;
        }
        return prev + 1;
      });
    }, 5000); // 5 sec per product
  };

  const stopProgress = (totalProducts: number) => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }

    setUpdatedCount(totalProducts);
    setForceComplete(true);
  };

  const progressPercent = (() => {
    if (!totalProducts) return 0;

    if (forceComplete) return 100;

    const percent = Math.round((updatedCount / totalProducts) * 100);
    return Math.min(percent, 95);
  })();

  useEffect(() => {
    // handleClose();
    // setSelectedProducts([]);
    dispatch(setMetalRateSidebar(false));
    dispatch(setUserDefaultSidebar(false));
    setMoveToSidebar(false);
    setCustomiseSidebar(false);
    setMetalRateSidebar(false);
    setRefreshRateSidebar(false);
  }, [filters, filtersSetOfAPI, currentScope, selectedScope?.value, selectedStockType?.value, selectedVoucherType?.value]);

  useEffect(() => {
    if (!userDefaultData) return;

    const curr = currencyDisplayOptions.find(
      opt => opt.value === userDefaultData?.DefCurrency?.trim()
    );
    const lang = languageDisplayOptions.find(
      opt => opt.label === userDefaultData?.DefLang?.trim()
    );

    setProfileCurrency(curr);
    setProfileLanguage(lang);

    setCopyWithRate(
      confirmationOptions.find((item: Option) =>
        userDefaultData.RefreshRt ? item.value === "Y" : item.value === "N"
      ) || null
    );

    setCopyLabRate(
      confirmationOptions.find((item: Option) =>
        userDefaultData.LabRt ? item.value === "Y" : item.value === "N"
      ) || null
    );

    setRmCategory(
      userDefaultData.RMCtg
        ? { label: userDefaultData.RMCtg, value: userDefaultData.RMCtg }
        : null
    );

    // setSelectedVoucherMode(
    //   voucherMode.find((item: Option) =>
    //     item.value === userDefaultData.voucherModeType
    //   ) || null
    // )

    // Date default
    setRmDate(new Date());
  }, [userDefaultData, userDefaultSidebar, metalRateSidebar, refreshRateSidebar, moveToSidebar, moveToModal]);

  useEffect(() => {
    setSidebarGoldRate(goldRate);
    setSidebarPlatinumRate(platinumRate);
    setSidebarPalladiumRate(palladiumRate);
    setSidebarSilverRate(silverRate);
  }, [goldRate, platinumRate, palladiumRate, silverRate, selectedCustomerCode, moveToSidebar, refreshRateSidebar]);

  useEffect(() => {
    if (moveToSidebar) {
      setSidebarCustomer(selectedCustomerCode);
    }
  }, [selectedCustomerCode, moveToSidebar]);

  return (
    <div className="row m-0" style={{ backgroundColor: page === "product-listing" ? '#FCFCFC' : '#FFFFFF', minHeight: '100vh', height: 'fit-content' }}>
      {page === 'product-listing' && (
        <FallbackLayoutSidebar
          workScopeList={workScopeList}
          scopeVoucherTypeList={filterVoucherTypesList}
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
          inStockTypeList={inStockTypeList}
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
          sessionTypeState={currentScope}
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
          stockIdFileUpload={stockIdFileUpload}
          setStockIdFileUpload={setStockIdFileUpload}
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
          stockIds={stockIds}
          setStockIds={setStockIds}
          handleSliderClose={handleSliderClose}
          toggleProductView={toggleProductView}
          setToggleProductView={(e: any) => dispatch(setToggleProductView(e))}
          showProductCardDetails={showProductCardDetails}
          setShowProductCardDetails={(e: any) => dispatch(setShowProductCardDetails(e))}
          setSelectAllProducts={(value: boolean) => dispatch(setSelectAllProducts(value))}
          getVoucherCompanyCode={getVoucherCompanyCode}
          locationList={locationList}
          fetchLocationsList={fetchLocationsList}
          subLocationType={subLocationType}
          setSubLocationType={setSubLocationType}
          fetchSalesCategories={fetchSalesCategories}
          salesCategoryListFromCategory={salesCategoryListFromCategory}
          selectedFilters={selectedFilters}
        />
      )}
      <KCProductListing
        activeScope={currentScope}
        isLoading={isLoading}
        error={error}
        cartError={cartError}
        toggleProductView={toggleProductView}
        setToggleProductView={(e: any) => dispatch(setToggleProductView(e))}
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
        postUserDefaultData={postUserDefaultData}
        scopeVoucherTypeList={scopeVoucherTypeList}
        productsGrandTotal={productsGrandTotal}
        goldRate={goldRate}
        platinumRate={platinumRate}
        palladiumRate={palladiumRate}
        silverRate={silverRate}
        showPending={showPending}
        setShowPending={setShowPending}
        selectedScope={selectedScope}
        showProductCardDetails={showProductCardDetails}
        hasMore={hasMore}
        setHasMore={setHasMore}
        voucherOdNoRange={voucherOdNoRange}
        selectedStockType={selectedStockType}
        selectAllProducts={selectAllProducts}
        setSelectAllProducts={(value: boolean) => dispatch(setSelectAllProducts(value))}
        syncStockModal={syncStockModal}
        setSyncStockModal={setSyncStockModal}
        printOptions={printOptions}
        checkStockAndUpdate={checkStockAndUpdate}
        isStockLoading={isStockLoading}
      />

      <FallbackLayoutModals
        /* ===== ADD THESE ===== */
        handleClose={handleClose}
        currentScope={currentScope}
        checkDesignStockForCart={checkDesignStockForCart}
        rmCategoryList={rmCategoryList}

        /* ===== MetalRateSidebar ===== */
        metalRateSidebar={metalRateSidebar}
        goldRate={goldRate}
        setGoldRate={setGoldRate}
        platinumRate={platinumRate}
        setPlatinumRate={setPlatinumRate}
        palladiumRate={palladiumRate}
        setPalladiumRate={setPalladiumRate}
        silverRate={silverRate}
        setSilverRate={setSilverRate}

        /* ===== MoveToSidebarWrapper ===== */
        moveToSidebar={moveToSidebar}
        setMoveToSidebar={(value: boolean) => {
          setMoveToSidebar(value);
          setSelectedVoucherMode({ label: 'New', value: 'new' });
        }}
        selectedCustomerCode={selectedCustomerCode}
        voucherTypeList={voucherTypeList}
        selectedVoucherType={selectedVoucherType}
        selectedModalVoucherType={selectedModalVoucherType}
        setSelectedModalVoucherType={setSelectedModalVoucherType}
        voucherMode={voucherMode}
        selectedVoucherMode={selectedVoucherMode}
        setSelectedVoucherMode={setSelectedVoucherMode}
        modalVoucherNo={modalVoucherNo}
        setModalVoucherNo={setModalVoucherNo}
        createVoucherAPI={createVoucherAPI}
        copyStockDesigns={copyStockDesigns}
        actionBtnLoader={actionBtnLoader}
        stockCartBtnLoader={stockCartBtnLoader}
        createOrderAPI={createOrderAPI}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        blockStockDesigns={blockStockDesigns}
        selectedStockType={selectedStockType}
        getVoucherHeaderDetails={getVoucherHeaderDetails}
        modalVoucherHeaderOptions={modalVoucherHeaderOptions}
        setModalVoucherHeaderOptions={setModalVoucherHeaderOptions}
        rateLookUpList={rateLookUpList}
        metLookUpList={metLookUpList}
        labLookUpList={labLookUpList}
        defaultRateLookUpValues={defaultRateLookUpValues}
        rmRate={rmRate}
        setRmRate={setRmRate}
        labRate={labRate}
        setLabRate={setLabRate}
        metalLoss={metalLoss}
        setMetalLoss={setMetalLoss}
        jmvOdChr={jmvOdChr}
        setJmvOdChr={setJmvOdChr}
        confirmationOptions={confirmationOptions}
        voucherOdNoRange={voucherOdNoRange}
        setVoucherOdNoRange={setVoucherOdNoRange}
        copyWithRate={copyWithRate}
        setCopyWithRate={setCopyWithRate}
        rmCategory={rmCategory}
        setRmCategory={setRmCategory}
        copyLabRate={copyLabRate}
        setCopyLabRate={setCopyLabRate}
        rmDate={rmDate}
        setRmDate={setRmDate}
        sidebarGoldRate={sidebarGoldRate}
        setSidebarGoldRate={setSidebarGoldRate}
        sidebarPlatinumRate={sidebarPlatinumRate}
        setSidebarPlatinumRate={setSidebarPlatinumRate}
        sidebarPalladiumRate={sidebarPalladiumRate}
        setSidebarPalladiumRate={setSidebarPalladiumRate}
        sidebarSilverRate={sidebarSilverRate}
        setSidebarSilverRate={setSidebarSilverRate}
        selectedCartType={selectedCartType}
        setSelectedCartType={setSelectedCartType}
        sidebarCustomer={sidebarCustomer}
        setSidebarCustomer={setSidebarCustomer}
        customerCodeList={customerCodeList}
        userDefaultData={userDefaultData}
        refreshFrom={refreshFrom}
        setRefreshFrom={setRefreshFrom}
        refreshFromOptions={refreshFromOptions}
        getVoucherCompanyCode={getVoucherCompanyCode}
        getRateLookUp={getRateLookUp}
        moveToVoucherTypesMap={moveToVoucherTypesMap}
        fetchLocationsList={fetchLocationsList}
        locationList={locationList}
        moveToInputsMap={moveToInputsMap}
        setMoveToInputsMap={setMoveToInputsMap}

        /* ===== CustomiseSidebar ===== */
        customiseSidebar={customiseSidebar}
        setCustomiseSidebar={setCustomiseSidebar}
        attributesData={attributesData}
        updatedCount={updatedCount}
        setUpdatedCount={setUpdatedCount}
        progressPercent={progressPercent}
        startProgress={startProgress}
        stopProgress={stopProgress}
        progressRef={progressRef}
        totalProducts={totalProducts}
        handlePriceRefresh={handlePriceRefresh}
        hideFiltersOnFirstLoad={hideFiltersOnFirstLoad}

        /* ===== DesignStockForCart ===== */
        showMoveToJQTModal={showMoveToJQTModal}
        setShowMoveToJQTModal={setShowMoveToJQTModal}
        designStockForCart={designStockForCart}

        /* ===== MoveToModal ===== */
        moveToModal={moveToModal}
        setMoveToModal={setMoveToModal}

        /* ===== SyncStockModal ===== */
        syncStockModal={syncStockModal}
        setSyncStockModal={setSyncStockModal}
        syncStockVoucherHeaderOptions={syncStockVoucherHeaderOptions}
        setSyncStockVoucherHeaderOptions={setSyncStockVoucherHeaderOptions}
        syncStockList={syncStockList}
        selectedScope={selectedScope}

        /* ===== RefreshRateSidebar ===== */
        refreshRateSidebar={refreshRateSidebar}
        setRefreshRateSidebar={setRefreshRateSidebar}
        postRefreshRate={postRefreshRate}

        /* ===== UserProfileSidebar ===== */
        userDefaultSidebar={userDefaultSidebar}
        postUserDefaultData={postUserDefaultData}
        deleteCs={deleteCs}
        profileCurrency={profileCurrency}
        profileLanguage={profileLanguage}
        setProfileCurrency={setProfileCurrency}
        setProfileLanguage={setProfileLanguage}

        /* ===== Common ===== */
        handleApplyFilters={handleApplyFilters}
        handleResetInputs={handleResetInputs}
        getList={getList}

        printOptions={printOptions}

        getProductDesignOptions={getProductDesignOptions}
        getGradeChangeParamsList={getGradeChangeParamsList}
        getDiamondChangeParamsList={getDiamondChangeParamsList}
        getColorStoneChangeParamsList={getColorStoneChangeParamsList}
      />
    </div>
  );
};

export default FixedFiltersLayout;
