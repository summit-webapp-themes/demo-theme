import { Modal } from "react-bootstrap";
import { GoCheckCircle } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import styles from '../../../styles/components/productPageV2Components.module.scss'

export default function ThankYouModal({showModal, setShowModal} : {showModal: boolean, setShowModal: (e: boolean) => void}) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="d-flex justify-content-between align-items-center mx-4 mt-4 pb-2 px-2 pt-1">
        <Modal.Title style={{ fontSize: '20px', fontWeight: 500}}>Order Placed</Modal.Title>
        <button className="border-0 bg-transparent " onClick={() => setShowModal(false)}>
          <IoCloseOutline size={28} color="#000" />
        </button>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-3 align-items-center pt-2 pb-0 m-4">
        <GoCheckCircle color="#EE6E4E" size={32} />
        <p className="h6 m-0 fw-medium text-center" style={{ color: '#2B2B2B'}}>
          Thank you for trusting our craftsmanship—
          <br />your timeless, elegant piece is being prepared.
        </p>
        <button style={{ width: 'fit-content'}} className={`btn btn-outline py-2 m-0 mt-3 h6 px-5 ${styles.placeOrderButton}`} onClick={() => setShowModal(false)}>
          Ok
        </button>
      </Modal.Body>
    </Modal>
  )
}