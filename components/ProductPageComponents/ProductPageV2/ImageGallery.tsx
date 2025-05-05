import Image from 'next/image';
import noImage from '../../../public/assets/images/no_image.png';
import styles from '../../../styles/components/productPageV2Components.module.scss';

export default function ImageGallery() {
  return (
    <div className="w-100">
      <div className={styles.imgGalleryLgContainer}>
        <Image src={noImage} alt="Ring Image" className=' object-fit-cover' fill />
      </div>
      <div className='overflow-x-scroll' style={{  maxWidth: '750px'}}>
        <div className="d-flex mt-3 gap-3" style={{ width: 'fit-content'}}>
          {[1,2,3,4].map((i) => (
            <div className={styles.imgGallerySmContainer}>
              <Image src={noImage} alt="Ring Image" className=' object-fit-cover' fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};