import Image from "next/image";
import noImage from '../../public/assets/images/no_image.png';
import { imageLoader } from "../../utils/image_loader";
import styles from '../../styles/components/sidebarFilter.module.scss'

export default function ProductCard({ data }: any) {
  console.log('data', data);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className={styles.productImgContainer}>
        {data?.image ?
          <Image src={data?.image} alt="Product Image" fill style={{ objectFit: 'cover'}} loader={imageLoader}/>
        : 
          <Image src={noImage} alt="Product Image" fill style={{ objectFit: 'cover'}} loader={imageLoader}/>
        }
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2 gap-2">
        <p className={`m-0 fw-semibold text-capitalize ${styles.productCardTitle}`}>{data.item_name}</p>
        <p className={`m-0 fw-bold ${styles.productCardPrice}`}>&#8364;354</p>
      </div>
      <p style={{ color: 'rgba(61, 29, 20, 0.4)'}} className="fs-14 m-0">
        <span className="pe-2" style={{ borderRight: '1px solid #DADADA'}}>VD</span>
        <span className="px-2" style={{ borderRight: '1px solid #DADADA'}}>18Kt</span>
        <span className="px-2" style={{ borderRight: '1px solid #DADADA'}}>0.3g</span>
        <span className="px-2">1.3g</span>
      </p>
    </div>
  );
}