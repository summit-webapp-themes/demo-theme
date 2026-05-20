import React from 'react';
import { useDispatch } from 'react-redux';
import MetalRateSidebar from '../../../addon-components/KCTopFilterSection/MetalRateSidebar';
import CustomiseSidebar from '../../../addon-components/KCTopFilterSection/CustomiseSidebar';
import MoveToSidebarWrapper from '../../../addon-components/KCTopFilterSection/MoveToSidebarWrapper';
import DesignStockForCart from '../../../addon-components/KCTopFilterSection/DesignStockForCart';
import MoveToModal from '../../../addon-components/KCTopFilterSection/MoveToModal';
import SyncStockModal from '../../../addon-components/KCTopFilterSection/SyncStockModal';
import RefreshRateSidebar from '../../../addon-components/KCTopFilterSection/RefreshRateSidebar';
import UserProfileSidebar from '../../../addon-components/KCTopFilterSection/UserProfileSidebar';
import { setMetalRateSidebar, setSelectAllProducts, setUserDefaultSidebar } from '../../../../store/slices/general_slices/kc-slice';
import { Option } from '../../../../store/slices/general_slices/multilingual-slice';
import { getProductDesignOptions } from '../../../../services/addon-services/api/emr-api\'s/product-api\'s/get-product-list-api';

type Props = {
  metalRateSidebar: boolean;
  moveToSidebar: boolean;
  setMoveToSidebar: (v: boolean) => void;
  setSelectedVoucherMode: any;
  handleClose: () => void;
  selectedCustomerCode: any;
  voucherTypeList: any;
  selectedVoucherType: any;
  selectedModalVoucherType: any;
  setSelectedModalVoucherType: any;
  selectedVoucherMode: any;
  modalVoucherNo: any;
  setModalVoucherNo: any;
  createVoucherAPI: any;
  copyStockDesigns: any;
  actionBtnLoader: boolean;
  stockCartBtnLoader: boolean;
  createOrderAPI: any;
  selectedProducts: any[];
  setSelectedProducts: any;
  handleApplyFilters: any;
  currentScope: string;
  setMoveToModal: (v: boolean) => void;
  blockStockDesigns: any;
  selectedStockType: any;
  getVoucherHeaderDetails: any;
  modalVoucherHeaderOptions: any;
  setModalVoucherHeaderOptions: any;
  rateLookUpList: any;
  metLookUpList: any;
  labLookUpList: any;
  defaultRateLookUpValues: any;
  rmRate: any;
  setRmRate: any;
  labRate: any;
  setLabRate: any;
  metalLoss: any;
  setMetalLoss: any;
  jmvOdChr: any;
  setJmvOdChr: any;
  checkDesignStockForCart: any;
  confirmationOptions: any;
  voucherOdNoRange: any;
  setVoucherOdNoRange: any;
  copyWithRate: any;
  setCopyWithRate: any;
  rmCategory: any;
  setRmCategory: any;
  copyLabRate: any;
  setCopyLabRate: any;
  rmDate: any;
  setRmDate: any;
  handleResetInputs: () => void;
  getList: any;
  sidebarGoldRate: number;
  setSidebarGoldRate: any;
  sidebarPlatinumRate: number;
  setSidebarPlatinumRate: any;
  sidebarPalladiumRate: number;
  setSidebarPalladiumRate: any;
  sidebarSilverRate: number;
  setSidebarSilverRate: any;
  selectedCartType: any;
  setSelectedCartType: any;
  sidebarCustomer: any;
  setSidebarCustomer: any;
  customerCodeList: any;
  userDefaultData: any;
  refreshFrom: any;
  setRefreshFrom: any;
  refreshFromOptions: any;
  getVoucherCompanyCode: any;
  getRateLookUp: any;
  moveToVoucherTypesMap: any;
  fetchLocationsList: any;
  locationList: any;
  moveToInputsMap: any;
  setMoveToInputsMap: any;
  customiseSidebar: boolean;
  setCustomiseSidebar: (v: boolean) => void;
  handlePriceRefresh: any;
  hideFiltersOnFirstLoad: boolean;
  goldRate: number;
  platinumRate: number;
  palladiumRate: number;
  silverRate: number;
  attributesData: any;
  setUpdatedCount: any;
  updatedCount: number;
  progressPercent: number;
  startProgress: (total: number) => void;
  stopProgress: (total: number) => void;
  progressRef: React.MutableRefObject<NodeJS.Timeout | null>;
  totalProducts: number;
  showMoveToJQTModal: boolean;
  setShowMoveToJQTModal: (v: boolean) => void;
  designStockForCart: any;
  moveToModal: boolean;
  syncStockModal: boolean;
  setSyncStockModal: (v: boolean) => void;
  syncStockVoucherHeaderOptions: any;
  setSyncStockVoucherHeaderOptions: any;
  syncStockList: any;
  selectedScope: any;
  refreshRateSidebar: boolean;
  setRefreshRateSidebar: (v: boolean) => void;
  rmCategoryList: any;
  postRefreshRate: any;
  postUserDefaultData: any;
  deleteCs: any;
  profileCurrency: any;
  profileLanguage: any;
  setProfileCurrency: any;
  setProfileLanguage: any;
  setGoldRate: any;
  setPlatinumRate: any;
  setPalladiumRate: any;
  setSilverRate: any;
  voucherMode: any;
  userDefaultSidebar: boolean;
  printOptions: Option[];
  getProductDesignOptions: any;
  getGradeChangeParamsList: any;
  getDiamondChangeParamsList: any;
  getColorStoneChangeParamsList: any;
};

