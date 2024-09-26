import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa6';
import featuredImage from '../../../public/assets/images/featured-images/featured-image-1.webp';
import styles from '../../../styles/components/featuredCard.module.scss';

function FeaturedCard() {
  return (
    <div className={styles.card}>
      <div className="card border-0 rounded-0 cursor-pointer">
        <div className={`${styles.img_container} px-2`}>
          <Image src={featuredImage} alt="featured-collection-image" className="card-img-top rounded-0" height={279}></Image>
          <div className={`${styles.price_section} p-1`}>$2000.00</div>
          <div className={`${styles.heart_icon}`}>
            <FaRegHeart />
          </div>
        </div>
        <div className="card-body rounded-0">
          <h6 className={styles.product_details}>
            <strong>Ultimate 2.0 Shoes</strong>
          </h6>
          <p className={styles?.product_name}>Footwear</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
