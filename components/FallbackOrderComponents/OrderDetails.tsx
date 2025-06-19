import React from 'react'
import styles from '../../styles/components/fallbackOrder.module.scss';
import { useRouter } from 'next/router';
import OrderDetailsTable from './OrderDetailsTable';
import { IoIosArrowBack } from 'react-icons/io';

export default function OrderDetails() {
  // const { itemsUpdating, handleQuantityChange, handleDeleteItem } = useCart();
  // const { items, grandTotal } = useSelector(selectCart);
  const order = {
    id: 'ORD123456789',
    orderItems: [
      {
        item_name: 'JY-2025-001',
        items: [{
          OdMainMetDesc: 'Gold',
          OdKt: '10K',
          OdDmColDesc: 'Yellow',
          DiaGrd: "Sl",
          OdDmSz: 4,
          OdSalPrc: 200.00,
          OdOrdQty: 2
        }],
        sub_total: 400.00
      },
      {
        item_name: 'JY-2025-002',
        items: [{
          OdMainMetDesc: 'Gold',
          OdKt: '10K',
          OdDmColDesc: 'Yellow',
          DiaGrd: "Sl",
          OdDmSz: 4,
          OdSalPrc: 200.00,
          OdOrdQty: 2
        }],
        sub_total: 400.00
      },
    ],
    grandTotal: 800.00
  }
  const router = useRouter();

  return (
    <div className="">
      <div className={styles.cartContainer}>
        {/* Header Section */}
        <div className='d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2'>
          <div className='d-flex justify-content-start align-items-center flex-wrap'>
            {/* Replace with Page Header With back Button in ES */}
            <div style={{ width: 'fit-content'}} className="d-flex align-items-center">
              <button
                onClick={() => router.back()}
                className="d-flex align-items-center justify-content-center text-decoration-none text-black me-2 bg-transparent border-0 p-0"
                style={{ cursor: "pointer" }}
              >
                <IoIosArrowBack size={20} className="m-0 fw-bold" />
              </button>
              <h5 className="fw-bold mb-0" style={{ fontSize: '18px', marginTop: '2px'}}>{order.id}</h5>
            </div>
            <div className="vr mx-2"></div>
            <p style={{ width: 'fit-content', color: '#3D1D1566'}} className='fs-14 mb-0'>
              {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <button
            className={` btn btn-sm ${styles.downloadInvoiceButton}`}
          >
            Download Invoice
          </button>
        </div>
        <div className="my-3 d-flex flex-column gap-2">
          {order.orderItems?.map((cartGroup: any, index: number) => (
            <OrderDetailsTable
              key={cartGroup.item_name}
              cartGroup={cartGroup}
            />
          ))}
          <div className={`mt-0 ${styles.cartTableContainer}`}>
            <table className={styles.cartTable}>
              <thead>
                <tr className={styles.orderTableGrandTotal}>
                  <th colSpan={6} style={{ width: '70%'}}>Grand total</th>
                  <th colSpan={1} style={{ width: '20%'}}>€{order.grandTotal.toFixed(2)}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