export default function FallbackLayoutModals(p: Props) {
  const dispatch = useDispatch();
  return (
    <>
      <MetalRateSidebar
        showSidebar={p.metalRateSidebar}
        setShowSidebar={(v: boolean) => dispatch(setMetalRateSidebar(v))}
        handleApplyFilters={p.handleApplyFilters}
        goldRate={p.goldRate}
        setGoldRate={p.setGoldRate}
        platinumRate={p.platinumRate}
        setPlatinumRate={p.setPlatinumRate}
        palladiumRate={p.palladiumRate}
        setPalladiumRate={p.setPalladiumRate}
        silverRate={p.silverRate}
        setSilverRate={p.setSilverRate}
      />
      <MoveToSidebarWrapper
        moveToSidebar={p.moveToSidebar}
        setMoveToSidebar={(v: boolean) => {
          p.setMoveToSidebar(v);
          p.setSelectedVoucherMode({ label: 'New', value: 'new' });
        }}
        handleClose={p.handleClose}
        selectedCustomerCode={p.selectedCustomerCode}
        voucherType={p.voucherTypeList}
        selectedVoucherType={p.selectedVoucherType}
        selectedModalVoucherType={p.selectedModalVoucherType}
        setSelectedModalVoucherType={p.setSelectedModalVoucherType}
        voucherMode={p.voucherMode}
        selectedVoucherMode={p.selectedVoucherMode}
        setSelectedVoucherMode={p.setSelectedVoucherMode}
        voucherNo={p.modalVoucherNo}
        setVoucherNo={p.setModalVoucherNo}
        createVoucherAPI={p.createVoucherAPI}
        copyStockDesigns={p.copyStockDesigns}
        actionBtnLoader={p.actionBtnLoader}
        stockCartBtnLoader={p.stockCartBtnLoader}
        createOrderAPI={p.createOrderAPI}
        selectedProducts={p.selectedProducts}
        setSelectedProducts={p.setSelectedProducts}
        handleApplyFilters={p.handleApplyFilters}
        activeScope={p.currentScope}
        setMoveToModal={p.setMoveToModal}
        blockStockDesigns={p.blockStockDesigns}
        selectedStockType={p.selectedStockType}
        getVoucherHeaderDetails={p.getVoucherHeaderDetails}
        voucherHeaderOptions={p.modalVoucherHeaderOptions}
        setVoucherHeaderOptions={p.setModalVoucherHeaderOptions}
        rateLookUpList={p.rateLookUpList}
        metLookUpList={p.metLookUpList}
        labLookUpList={p.labLookUpList}
        defaultRateLookUpValues={p.defaultRateLookUpValues}
        rmRate={p.rmRate}
        setRmRate={p.setRmRate}
        labRate={p.labRate}
        setLabRate={p.setLabRate}
        metalLoss={p.metalLoss}
        setMetalLoss={p.setMetalLoss}
        jmvOdChr={p.jmvOdChr}
        setJmvOdChr={p.setJmvOdChr}
        setShowMoveToJQTModal={p.setShowMoveToJQTModal}
        checkDesignStockForCart={p.checkDesignStockForCart}
        confirmationOptions={p.confirmationOptions}
        voucherOdNoRange={p.voucherOdNoRange}
        setVoucherOdNoRange={p.setVoucherOdNoRange}
        rmCategoryList={p.rmCategoryList}
        copyWithRate={p.copyWithRate}
        setCopyWithRate={p.setCopyWithRate}
        rmCategory={p.rmCategory}
        setRmCategory={p.setRmCategory}
        copyLabRate={p.copyLabRate}
        setCopyLabRate={p.setCopyLabRate}
        rmDate={p.rmDate}
        setRmDate={p.setRmDate}
        handleResetInputs={p.handleResetInputs}
        getList={p.getList}
        sidebarGoldRate={p.sidebarGoldRate}
        setSidebarGoldRate={p.setSidebarGoldRate}
        sidebarPlatinumRate={p.sidebarPlatinumRate}
        setSidebarPlatinumRate={p.setSidebarPlatinumRate}
        sidebarPalladiumRate={p.sidebarPalladiumRate}
        setSidebarPalladiumRate={p.setSidebarPalladiumRate}
        sidebarSilverRate={p.sidebarSilverRate}
        setSidebarSilverRate={p.setSidebarSilverRate}
        selectedCartType={p.selectedCartType}
        setSelectedCartType={p.setSelectedCartType}
        sidebarCustomer={p.sidebarCustomer}
        setSidebarCustomer={p.setSidebarCustomer}
        customerCodeList={p.customerCodeList}
        userDefaultData={p.userDefaultData}
        refreshFrom={p.refreshFrom}
        setRefreshFrom={p.setRefreshFrom}
        refreshFromOptions={p.refreshFromOptions}
        setSelectAllProducts={(v: boolean) => dispatch(setSelectAllProducts(v))}
        getVoucherCompanyCode={p.getVoucherCompanyCode}
        getRateLookUp={p.getRateLookUp}
        moveToVoucherTypesMap={p.moveToVoucherTypesMap}
        fetchLocationsList={p.fetchLocationsList}
        locationList={p.locationList}
        moveToInputsMap={p.moveToInputsMap}
        setMoveToInputsMap={p.setMoveToInputsMap}
      />
      {p.customiseSidebar && (
        <CustomiseSidebar
          showSidebar={p.customiseSidebar}
          setShowSidebar={(v: boolean) => p.setCustomiseSidebar(v)}
          activeScope={p.currentScope}
          selectedCustomerCode={p.selectedCustomerCode}
          selectedProducts={p.selectedProducts}
          handlePriceRefresh={p.handlePriceRefresh}
          hideFiltersOnFirstLoad={p.hideFiltersOnFirstLoad}
          goldRate={p.goldRate}
          platinumRate={p.platinumRate}
          palladiumRate={p.palladiumRate}
          silverRate={p.silverRate}
          attributesData={p.attributesData}
          setSelectedProducts={p.setSelectedProducts}
          handleApplyFilters={p.handleApplyFilters}
          updatedCount={p.updatedCount}
          setUpdatedCount={p.setUpdatedCount}
          progress={p.progressPercent}
          startProgress={p.startProgress}
          stopProgress={p.stopProgress}
          progressRef={p.progressRef}
          totalProducts={p.totalProducts}
          getProductDesignOptions={p.getProductDesignOptions}
          getGradeChangeParamsList={p.getGradeChangeParamsList}
          getDiamondChangeParamsList={p.getDiamondChangeParamsList}
          getColorStoneChangeParamsList={p.getColorStoneChangeParamsList}
        />
      )}
      <DesignStockForCart
        showModal={p.showMoveToJQTModal}
        setShowModal={(v: boolean) => p.setShowMoveToJQTModal(v)}
        selectedProducts={p.selectedProducts}
        setSelectedProducts={p.setSelectedProducts}
        designStockForCart={p.designStockForCart}
        selectedCustomerCode={p.selectedCustomerCode}
        copyStockDesigns={p.copyStockDesigns}
        handleApplyFilters={p.handleApplyFilters}
        rmRate={p.rmRate}
        setRmRate={p.setRmRate}
        labRate={p.labRate}
        setLabRate={p.setLabRate}
        metalLoss={p.metalLoss}
        setMetalLoss={p.setMetalLoss}
        rateLookUpList={p.rateLookUpList}
        metLookUpList={p.metLookUpList}
        labLookUpList={p.labLookUpList}
        setJmvOdChr={p.setJmvOdChr}
        setMoveToModal={p.setMoveToModal}
        setMoveToSidebar={p.setMoveToSidebar}
        handleClose={p.handleClose}
        setVoucherNo={p.setModalVoucherNo}
        copyWithRate={p.copyWithRate}
        rmCategory={p.rmCategory}
        copyLabRate={p.copyLabRate}
        rmDate={p.rmDate}
        selectedVoucherMode={p.selectedVoucherMode}
        voucherNo={p.modalVoucherNo}
        setSelectAllProducts={(v: boolean) => dispatch(setSelectAllProducts(v))}
      />
      <MoveToModal
        moveToModal={p.moveToModal}
        setMoveToModal={(v: boolean) => p.setMoveToModal(v)}
        handleClose={p.handleClose}
        voucherType={(p.currentScope === 'PDCM Design Bank' || p.currentScope === 'Stock') ? p.selectedCartType : p.selectedModalVoucherType}
        voucherMode={p.selectedVoucherMode?.value}
        voucherNo={p.modalVoucherNo}
        handleApplyFilters={p.handleApplyFilters}
        voucherOdNoRange={p.voucherOdNoRange}
        setVoucherOdNoRange={p.setVoucherOdNoRange}
        handleResetInputs={p.handleResetInputs}
        selectedCustomerCode={p.selectedCustomerCode}
        sidebarCustomer={p.sidebarCustomer}
        printOptions={p.printOptions}
      />
      {p.syncStockModal && (
        <SyncStockModal
          syncStockModal={p.syncStockModal}
          setSyncStockModal={p.setSyncStockModal}
          voucherHeaderOptions={p.syncStockVoucherHeaderOptions}
          setVoucherHeaderOptions={p.setSyncStockVoucherHeaderOptions}
          getVoucherCompanyCode={p.getVoucherCompanyCode}
          getVoucherHeaderDetails={p.getVoucherHeaderDetails}
          syncStockList={p.syncStockList}
          handleApplyFilters={p.handleApplyFilters}
          selectedScope={p.selectedScope}
          selectedCustomerCode={p.selectedCustomerCode}
        />
      )}
      <RefreshRateSidebar
        open={p.refreshRateSidebar}
        setOpen={(v: boolean) => p.setRefreshRateSidebar(v)}
        copyWithRate={p.copyWithRate}
        setCopyWithRate={p.setCopyWithRate}
        rmCategory={p.rmCategory}
        setRmCategory={p.setRmCategory}
        copyLabRate={p.copyLabRate}
        setCopyLabRate={p.setCopyLabRate}
        rmDate={p.rmDate}
        setRmDate={p.setRmDate}
        confirmationOptions={p.confirmationOptions}
        rmCategoryList={p.rmCategoryList}
        postRefreshRate={p.postRefreshRate}
        btnLoader={p.actionBtnLoader}
        selectedProducts={p.selectedProducts}
        selectedCustomerCode={p.selectedCustomerCode}
        handleApplyFilters={p.handleApplyFilters}
        sidebarGoldRate={p.sidebarGoldRate}
        setSidebarGoldRate={p.setSidebarGoldRate}
        sidebarPlatinumRate={p.sidebarPlatinumRate}
        setSidebarPlatinumRate={p.setSidebarPlatinumRate}
        sidebarPalladiumRate={p.sidebarPalladiumRate}
        setSidebarPalladiumRate={p.setSidebarPalladiumRate}
        sidebarSilverRate={p.sidebarSilverRate}
        setSidebarSilverRate={p.setSidebarSilverRate}
        updatedCount={p.updatedCount}
        setUpdatedCount={p.setUpdatedCount}
        progress={p.progressPercent}
        startProgress={p.startProgress}
        stopProgress={p.stopProgress}
        progressRef={p.progressRef}
        totalProducts={p.totalProducts}
        refreshFrom={p.refreshFrom}
        setRefreshFrom={p.setRefreshFrom}
        refreshFromOptions={p.refreshFromOptions}
        getRateLookUp={p.getRateLookUp}
      />
      <UserProfileSidebar
        open={p.userDefaultSidebar}
        setOpen={(v: boolean) => dispatch(setUserDefaultSidebar(v))}
        copyWithRate={p.copyWithRate}
        setCopyWithRate={p.setCopyWithRate}
        rmCategory={p.rmCategory}
        setRmCategory={p.setRmCategory}
        copyLabRate={p.copyLabRate}
        setCopyLabRate={p.setCopyLabRate}
        rmDate={p.rmDate}
        setRmDate={p.setRmDate}
        confirmationOptions={p.confirmationOptions}
        rmCategoryList={p.rmCategoryList}
        postUserDefaultData={p.postUserDefaultData}
        btnLoader={p.actionBtnLoader}
        selectedProducts={p.selectedProducts}
        selectedCustomerCode={p.selectedCustomerCode}
        deleteCs={p.deleteCs}
        profileCurrency={p.profileCurrency}
        profileLanguage={p.profileLanguage}
        setProfileCurrency={p.setProfileCurrency}
        setProfileLanguage={p.setProfileLanguage}
        selectedVoucherMode={p.selectedVoucherMode}
        setSelectedVoucherMode={p.setSelectedVoucherMode}
        voucherMode={p.voucherMode}
      />
    </>
  );
}
