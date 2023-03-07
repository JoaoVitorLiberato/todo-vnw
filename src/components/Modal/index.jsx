import Modal from 'react-bootstrap/Modal';
import { Container } from "./style"

export default function ModalComponetent(props) {
  
  const {
    show,
    close,
    title,
    children
  } = props

  return (
    <>
      <Modal show={show} onHide={close} className="text-center">
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {
              children
            }
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}