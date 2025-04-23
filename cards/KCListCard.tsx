import { Form } from "react-bootstrap";
import styles from '../styles/components/twoLevelSidebarComponents.module.scss';
import Image from "next/image";
import noImage from '../public/assets/images/no_image.png';

export default function KCListCard({ productsData, selectedProducts, setSelectedProducts }: any) {
    return (   
        <div className={`container mt-4 overflow-x-scroll ${styles.hide_scrollbar}`}>
            <table className={`w-100 text-nowrap text-center ${styles.kcListTable}`} >
                <thead>
                    <tr>
                        <th className="p-2"></th>
                        <th className="p-2"></th>
                        <th className="p-2"></th>
                        <th className="p-2">Stock ID</th>
                        <th className="p-2">Gross Wt</th>
                        <th className="p-2">Metak Wt</th>
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
                        <tr key={`product-card-${item.OdNo}-${index}`} style={{ backgroundColor: '#F9F9F9'}}>
                            <td className="px-2 py-1" style={{ width: '28px'}}>
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
                                    className={styles.custom_check}
                                />
                            </td>
                            <td className="py-1 px-3" style={{ width: '48px'}}>
                                <div className={`position-relative card ${styles.kcCardImgContainer}`} style={{ height: '40px', width: '40px'}}>
                                    <Image
                                        src={noImage}
                                        style={{ objectFit: 'cover'}}
                                        alt="Product Image"
                                        fill
                                    />
                                </div>
                            </td>
                            <td className="px-2 py-1 text-start">
                                <p className="m-0 fs-14 fw-semibold">&#8377;{item.OdSalPrc}</p>
                                <p className="m-0" style={{ color: '#666666'}}>{item.OdNo} | {item.OdId} | {item.OdKt}Kt | {item.DiaWt}Wt</p>
                            </td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                            <td className="px-2 py-1">2.5</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}