'use client';
import useFiltersHook from '../../../hooks/TwoLevelSidebarHook/useTwoLevelSidebar';
import SidebarExtensionMaster from './SidebarExtension/SidebarExtensionMaster';
import SidebarFilters from './SidebarFilters/SidebarFilters';
import SidebarHeader from './SidebarHeader';

function SidebarMaster() {
  const {
    isSidebarVisible,
    selectedFilter,
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
  }: any = useFiltersHook();
  console.log('customerCodeList', customerCodeList);
  return (
    <>
      <div className="sidebar-container">
        <div className="p-4">
          <SidebarHeader />
          <SidebarFilters isSidebarVisible={isSidebarVisible} openSidebar={openSidebar} filters={filters} />
        </div>
      </div>

      <SidebarExtensionMaster
        visible={isSidebarVisible}
        selectedFilter={selectedFilter}
        selectedCustomerCode={selectedCustomerCode}
        setSelectedCustomerCode={setSelectedCustomerCode}
        customerCodeList={customerCodeList}
        statusList={statusList}
        originList={originList}
        typeList={typeList}
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
        // Lifted states
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
