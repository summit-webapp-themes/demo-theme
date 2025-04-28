import styles from '../../../../styles/components/twoLevelSidebar.module.scss';

interface SidebarFilterProps {
  applyFilterBtnLoader: boolean;
  sessionLoader: boolean;
  isSidebarVisible: boolean;
  openSidebar: (value: string | null) => void;
  filters: any;
  selectedScope: { label: string; value: string } | null;
  handleApplyFilters: () => void;
  selectedFilter: string | null;
}

function SidebarFilters({
  applyFilterBtnLoader,
  sessionLoader,
  isSidebarVisible,
  openSidebar,
  filters,
  handleApplyFilters,
  selectedFilter,
}: SidebarFilterProps) {
  return (
    <div
      className="pt-4 px-4"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
      }}
    >
      <div className={styles.filter_container}>
        <p className="m-0 fs-14 ps-3" style={{ color: '#2B2B2B80'}}>
          Filters
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
            <p key={label} className={`pl-10 m-0 cursor-pointer ${styles.sidebarOption} ${selectedFilter === label && styles.sidebarOptionActive}`} onClick={() => openSidebar(label)}>
              {label}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <button
          className={`px-4 py-2 border border-1 rounded cursor-pointer fs-14 fw-medium text-white`}
          disabled={isSidebarVisible || applyFilterBtnLoader}
          onClick={() => handleApplyFilters()}
          style={{
            backgroundColor: isSidebarVisible || applyFilterBtnLoader ? '#9E9FA4' : '#A69476',
            cursor: isSidebarVisible || applyFilterBtnLoader ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {applyFilterBtnLoader ? (
            <div className="spinner-border spinner-border-sm" role="status" style={{ color: '#a69476' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            'Apply Filter'
          )}
        </button>
      </div>
    </div>
  );
}

export default SidebarFilters;
