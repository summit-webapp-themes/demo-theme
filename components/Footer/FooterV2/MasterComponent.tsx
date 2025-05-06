import Image from 'next/image';
import styles from '../../../styles/components/footerV2.module.scss';
import Logo from '../../../public/assets/images/LogoAtelierReya.png';
import Link from 'next/link';

export default function MasterComponent() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBody}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogoSection}>
            <a href='/' className={styles.footerLogo}>
              <Image src={Logo} alt='Logo Image' fill style={{ objectFit: 'cover'}}/>
            </a>
          </div>
          <div className={styles.footerAddressSection}>
            <p>
              123 Market St. #22B 
            </p>
            <p>
              Charlottesville, India
            </p>
            <p>
              44635
            </p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerLinksSection}>
            <Link href="#">About</Link>
            <Link href="#">Rings</Link>
            <Link href="#">Collection</Link>
            <Link href="#">Product Range</Link>
            <Link href="#">Price</Link>
          </div>
          <div className={styles.footerLinksSection}>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          © 2023 Mira. All rights reserved.
        </p>
      </div>
    </div>
  )
}