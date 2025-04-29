'use client';
import ReactMultiselectDropdown from './ReactMultiselectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss'

function CategorySection({ designList, salesList, designTags, setDesignTags, salesTags, setSalesTags, handleAcceptIndivisualFilter }: any) {
  const handleReset = () => {
    setDesignTags([]);
    setSalesTags([]);
  };
  return (
    <div className=' d-flex flex-column justify-content-between h-100'>
      <div className={`overflow-y-scroll w-100 h-100 ${styles.hide_scrollbar}`} >
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
        handleAcceptIndivisualFilter={() => handleAcceptIndivisualFilter({ designCategory: designTags, salesCategory: salesTags })}
        handleReset={handleReset}
      />
    </div>
  );
}

export default CategorySection;
