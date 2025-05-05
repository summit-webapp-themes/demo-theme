import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from '../../../styles/components/productPageV2Components.module.scss';
import { useState } from "react";
import Image from 'next/image';
import noImage from '../../../public/assets/images/no_image.png';

export default function CartDetailsTable({ label }: { label: string }) {
  const [cartData, setCartData] = useState<any[]>([
    {
      metal: 'Gold',
      purity: '10k',
      tone: 'Yellow',
      diamond: 'Sl',
      size: 4,
      quantity: 1,
      unitPrice: 211.22,
    },
    {
      metal: 'Platinum',
      purity: '-',
      tone: '-',
      diamond: 'Sl',
      size: 5,
      quantity: 2,
      unitPrice: 311.22,
    },
  ]);
  const totalPrice = cartData.reduce((acc, item) => acc + item.unitPrice*item.quantity, 0);

  const handleQuantityChange = (index: number, operation: string) => {
    const newCartData = [...cartData];
    let newQuantity = newCartData[index].quantity;
  
    switch (operation) {
      case "add":
        newQuantity += 1;
        break;
      case "subtract":
        newQuantity = Math.max(0, newQuantity - 1);
        break;
      default:
        break;
    }
    newCartData[index].quantity = newQuantity;
  
    setCartData(newCartData);
  };
  
  
  const handleDeleteItem = (index: number) => {
    setCartData((prev) => {
      const newCartData = [...prev];
      newCartData.splice(index, 1);
      return newCartData;
    });
  } 

  return (
    <div>
      <div className='d-flex align-items-center justify-content-start gap-4'>
        <div style={{ position: 'relative', width: '66px', height: '66px', borderRadius: '10px', overflow: 'hidden'}}>
          <Image src={noImage} alt="Ring Image" className=' object-fit-cover' fill />
        </div>
        <p className={`m-0 fw-bold ${styles.cartTableHeading}`}>{label}</p>
      </div>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item: any, index: number) => (
            <tr key={`cart-item-${index}-${item.metal}`} className={styles.cartTableBody}>
              <td>{item.metal}</td>
              <td>{item.purity}</td>
              <td>{item.tone}</td>
              <td>{item.diamond}</td>
              <td>{item.size}</td>
              <td>
                <div className="input-group flex-nowrap" style={{ width: 'fit-content', border: '1px solid #EBEBEB', borderRadius: '6px'}}>
                  <button 
                    className="btn d-flex justify-content-center border-0 border-end align-items-center px-2 py-1" 
                    style={{ backgroundColor: '#F5F5F5',borderRight: '1px solid #EBEBEB'}}
                    onClick={() => handleQuantityChange(index, "subtract")}
                  >
                    <FiMinus size={18} />
                  </button>
                  <div 
                    className="form-control text-center border-0" 
                    style={{ width: '80px', color: '#3D1D15', fontSize: '20px', fontWeight: '600', padding: '3px 8px'}} 
                  >
                    {item.quantity}
                  </div>
                  <button 
                    className="btn d-flex justify-content-center border-0 border-start align-items-center px-2 py-1" 
                    style={{ backgroundColor: '#F5F5F5',borderLeft: '1px solid #EBEBEB'}}
                    onClick={() => handleQuantityChange(index, "add")}
                  >
                    <FiPlus size={18} />
                  </button>
                </div>
              </td>
              <td>€{(item.unitPrice * item.quantity).toFixed(2)}</td>
              <td>
              <button 
                className="btn d-flex justify-content-center border-0 align-items-center" 
                onClick={() => handleDeleteItem(index)}
              >
                <RiDeleteBinLine size={18} color="#878787" />
              </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.cartTableFooter}>
            <td colSpan={6} style={{ color: '#3D1D15'}}>Subtotal</td>
            <td colSpan={2} style={{ color: '#EF7759'}}>€{totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}