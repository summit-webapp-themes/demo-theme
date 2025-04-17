import SidebarExtensionActionButtons from '../SidebarExtensionActionButtons';
import DesignBank from './DesignBank';

import ReactSelectDropdown from '../ReactSelectDropdown';
import ReactMultiselectDropdown from '../ReactMultiselectDropdown';

function SourceSection({
  handleAcceptIndivisualFilter,
  statusList,
  originList,
  typeList,
  originTags,
  setOriginTags,
  typeTags,
  setTypeTags,
  sourceTypeList,
  selectedSourceType,
  setSelectedSourceType,
  statusTags,
  setStatusTags,
}: any) {
  const handleReset = () => {
    setOriginTags([]);
    setTypeTags([]);
    setStatusTags([]);
    setSelectedSourceType(null);
  };
  const renderFieldsBasedOnSourceType = () => {
    if (selectedSourceType?.value === 'DB') {
      return (
        <>
          {/* <ReactMultiselectDropdown
            label="Design Bank"
            options={statusList}
            value={statusTags}
            placeholder="Select one or more"
            onChange={setStatusTags}
          /> */}
          {/* <DesignBank data={sourceTypeList} /> */}
        </>
      );
    }
    if (selectedSourceType?.value === 'stock') {
      return (
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', marginTop: '12px' }}>
          <ReactMultiselectDropdown
            label="Status"
            options={statusList}
            value={statusTags}
            placeholder="Select one or more"
            onChange={setStatusTags}
          />
          <ReactMultiselectDropdown
            label="Origin"
            options={originList}
            value={originTags}
            placeholder="Select one or more"
            onChange={setOriginTags}
          />
          <ReactMultiselectDropdown
            label="Type"
            options={typeList}
            value={typeTags}
            placeholder="Select one or more"
            onChange={setTypeTags}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div style={{ width: '83%' }}>
        <ReactSelectDropdown
          label="Source Type"
          options={sourceTypeList}
          value={selectedSourceType}
          placeholder="Search or select"
          onChange={setSelectedSourceType}
        />
        <div>{renderFieldsBasedOnSourceType()}</div>
      </div>
      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() => handleAcceptIndivisualFilter({ source: selectedSourceType })}
        handleReset={handleReset}
      />
    </>
  );
}

export default SourceSection;
