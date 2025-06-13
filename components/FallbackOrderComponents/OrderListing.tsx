import React from 'react'
import styles from '../../styles/components/fallbackOrder.module.scss';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export default function OrderListing() {
  const router = useRouter();

  return (
    <div className="">
      <div className={styles.cartContainer}>
        {/* Replace with Page Header With back Button in ES */}
        <div style={{ width: 'fit-content'}} className="d-flex align-items-center">
          <button
            onClick={() => router.back()}
            className="d-flex align-items-center justify-content-center text-decoration-none text-black me-2 bg-transparent border-0 p-0"
            style={{ cursor: "pointer" }}
          >
            <IoIosArrowBack size={20} className="m-0 fw-bold" />
          </button>
          <h5 className="fw-bold mb-0 pe-3" style={{ fontSize: '18px', marginTop: '2px'}}>Order Listing</h5>
        </div>
        <div className={styles.cartTableContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr className={styles.cartTableHeader}>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Column</th>
                <th className='text-end'>Total Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.orderListTableBody}>
              {
                Array(5).fill(null).map((_, index) => (
                  <tr className={styles.orderListTableBodyRow}>
                    <td>ODR12345678</td>
                    <td>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                    <td>value</td>
                    <td className='text-end'>€211.22</td>
                    <td>
                      <div className='d-flex gap-3 justify-content-end'>
                        <button
                          className={` btn btn-sm ${styles.downloadInvoiceButton}`}
                        >
                          Download Invoice
                        </button>
                        <button
                          className={` btn btn-sm ${styles.viewDetailsButton}`}
                        >
                          View Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
