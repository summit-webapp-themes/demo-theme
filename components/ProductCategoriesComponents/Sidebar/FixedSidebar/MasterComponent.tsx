import TwoLevelSidebar from '../../../TwoLevelSidebar/Sidebar/SidebarMaster';
const MasterComponent = ({ getProductsData }: any) => {
  return (
    <>
      <TwoLevelSidebar getProductsData={getProductsData} />
    </>
  );
};

export default MasterComponent;
