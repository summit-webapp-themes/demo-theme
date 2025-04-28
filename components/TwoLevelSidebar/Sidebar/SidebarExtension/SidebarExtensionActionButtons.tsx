import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

function SidebarExtensionActionButtons({
  handleAcceptIndivisualFilter,
  handleReset,
}: {
  handleAcceptIndivisualFilter: () => void;
  handleReset: () => void;
}) {
  return (
    <div className="w-100 mt-2">
      <button
        className={`px-3 py-1 rounded cursor-pointer fs-14 fw-medium bg-white w-100 text-brown text-white ${styles.sidebarExtenstionSaveButton}`}
        onClick={handleAcceptIndivisualFilter}
      >
        Save & Continue
      </button>
    </div>
  );
}

export default SidebarExtensionActionButtons;
