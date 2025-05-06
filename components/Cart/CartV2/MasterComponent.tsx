import CartDetailsTable from "../../ProductPageComponents/ProductPageV2/CartDetailsTable";
import styles from '../../../styles/components/productPageV2Components.module.scss'
import PageHeader from "../../ProductPageComponents/ProductPageV2/PageHeader";
import { useState } from "react";
import ThankYouModal from "./ThankYouModal";

export default function MasterComponent() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  return (
    <div className="px-3 py-4 px-md-4 px-lg-5">
      <PageHeader label="Jewellery Cart" href="/" />
      <div className="my-5 d-flex flex-column gap-2">
        <CartDetailsTable label="JY-2025-001" />
        <CartDetailsTable label="JY-2025-002" />
        <div className="d-flex justify-content-between align-items-center px-4 mx-lg-3 gap-4 mb-4">
          <p className={styles.cartTotalLabel}>Grand Total</p>
          <p className={`${styles.cartTotalValue} pe-5`}>€833.66</p>
        </div>
        <div className="text-end">
          <button className={`btn btn-outline ${styles.placeOrderButton}`} onClick={() => setShowThankYouModal(true)}>
            Place Order
          </button>
        </div>
      </div>
      <ThankYouModal showModal={showThankYouModal} setShowModal={setShowThankYouModal} />
    </div>
  );
}
