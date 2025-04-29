import { Form } from 'react-bootstrap';
import styles from '../styles/components/twoLevelSidebarComponents.module.scss';
import Image from 'next/image';
import noImage from '../public/assets/images/no_image.png';

export default function KCListCard({ productsData, selectedProducts, setSelectedProducts }: any) {
  return (
    <div className={`container overflow-x-scroll ${styles.hide_scrollbar}`} style={{ padding: '0 36px 0 0'}}>
      <table className={`w-100 text-nowrap text-center ${styles.kcListTable}`}>
        <thead>
          <tr className={`fs-12 ${styles.tableHeaderRow}`}>
            <th className="p-2 ps-0 text-start" colSpan={3}>Product Details</th>
            <th className="p-2">Stock ID</th>
            <th className="p-2">Gross Wt</th>
            <th className="p-2">Metal Wt</th>
            <th className="p-2">Dia Wt</th>
            <th className="p-2">ColStn Wt</th>
            <th className="p-2">Acc Wt</th>
            <th className="p-2">Price</th>
            <th className="p-2">Value</th>
            <th className="p-2">Customer Style</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((item: any, index: number) => (
            <tr key={`product-card-${item.OdNo}-${index}`} className={selectedProducts.some((prod: any) => prod.OdId === item.OdId) ? styles.tableBodyRowActive : styles.tableBodyRow}>
              <td className="ps-3 pe-2 py-1" style={{ width: '28px' }}>
                <Form.Check
                  type="checkbox"
                  checked={selectedProducts.some((prod: any) => prod.OdId === item.OdId)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts([
                        ...selectedProducts,
                        {
                          OdId: item?.OdId,
                          OdCoCd: item?.OdCoCd,
                          OdTc: item?.OdTc,
                          OdYy: item?.OdYy,
                          OdChr: item?.OdChr,
                          OdNo: item?.OdNo,
                          OdSr: item?.OdSr,
                        },
                      ]);
                    } else {
                      setSelectedProducts(selectedProducts.filter((prod: any) => prod.OdId !== item.OdId));
                    }
                  }}
                  className={styles.custom_check}
                />
              </td>
              <td className="py-1 px-3" style={{ width: '48px' }}>
                <div className={`position-relative card ${styles.kcCardImgContainer}`} style={{ height: '40px', width: '40px' }}>
                  <Image src={noImage} style={{ objectFit: 'cover' }} alt="Product Image" fill />
                </div>
              </td>
              <td className="p-2 text-start">
                <p className="m-0 h6 fw-semibold" style={{ color: '#AE7F30'}}>&#8377;{item.OdSalPrc}</p>
                <p className="m-0 fw-medium" style={{ color: '#2B2B2B' }}>
                  <span className='pe-2 border-end' style={{ borderColor: '#DADADA'}}>{item.OdNo}</span><span className='px-2 border-end' style={{ borderColor: '#DADADA'}}>{item.OdKt}</span><span className='px-2'>{item.GrossWt}g</span>
                </p>
              </td>
              <td className="p-2"></td>
              <td className="p-2">{item?.GrossWt}</td>
              <td className="p-2"></td>
              <td className="p-2">{item?.DiaWt}</td>
              <td className="p-2">{item?.CsWt}</td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2">{item?.OdDmCd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
