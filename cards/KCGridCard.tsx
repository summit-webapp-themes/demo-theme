import { Form } from "react-bootstrap";
import noImage from '../public/assets/images/no_image.png';
import Image from "next/image";
import styles from '../styles/components/twoLevelSidebarComponents.module.scss';

export default function KCGridCard({ productsData, selectedProducts, setSelectedProducts }: any) {
    return (
        <div className="container mt-4 row">
            {productsData?.map((item: any, index: any) => (
                <div key={`product-card-${item.OdId}-${index}`} className="w-full col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className={`position-relative card ${styles.kcCardImgContainer}`} style={{ height: '228px'}}>
                        <Form.Check 
                            type="checkbox" 
                            value={selectedProducts.filter((prodOdId: any) => prodOdId === item.OdId ? '1' : '0' )} 
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setSelectedProducts([...selectedProducts, item.OdId]);
                                } else {
                                    setSelectedProducts(selectedProducts.filter((prodOdId: any) => prodOdId !== item.OdId));
                                }
                            }} 
                            className={`position-absolute z-3 ${styles.custom_check}`} style={{top: '0.25rem', right: '0.5rem'}} />
                        <Image
                            src={noImage}
                            className=""
                            style={{ objectFit: 'cover'}}
                            alt="Product Image"
                            fill
                        />
                    </div>
                    <div className="p-2" >
                        <p className="m-0 text-break fs-12" style={{ color: '#A69476'}}>&#8377;{item.OdSalPrc}</p>
                        <p className="m-0 text-break fs-14 fw-semibold">{item.OdNo} | {item.OdKt}Kt | {item.DiaWt}Wt</p>
                    </div>
                </div>
            ))}
        </div>
    )
}