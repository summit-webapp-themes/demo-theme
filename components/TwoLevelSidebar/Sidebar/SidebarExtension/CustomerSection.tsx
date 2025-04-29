import ReactSelectDropdown from './ReactSelectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

interface Customercode {
  label: string;
  value: string | number;
}

interface CustomerSectionProps {
  customerCodeList: Customercode[];
  selectedCustomerCode: any;
  setSelectedCustomerCode: any;
  handleAcceptIndivisualFilter: (value: any) => void;
}

function CustomerSection({
  customerCodeList,
  selectedCustomerCode,
  setSelectedCustomerCode,
  handleAcceptIndivisualFilter,
}: CustomerSectionProps) {
  const handleReset = () => {
    setSelectedCustomerCode(null);
  };

  return (
    <div className=' d-flex flex-column justify-content-between h-100'>
      <div className="w-100">
        <ReactSelectDropdown
          label="Customer Code"
          options={customerCodeList}
          value={selectedCustomerCode}
          placeholder="Search or select"
          onChange={setSelectedCustomerCode}
        />
      </div>

      <SidebarExtensionActionButtons
        handleAcceptIndivisualFilter={() => handleAcceptIndivisualFilter({ customer: selectedCustomerCode })}
        handleReset={handleReset}
      />
    </div>
  );
}

export default CustomerSection;
