import { Button, Modal } from "react-bootstrap"

function EnqModal({ show, handleClose }: any) {
    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>What are you searching today?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Let us know if you couldn't Find any Product of your Choice</p>
                <textarea className="form-control w-100"></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-uppercase" onClick={handleClose}>
                    Submit Enquiry
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EnqModal