import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';
import ReactSelectDropdown from './ReactSelectDropdown';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

type Option = {
  label: string;
  value: string;
};

function Analysis({
  inspirationList,
  verticalList,
  targetList,
  collectionList,
  targetTags,
  setTargetTags,
  collectionTags,
  setCollectionTags,
  inspirationTags,
  setInspirationTags,
  verticalTags,
  setVerticalTags,
  handleAcceptIndivisualFilter,
}: any) {
  const handleReset = () => {
    setTargetTags(null);
    setCollectionTags(null);
    setInspirationTags(null);
    setVerticalTags(null);
  };

  return (
    <div className=' d-flex flex-column justify-content-between h-100' >
      <div className={styles.wrapper}>
        <ReactSelectDropdown
          label="Target Show"
          options={targetList}
          value={targetTags}
          placeholder="Select or Search"
          onChange={setTargetTags}
        />

        <ReactSelectDropdown
          label="Collection"
          options={collectionList}
          value={collectionTags}
          placeholder="Select or Search"
          onChange={setCollectionTags}
        />

        <ReactSelectDropdown
          label="Inspiration"
          options={inspirationList}
          value={inspirationTags}
          placeholder="Select or Search"
          onChange={setInspirationTags}
        />

        <ReactSelectDropdown
          label="Vertical"
          options={verticalList}
          value={verticalTags}
          placeholder="Select or Search"
          onChange={setVerticalTags}
        />
      </div>

      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() =>
          handleAcceptIndivisualFilter({
            targetTags,
            collectionTags,
            inspiration: inspirationTags,
            vertical: verticalTags,
          })
        }
        handleReset={handleReset}
      />
    </div>
  );
}

export default Analysis;
