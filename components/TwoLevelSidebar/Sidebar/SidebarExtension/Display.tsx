import { useState } from 'react';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';
import ReactSelectDropdown from './ReactSelectDropdown';
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
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const handleReset = () => {
    setDisplayQualityTags([]);
    setSortByTags([]);
    setSortOrder(null);
  };

  return (
    <>
      <div className={styles.wrapper} style={{ width: '83%' }}>
        <ReactSelectDropdown
          label="Display Quality"
          options={displayQualityList}
          value={displayQualityTags}
          placeholder="Select or Search"
          onChange={setDisplayQualityTags}
        />

        <ReactSelectDropdown
          label="Sort By"
          options={sortByList}
          value={sortByTags}
          placeholder="Select or Search"
          onChange={setSortByTags}
        />
      </div>

      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() =>
          handleAcceptIndivisualFilter({
            displayQualityTags,
            sortByTags,
          })
        }
        handleReset={handleReset}
      />
    </>
  );
}

export default Display;
