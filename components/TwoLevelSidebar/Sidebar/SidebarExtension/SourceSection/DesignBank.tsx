import { useState } from 'react';
import FileUpload from '../FileUpload';
import styles from '../../../../../styles/components/twoLevelSidebarComponents.module.scss';
function DesignBank({ data }: any) {
  const [value, setValue] = useState();
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
        <input className={`${styles.customer_input} px-2 py-1 text-brown  form-control`} placeholder="From" />
        <input className={`${styles.customer_input} px-2 py-1 text-brown form-control`} placeholder="To" />
      </div>
      <div className="mt-2">
        {/* <input type="file" className="text-brown cursor-pointer" /> */}
        <FileUpload id="design-bank-file" />
      </div>
    </div>
  );
}

export default DesignBank;
