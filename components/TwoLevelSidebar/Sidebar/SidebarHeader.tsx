import KC_Logo from '../../../public/assets/images/KC_logo.svg';
import Image from 'next/image';

interface SidebarHeaderProps {
  sessionLoader: boolean;
  openSidebar: (value: string | null) => void;
  filters: any;
}

function SidebarHeader({ sessionLoader, openSidebar, filters }: SidebarHeaderProps) {
  console.log('filters', filters);
  return (
    <div className={`w-100 d-flex flex-column gap-4 align-items-center p-4`} style={{ backgroundColor: '#FFF3E1' }}>
      <Image src={KC_Logo} alt="logo" width={166} />
      <p
        className="uppercase bg-white w-100 flex justify-content-between gap-5 m-0 py-2 px-3"
        style={{ border: '1px solid #F6EAD7', borderRadius: '10px' }}
      >
        <div className="fs-14 fw-semibold w-75" style={{ display: 'inline-block' }}>
          {sessionLoader ? (
            <div className="spinner-border spinner-border-sm" role="status" style={{ color: '#a69476' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            filters
          )}
        </div>

        <div
          className="fs-14 fw-semibold text-end w-25 text-brown"
          onClick={() => openSidebar('Work Scope')}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          Edit
        </div>
      </p>
    </div>
  );
}

export default SidebarHeader;
