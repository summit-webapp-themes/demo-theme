import KC_Logo from '../../../public/assets/images/KC_logo.svg';
import Image from 'next/image';

function SidebarHeader() {
  return (
    <div className={`w-100 d-flex justify-content-center`}>
      <Image src={KC_Logo} alt="logo" width={166} />
    </div>
  );
}

export default SidebarHeader;
