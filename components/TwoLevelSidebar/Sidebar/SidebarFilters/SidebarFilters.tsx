import { GoDotFill } from 'react-icons/go';
import styles from '../../../../styles/components/twoLevelSidebar.module.scss';

interface SidebarFilterProps {
  isSidebarVisible: boolean;
  openSidebar: (value: string | null) => void;
  filters: any;
}

function SidebarFilters({ isSidebarVisible, openSidebar, filters }: SidebarFilterProps) {
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
        <div className="text-base">
          <p className="pl-10 pt-4 m-0 cursor-pointer" onClick={() => openSidebar('Customer')}>
            Customer
          </p>
          <div className="h-2rem">
            {filters?.customer && <div className={`text-brown ${styles.selected_filter_display}`}>{filters?.customer?.label}</div>}
          </div>
          <p className="pl-10 m-0 cursor-pointer" onClick={() => openSidebar('Source')}>
            Source
          </p>
          <div className="h-2rem">
            {filters?.source && <div className={`text-brown ${styles.selected_filter_display}`}>{filters?.source?.label}</div>}
          </div>
          <p className="pl-10 m-0 cursor-pointer" onClick={() => openSidebar('Category')}>
            Category
          </p>
          <div className="h-2rem">
            {filters?.category?.length > 0 && (
              <>
                {filters?.category?.map((data: any, index: number) => (
                  <span key={index} className={`text-brown ${styles.selected_filter_display}`}>
                    {data?.label},{' '}
                  </span>
                ))}
              </>
            )}
          </div>
          <p className="pl-10 m-0 cursor-pointer" onClick={() => openSidebar('Price & Weight')}>
            Price & Weight
          </p>
          <div className="h-2rem">
            {(filters?.priceRange || filters?.diamond || filters?.grossWtRange || filters?.designColors) && (
              <div className={`text-brown ${styles.selected_filter_display} d-flex flex-wrap`}>
                {filters?.priceRange}, {filters?.diamond}, {filters?.grossWtRange},{' '}
                {filters?.designColor?.length > 0 && (
                  <>
                    {filters?.designColor?.map((data: any, index: number) => (
                      <span key={index} className={`text-brown ${styles.selected_filter_display}`}>
                        {data?.label},{' '}
                      </span>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
          {/* <p
            className="pl-10 m-0 cursor-pointer"
            onClick={() => openSidebar("Style & Tracking")}
          >
            Style & Tracking
          </p>
          <div className="h-2rem">
            {selectedCustomerCode && (
              <div className={`text-brown ${styles.selected_filter_display}`}>
                {selectedCustomerCode?.name}
              </div>
            )}
          </div> */}
          <p className="pl-10 m-0 cursor-pointer" onClick={() => openSidebar('Display Options')}>
            Display Options
          </p>
          <div className="h-2rem">
            {filters?.displayQuality?.length > 0 && (
              <>
                {filters?.displayQuality?.map((data: any, index: number) => (
                  <span key={index} className={`text-brown ${styles.selected_filter_display}`}>
                    {data?.label},{' '}
                  </span>
                ))}
              </>
            )}
          </div>
          <div className="h-2rem"></div>
        </div>
      </div>

      <div className="pl-10">
        <button className={`px-3 py-2 border border-1 rounded cursor-pointer bg-brown text-white`} disabled={isSidebarVisible}>
          Apply Filter
        </button>
      </div>
      {/* <SidebarExtensionMaster
        visible={isSidebarVisible}
        setVisible={setSidebarVisible}
      /> */}
    </div>
  );
}

export default SidebarFilters;
