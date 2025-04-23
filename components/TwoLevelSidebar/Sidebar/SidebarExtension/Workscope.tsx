import ReactSelectDropdown from './ReactSelectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

function WorkScope({ workScopeList, selectedScope, setSelectedScope, handleAcceptIndivisualFilter }: any) {
  const handleReset = () => {
    setSelectedScope(null);
  };

  return (
    <>
      <div className="w-10" style={{ width: '83%' }}>
        <ReactSelectDropdown label="Scope" options={workScopeList} value={selectedScope} placeholder="Select" onChange={setSelectedScope} />
      </div>
      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() =>
          handleAcceptIndivisualFilter({
            selectedScope,
          })
        }
        handleReset={handleReset}
      />
    </>
  );
}

export default WorkScope;
