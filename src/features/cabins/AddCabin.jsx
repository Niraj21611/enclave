import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   return (
  //     <div>
  //       <Button onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}>
  //         Add Cabin
  //       </Button>
  //       {isModalOpen && (
  //         <Modal onClose = {() => setIsModalOpen(false)}>
  //           <CreateCabinForm onCloseModal = {() => setIsModalOpen(false)} />
  //         </Modal>
  //       )}
  //     </div>
  //   );

  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table">
        <Button>Show Cabin Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
