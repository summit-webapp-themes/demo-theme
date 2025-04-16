'use client';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CategorySection from './CategorySection';
import CustomerSection from './CustomerSection';
import Display from './Display';
import PriceAndWeightSection from './PriceAndWeightSection';
import SourceSection from './SourceSection/SourceSection';

function SidebarExtensionMaster({
  visible,
  selectedFilter,
  statusList,
  originList,
  typeList,
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
}: any) {
  return (
    <Offcanvas show={visible} onHide={closeSidebar}>
      <Offcanvas.Header closeButton className="p-0 px-4 pt-5 mt-2">
        <Offcanvas.Title className="text-brown">{selectedFilter}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-4">
        <hr className="m-0" />
        <div className="py-4">
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
