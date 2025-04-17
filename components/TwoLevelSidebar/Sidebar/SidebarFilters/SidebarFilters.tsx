import { GoDotFill } from 'react-icons/go';
import styles from '../../../../styles/components/twoLevelSidebar.module.scss';

interface SidebarFilterProps {
  isSidebarVisible: boolean;
  openSidebar: (value: string | null) => void;
  filters: any;
  handleApplyFilters: () => void;
}

function SidebarFilters({ isSidebarVisible, openSidebar, filters, handleApplyFilters }: SidebarFilterProps) {
  return (
    <div className="pt-4 px-2">
      <div className={styles.filter_container}>
        <p className="uppercase text-brown flex mt-3 m-0">
          <span className=" pr-2">
            <GoDotFill />
          </span>
          <span className="text-base">Database</span>
        </p>
        <hr className="text-brown m-0 mt-2" />

        <div style={{ display: 'flex', gap: '0.2rem', flexDirection: 'column', marginTop: '0.5rem', fontSize: '14px' }}>
          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Work Scope')}>
            Work Scope
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Customer')}>
            Customer
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Source')}>
            Source
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Category')}>
            Category
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Price & Weight')}>
            Price & Weight
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Analysis')}>
            Analysis
          </p>

          <p className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar('Display Options')}>
            Display Options
          </p>
        </div>
      </div>

      <div className="pl-10">
        <button className={`px-3 py-2 border border-1 rounded cursor-pointer bg-brown text-white`} onClick={handleApplyFilters}>
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default SidebarFilters;
