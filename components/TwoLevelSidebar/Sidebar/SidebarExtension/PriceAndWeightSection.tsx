import ReactMultiselectDropdown from './ReactMultiselectDropdown';
import ReactSelectDropdown from './ReactSelectDropdown';
import InputRange from './InputRange';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

function PriceAndWeightSection({
  designColourTags,
  designColorList,
  setDesignColourTags,
  priceRange,
  setPriceRange,
  diamondCtsRange,
  setDiamondCtsRange,
  grossWtRange,
  setGrossWtRange,
  handleAcceptIndivisualFilter,
  selectedColorStone,
  setSelectedColorStone,
}: any) {
  const handleReset = () => {
    setPriceRange([0, 0]);
    setDiamondCtsRange([0, 0]);
    setGrossWtRange([0, 0]);
    setSelectedColorStone(null);
    setDesignColourTags([]);
  };

  return (
    <div style={{ overflowY: 'auto', maxHeight: '70vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '83%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <InputRange title="Price Range" unit="₹" value={priceRange} setValue={setPriceRange} />
          <InputRange title="Diamond Cts" unit="" value={diamondCtsRange} setValue={setDiamondCtsRange} />
          <InputRange title="Gross Wt" unit="g" value={grossWtRange} setValue={setGrossWtRange} />
        </div>

        <ReactSelectDropdown
          label="Colour Stone"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          value={selectedColorStone}
          placeholder="Search or select"
          onChange={setSelectedColorStone}
        />

        <ReactMultiselectDropdown
          label="Design Color"
          options={designColorList}
          value={designColourTags}
          placeholder="Select one or more"
          onChange={setDesignColourTags}
        />

        <SidebarExtensionActionButtons
          handleAcceptIndivisualFilter={() =>
            handleAcceptIndivisualFilter({
              priceRange,
              diamond: diamondCtsRange,
              grossWtRange,
              colorStone: selectedColorStone,
              designColor: designColourTags,
            })
          }
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default PriceAndWeightSection;
