import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';
import ReactMultiselectDropdown from './ReactMultiselectDropdown';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

type Option = {
  label: string;
  value: string | number;
};

function Display({
  displayQualityList,
  sortByList,
  displayQualityTags,
  setDisplayQualityTags,
  sortByTags,
  setSortByTags,
  handleAcceptIndivisualFilter,
}: any) {
  return (
    <>
      <div className={styles.wrapper} style={{ width: '83%' }}>
        <ReactMultiselectDropdown
          label="Display Quality"
          options={displayQualityList}
          value={displayQualityTags}
          placeholder="Select one or more"
          onChange={setDisplayQualityTags}
        />
        <ReactMultiselectDropdown
          label="Sort By"
          options={sortByList}
          value={sortByTags}
          placeholder="Select one or more"
          onChange={setSortByTags}
        />
        <div className={styles.section}>
          <div className="custom-radio">
            <input type="radio" id="ascending" name="sortOrder" value="asc" />
            <label htmlFor="ascending" style={{ marginLeft: '12px', fontSize: '14px' }}>
              Ascending Order
            </label>
          </div>
          <div className="custom-radio">
            <input type="radio" id="descending" name="sortOrder" value="desc" />
            <label htmlFor="descending" style={{ marginLeft: '12px', fontSize: '14px' }}>
              Descending Order
            </label>
          </div>
        </div>
      </div>

      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() => handleAcceptIndivisualFilter({ displayQuality: displayQualityTags })}
      />
    </>
  );
}

export default Display;
