import FilterSummary from '../FilterSummary';
import ReactSelectDropdown from './ReactSelectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

function WorkScope({ workScopeList, selectedScope, setSelectedScope, handleAcceptIndivisualFilter, filters, showFilters }: any) {
  const handleReset = () => {
    setSelectedScope(null);
  };

  return (
    <div className=" d-flex flex-column justify-content-between h-100">
      <div className="w-100">
        <ReactSelectDropdown label="Scope" options={workScopeList} value={selectedScope} placeholder="Select" onChange={setSelectedScope} />
        {showFilters && (
          <div className="mt-4 h-100">
            <p className="m-0 fs-14" style={{ color: '#2B2B2B80' }}>
              Applied Filters
            </p>
            <FilterSummary filters={filters} />
          </div>
        )}
      </div>
      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() =>
          handleAcceptIndivisualFilter({
            selectedScope,
          })
        }
        handleReset={handleReset}
      />
    </div>
  );
}

export default WorkScope;
