import { Button } from "react-bootstrap";
import styles from '../../../styles/components/twoLevelSidebarComponents.module.scss';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetStore } from "../../../store/slices/auth/logout-slice";
import { FiLogOut } from "react-icons/fi";

export default function KCTopNavbar() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center bg-white ps-5 position-sticky top-0 z-3" style={{ borderBottom: '1px solid #EAE5DF', padding: '12px 36px 12px 0', height: '60px'}}>
      <div className="d-flex flex-column gap-1">
        <p className="h6 m-0 fw-semibold" style={{ color: '#2B2B2B', lineHeight: '18px'}}>Rajesh N Shah</p>
        <span className="fs-12 fw-normal" style={{ color: '#2B2B2B66', lineHeight: '12px'}}>User ID</span>
      </div>
      <Button
          variant="outline-light"
          className={styles.kcLogoutButton}
          style={{ width: 'fit-content', padding: '0 12px' }}
          onClick={() => {
            dispatch(resetStore());
            localStorage.clear();
            router.push('/login');
          }}
        >
          Logout
          <FiLogOut size={14} />
        </Button>
    </div>
  );
}