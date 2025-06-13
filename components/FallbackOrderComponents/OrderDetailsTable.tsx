import styles from '../../styles/components/fallbackOrder.module.scss';
import Image from 'next/image';
import noImage from '../../public/assets/images/no_image.png';
import Link from 'next/link';

const OrderDetailsTable = ({ cartGroup }: any) => {
  const getURL = window.location.href.split('/');
  const itemCode = cartGroup.item_name;
  const items = cartGroup.items;
  const getLastSegment = getURL[getURL.length - 1];
  const baseImgURL = 'https://emr-euro-shine.8848digitalerp.com';
  const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${baseImgURL}${src}?w=${width}&q=${quality || 75}`;
  };
  
  console.log('cartGroup:', cartGroup);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-start gap-4">
        <div
          style={{
            position: 'relative',
            width: '56px',
            height: '56px',
            border: '1px solid #EAE9EA',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {cartGroup?.item_image ? (
            <Image src={`${cartGroup?.item_image}`} alt="Product Image" fill style={{ objectFit: 'cover' }} loader={imageLoader} />
          ) : (
            <Image src={noImage} alt="Product Image" fill style={{ objectFit: 'cover' }} />
          )}
        </div>
        {getLastSegment === 'cart' || 'order-detail' ? 
          <Link href={`/product/ALL/${items[0]?.OdDmCd}?OdCoCd=${items[0].OdCoCd}&OdTc=${items[0]?.OdTc}&OdYy=${items[0]?.OdYy}&OdChr=${items[0]?.OdChr}&OdNo=${items[0]?.OdNo}&OdSr=${items[0]?.OdSr}`} className={`m-0 fw-bold text-decoration-none ${styles.cartTableHeading}`}>{itemCode}</Link>
        : <p className={`m-0 fw-bold ${styles.cartTableHeading}`}>Your Cart for - {itemCode}</p>
        }
      </div>
      <div className={styles.cartTableContainer}>
        <table className={styles.cartTable}>
          <thead>
            <tr className={styles.cartTableHeader}>
              <th>Metal</th>
              <th>Purity</th>
              <th>Tone</th>
              <th>Diamond</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any, index: number) => (
              <tr key={`cart-item-${index}-${item.OdDmCd}`} className={styles.cartTableBody} style={{ position: 'relative' }}>
                <td>{item.OdMainMetDesc}</td>
                <td>{item.OdKt}</td>
                <td>{item.OdDmColDesc}</td>
                <td>{item.DiaGrd}</td>
                <td>{item.OdDmSz || '-'}</td>
                <td>{item.OdOrdQty}</td>
                <td>€{(item.OdSalPrc * item.OdOrdQty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className={styles.cartTableFooter}>
              <td colSpan={6}>Subtotal</td>
              <td colSpan={2}>€{cartGroup.sub_total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
