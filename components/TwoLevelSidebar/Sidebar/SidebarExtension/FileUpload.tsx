import React, { useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

type FileUploadProps = {
  id: string;
};

function FileUpload({ id }: FileUploadProps) {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleClear = () => {
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.file_upload_label}>
        Choose File
      </label>

      <input ref={fileInputRef} id={id} type="file" onChange={handleFileChange} style={{ display: 'none' }} />

      <span className={`${styles.fileName} ${fileName ? styles.underline : styles.default}`}>{fileName || 'No File Chosen'}</span>

      {fileName && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleClear}
            style={{
              border: '1px solid #A69476',
              borderRadius: '10px',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              cursor: 'pointer',
              width: '25px',
              height: '25px',
              marginLeft: '12px',
            }}
            className={styles.clearButton}
          >
            <RxCross2 color="red" size={15} style={{ fontWeight: 'bold' }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
