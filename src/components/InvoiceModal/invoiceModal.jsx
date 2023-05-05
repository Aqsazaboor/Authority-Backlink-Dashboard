import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function InvoiceModal({ handleClose, show, params }) {
  return (
    <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton></Modal.Header> */}
      <button onClick={handleClose}>BTN</button>
      <Modal.Body>
        {/* <img src={params?.sd.props.img} />
        {params?.sd.props.title}
        {params?.sd.props.url}
        {params?.sd.Price}
        {params?.da.props.number}
        {params?.da.props.condition} */}
        {params?.id}
        {params?.price}
        <img src={params?.img} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
