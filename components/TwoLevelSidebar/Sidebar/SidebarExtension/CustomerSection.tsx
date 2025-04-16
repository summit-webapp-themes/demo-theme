import ReactSelectDropdown from './ReactSelectDropdown';
import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';

interface Customercode {
  CmCd: string;
  CmName: string | number;
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
  return (
    <>
      <div className="w-10" style={{ width: '83%' }}>
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
      />
    </>
  );
}

export default CustomerSection;
