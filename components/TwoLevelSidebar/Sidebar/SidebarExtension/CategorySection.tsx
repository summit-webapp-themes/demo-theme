'use client';
import ReactMultiselectDropdown from './ReactMultiselectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

function CategorySection({ designList, salesList, designTags, setDesignTags, salesTags, setSalesTags, handleAcceptIndivisualFilter }: any) {
  const handleReset = () => {
    setDesignTags([]);
    setSalesTags([]);
  };
  return (
    <>
      <div className="w-10" style={{ width: '83%' }}>
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <ReactMultiselectDropdown
            label="Design Category"
            options={designList}
            value={designTags}
            placeholder="Select one or more"
            onChange={setDesignTags}
          />
          <ReactMultiselectDropdown
            label="Sales Category"
            options={salesList}
            value={salesTags}
            placeholder="Select one or more"
            onChange={setSalesTags}
          />
        </div>
      </div>
      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() => handleAcceptIndivisualFilter({ category: salesTags })}
        handleReset={handleReset}
      />
    </>
  );
}

export default CategorySection;
