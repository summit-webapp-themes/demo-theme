function SidebarExtensionActionButtons({ handleAcceptIndivisualFilter }: any) {
  return (
    <div className="w-full">
      <div className="d-flex justify-content-end gap-5 mt-5">
        <div className="text-sm text-decoration-underline d-flex align-items-center fw-bold cursor-pointer">Reset</div>
        <button className={`px-5 py-2 border rounded cursor-pointer bg-brown text-white`} onClick={handleAcceptIndivisualFilter}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default SidebarExtensionActionButtons;
