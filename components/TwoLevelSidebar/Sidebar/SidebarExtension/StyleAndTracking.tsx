import SidebarExtensionActionButtons from './SidebarExtensionActionButtons';
import Input from './Input';
import FileUpload from './FileUpload';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

function StyleAndTracking({ styleCodeTags, setStyleCodeTags, bagNumberTags, setBagNumberTags, handleAcceptIndivisualFilter }: any) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section} style={{ width: '83%' }}>
          <Input label="Style Code" tags={styleCodeTags} setTags={setStyleCodeTags} />
          <FileUpload id="style-code-file" />
          <Input label="Bag Number" tags={bagNumberTags} setTags={setBagNumberTags} />
          <FileUpload id="bag-number-file" />
        </div>
      </div>

      <SidebarExtensionActionButtons handleAcceptIndivisualFilter={handleAcceptIndivisualFilter} />
    </>
  );
}

export default StyleAndTracking;
