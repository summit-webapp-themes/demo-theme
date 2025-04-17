'use client';
import { useState } from 'react';
import useFiltersHook from '../../../hooks/TwoLevelSidebarHook/useTwoLevelSidebar';
import SidebarExtensionMaster from './SidebarExtension/SidebarExtensionMaster';
import SidebarFilters from './SidebarFilters/SidebarFilters';
import SidebarHeader from './SidebarHeader';
import FilterSummary from './FilterSummary';

function SidebarMaster() {
  const {
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
    statusTags,
    setStatusTags,
    originTags,
    setOriginTags,
    typeTags,
    setTypeTags,
    statusList,
    originList,
    typeList,
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
    setDesignColourTags,
    setBagNumberTags,
    setStyleCodeTags,
    setSortByTags,
    setDisplayQualityTags,
    setDesignColorList,
    setGrossWtRange,
    setDiamondCtsRange,
    setPriceRange,
    selectedColorStone,
    setSelectedColorStone,
    inspirationList,
    targetList,
    collectionList,
    verticalList,
    workScopeList,
    selectedScope,
    setSelectedScope,
  }: any = useFiltersHook();

  console.log('filters', filters);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="sidebar-container">
        <div className="p-4">
          <SidebarHeader />
          <SidebarFilters isSidebarVisible={isSidebarVisible} openSidebar={openSidebar} filters={filters} setShowFilters={setShowFilters} />
          {/* {showFilters && filters && <FilterSummary filters={filters} />} */}
          {showFilters && filters?.selectedScope?.value === 'Current Session' && <FilterSummary filters={filters} />}
        </div>
      </div>

      <SidebarExtensionMaster
        workScopeList={workScopeList}
        selectedScope={selectedScope}
        setSelectedScope={setSelectedScope}
        visible={isSidebarVisible}
        selectedFilter={selectedFilter}
        selectedCustomerCode={selectedCustomerCode}
        setSelectedCustomerCode={setSelectedCustomerCode}
        customerCodeList={customerCodeList}
        statusList={statusList}
        originList={originList}
        typeList={typeList}
        inspirationList={inspirationList}
        targetList={targetList}
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
      />
    </>
  );
}

export default SidebarMaster;
