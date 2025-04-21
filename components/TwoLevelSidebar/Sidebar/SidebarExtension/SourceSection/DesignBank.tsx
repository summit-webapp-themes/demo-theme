import FileUpload from '../FileUpload';
import styles from '../../../../../styles/components/twoLevelSidebarComponents.module.scss';
function DesignBank({ setFromDmCd, setToDmCd }: any) {
  return (
    <div
      style={{
        marginTop: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <div className="d-flex gap-2 mt-2">
        <input
          className={`${styles.customer_input} px-2 py-1 text-brown  form-control`}
          placeholder="From"
          onChange={(e: any) => setFromDmCd(e.target.value)}
        />
        <input
          className={`${styles.customer_input} px-2 py-1 text-brown form-control`}
          placeholder="To"
          onChange={(e: any) => setToDmCd(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <FileUpload id="design-bank-file" />
      </div>
    </div>
  );
}

export default DesignBank;
