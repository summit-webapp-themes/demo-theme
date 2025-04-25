import { Form } from 'react-bootstrap';
import noImage from '../public/assets/images/no_image.png';
import Image from 'next/image';
import styles from '../styles/components/twoLevelSidebarComponents.module.scss';

export default function KCGridCard({ productsData, selectedProducts, setSelectedProducts }: any) {
  console.log('selectedProducts', selectedProducts);
  return (
    <>
      {productsData && productsData.length > 0 ? (
        <div className="container mt-4 row">
          {productsData?.map((item: any, index: any) => (
            <div key={`product-card-${item.OdId}-${index}`} className="w-full col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
              <div className={`position-relative card ${styles.kcCardImgContainer}`} style={{ height: '228px' }}>
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
                  className={`position-absolute z-3 ${styles.custom_check}`}
                  style={{ top: '0.25rem', right: '0.5rem' }}
                />
                <Image src={noImage} className="" style={{ objectFit: 'cover' }} alt="Product Image" fill />
              </div>
              <div className="p-2">
                <p className="m-0 text-break fs-12" style={{ color: '#A69476' }}>
                  &#8377;{item.OdSalPrc}
                </p>
                <p className="m-0 text-break fs-14 fw-semibold">
                  {item.OdNo} | {item.OdKt} | {item.GrossWt}g
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center mt-5">No data available</h2>
          <p className="text-center">Please adjust your filters.</p>
        </div>
      )}
    </>
  );
}
