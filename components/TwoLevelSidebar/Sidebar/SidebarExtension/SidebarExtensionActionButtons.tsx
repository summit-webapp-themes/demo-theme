function SidebarExtensionActionButtons({
  handleAcceptIndivisualFilter,
  handleReset,
}: {
  handleAcceptIndivisualFilter: () => void;
  handleReset: () => void;
}) {
  return (
    <div className="w-full">
      <div className="d-flex justify-content-end gap-5 mt-5">
        <button
          className="px-3 py-2 border rounded cursor-pointer bg-brown text-white"
          onClick={handleAcceptIndivisualFilter}
          style={{ fontSize: '14px', fontWeight: '500' }}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default SidebarExtensionActionButtons;
