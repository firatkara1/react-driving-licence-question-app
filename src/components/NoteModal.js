import Modal from "../modules/modals/components/Modal";
import ModalBody from "../modules/modals/components/ModalBody";
import ModalHeader from "../modules/modals/components/ModalHeader";
import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

export default function TestModal(props) {
  const { note } = useContext(AppContext);
  const { setClickedNoteCategory } = useContext(AppContext);
  const { noteData } = useContext(AppContext);
  const { setAppState } = useContext(AppContext);

  useEffect(() => {
    console.log("questionData test modal: ", noteData);
  }, [noteData]);
  return (
    <Modal>
      <ModalHeader>
        <p>Çalışmak İstediğiniz Ders</p>
        <span onClick={props.close}>
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
      </ModalHeader>
      <ModalBody>
        {note?.map((cat, id) => (
          <div className="items" key={id}>
            <div className="item">
              <p>{cat?.noteCategoryName}</p>
              <i
                onClick={() => {
                  setAppState("result");
                  setClickedNoteCategory(cat?.categoryId);
                }}
                className="fa-solid fa-angle-right btn-test"
              />
            </div>
          </div>
        ))}
      </ModalBody>
    </Modal>
  );
}
