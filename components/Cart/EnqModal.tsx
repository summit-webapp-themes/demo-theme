import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function EnqModal({ show, handleClose }: any) {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t('search_question')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('product_not_found_message')}</p>
        <textarea className="form-control w-100"></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="text-uppercase" onClick={handleClose}>
          {t('submit_enquiry')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EnqModal;
