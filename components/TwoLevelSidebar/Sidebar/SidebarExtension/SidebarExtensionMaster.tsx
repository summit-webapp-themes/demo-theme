'use client';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CategorySection from './CategorySection';
import CustomerSection from './CustomerSection';
import Display from './Display';
import PriceAndWeightSection from './PriceAndWeightSection';
import SourceSection from './SourceSection/SourceSection';
import Analysis from './Analysis';
import WorkScope from './Workscope';

function SidebarExtensionMaster({
  visible,
  selectedFilter,
  statusList,
  originList,
  typeList,
  inspirationList,
  targetList,
  collectionList,
  verticalList,
  salesCategoryList,
  designCategoryList,
  designColorList,
  displayQualityList,
  sortByList,
  handleAcceptIndivisualFilter,
  closeSidebar,
  customerCodeList,
  selectedCustomerCode,
  setSelectedCustomerCode,
  sourceTypeList,
  selectedSourceType,
  setSelectedSourceType,
  designTags,
  setDesignTags,
  salesTags,
  setSalesTags,
  displayQualityTags,
  setDisplayQualityTags,
  sortByTags,
  setSortByTags,
  styleCodeTags,
  setStyleCodeTags,
  bagNumberTags,
  setBagNumberTags,
  designColourTags,
  setDesignColourTags,
  statusTags,
  setStatusTags,
  originTags,
  setOriginTags,
  typeTags,
  setTypeTags,
  priceRange,
  setPriceRange,
  diamondCtsRange,
  setDiamondCtsRange,
  grossWtRange,
  setGrossWtRange,
  styleCodeList,
  bagNoList,
  selectedColorStone,
  setSelectedColorStone,
  collectionTags,
  setCollectionTags,
  targetTags,
  setTargetTags,
  inspirationTags,
  setInspirationTags,
  verticalTags,
  setVerticalTags,
  workScopeList,
  selectedScope,
  setSelectedScope,
  setFromDmCd,
  setToDmCd,
  filters,
  showFilters,
}: any) {
  return (
    <Offcanvas show={visible} onHide={closeSidebar}>
      <Offcanvas.Header closeButton className="" style={{ padding: '24px 36px 0px'}}>
        <Offcanvas.Title className="text-brown fw-semibold">{selectedFilter === 'Work Scope' ? 'Scope' : selectedFilter}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="overflow-y-hidden" style={{ padding: '24px 36px 0px'}}>
        <hr className="m-0" />
        <div className="py-4" style={{ height: '100%'}}>
          {selectedFilter === 'Work Scope' && (
            <WorkScope
              workScopeList={workScopeList}
              selectedScope={selectedScope}
              setSelectedScope={setSelectedScope}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
              filters={filters}
              showFilters={showFilters}
            ></WorkScope>
          )}
          {selectedFilter === 'Customer' && (
            <CustomerSection
              customerCodeList={customerCodeList}
              selectedCustomerCode={selectedCustomerCode}
              setSelectedCustomerCode={setSelectedCustomerCode}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
            />
          )}
          {selectedFilter === 'Source' && (
            <SourceSection
              sourceTypeList={sourceTypeList}
              selectedSourceType={selectedSourceType}
              setSelectedSourceType={setSelectedSourceType}
              statusList={statusList}
              originList={originList}
              typeList={typeList}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
              statusTags={statusTags}
              setStatusTags={setStatusTags}
              originTags={originTags}
              setOriginTags={setOriginTags}
              typeTags={typeTags}
              setTypeTags={setTypeTags}
              setFromDmCd={setFromDmCd}
              setToDmCd={setToDmCd}
            />
          )}
          {selectedFilter === 'Category' && (
            <CategorySection
              salesList={salesCategoryList}
              designList={designCategoryList}
              designTags={designTags}
              setDesignTags={setDesignTags}
              salesTags={salesTags}
              setSalesTags={setSalesTags}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
            />
          )}
          {selectedFilter === 'Price & Weight' && (
            <PriceAndWeightSection
              designColorList={designColorList}
              designColourTags={designColourTags}
              setDesignColourTags={setDesignColourTags}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              diamondCtsRange={diamondCtsRange}
              setDiamondCtsRange={setDiamondCtsRange}
              grossWtRange={grossWtRange}
              setGrossWtRange={setGrossWtRange}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
              selectedColorStone={selectedColorStone}
              setSelectedColorStone={setSelectedColorStone}
            />
          )}
          {selectedFilter === 'Analysis' && (
            <Analysis
              inspirationList={inspirationList}
              targetList={targetList}
              collectionList={collectionList}
              verticalList={verticalList}
              inspirationTags={inspirationTags}
              setInspirationTags={setInspirationTags}
              targetTags={targetTags}
              setTargetTags={setTargetTags}
              collectionTags={collectionTags}
              setCollectionTags={setCollectionTags}
              verticalTags={verticalTags}
              setVerticalTags={setVerticalTags}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
            ></Analysis>
          )}
          {selectedFilter === 'Display Options' && (
            <Display
              displayQualityList={displayQualityList}
              sortByList={sortByList}
              displayQualityTags={displayQualityTags}
              setDisplayQualityTags={setDisplayQualityTags}
              sortByTags={sortByTags}
              setSortByTags={setSortByTags}
              handleAcceptIndivisualFilter={handleAcceptIndivisualFilter}
            />
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SidebarExtensionMaster;
