import styles from '../../../../styles/components/twoLevelSidebar.module.scss';

interface SidebarFilterProps {
  isSidebarVisible: boolean;
  openSidebar: (value: string | null) => void;
  filters: any;
  selectedScope: { label: string; value: string } | null;
  handleApplyFilters: () => void;
}

function SidebarFilters({ isSidebarVisible, openSidebar, filters, handleApplyFilters }: SidebarFilterProps) {
  return (
    <div
      className="pt-4 px-2"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
      }}
    >
      <div className={styles.filter_container}>
        <p className="uppercase text-brown flex mt-3 m-0" style={{ display: 'flex', paddingLeft: '15px', gap: '45px' }}>
          <div className="text-base">{filters?.selectedScope?.value}</div>

          <div className="text-base" onClick={() => openSidebar('Work Scope')} style={{ cursor: 'pointer' }}>
            Edit
          </div>
        </p>

        <hr className="text-brown m-0 mt-2" />

        <div
          style={{
            display: 'flex',
            gap: '0.2rem',
            flexDirection: 'column',
            marginTop: '0.5rem',
            fontSize: '14px',
          }}
        >
          {['Customer', 'Source', 'Category', 'Price & Weight', 'Analysis', 'Display Options'].map((label) => (
            <p key={label} className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption}`} onClick={() => openSidebar(label)}>
              {label}
            </p>
          ))}
        </div>
      </div>

      <div className="pl-10" style={{ marginTop: '-2rem', marginLeft: '16px' }}>
        <button
          className={`px-3 py-2 border border-1 rounded cursor-pointer text-white`}
          disabled={isSidebarVisible}
          onClick={() => handleApplyFilters()}
          style={{
            backgroundColor: isSidebarVisible ? '#9E9FA4' : '#A69476',
            cursor: isSidebarVisible ? 'not-allowed' : 'pointer',
          }}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default SidebarFilters;
