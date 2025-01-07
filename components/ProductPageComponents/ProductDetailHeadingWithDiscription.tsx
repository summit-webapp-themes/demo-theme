import styles from '../../styles/components/productPage.module.scss';
import { Rating } from 'react-simple-star-rating';

const ProductDetailHeadingWithDescription = ({ productDetailData }: any) => {
  return (
    <div>
      <h1 className={styles.prodcut_title}>{productDetailData?.item_name}</h1>
      <div className="row mb-3">
        <div className="col-4 ">
          <span className={` ${styles.price}`}>{`₹${productDetailData?.price}`}</span>
          <span className={` ps-3 ${styles.mrpPrice}`}>{`₹${productDetailData?.mrp_price}`}</span>
        </div>
        <div className={`col-8 d-flex align-items-center justify-content-end`}>
          <Rating initialValue={productDetailData?.rating} size={25} readonly />
          <span>({productDetailData?.rating} reviews)</span>
        </div>
      </div>
      <p className="text-secondary">{productDetailData?.short_description}</p>
    </div>
  );
};

export default ProductDetailHeadingWithDescription;
