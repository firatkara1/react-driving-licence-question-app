import Modal from "../modules/modals/components/Modal";
import ModalBody from "../modules/modals/components/ModalBody";
import ModalHeader from "../modules/modals/components/ModalHeader";
import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

export default function TestModal(props) {
  const { categories } = useContext(AppContext);
  const { setClickedCategory } = useContext(AppContext);
  const { questionData } = useContext(AppContext);
  const { setAppState } = useContext(AppContext);

  useEffect(() => {
    console.log("questionData test modal: ", questionData);
  }, [questionData]);
  return (
    <Modal>
      <ModalHeader>
        <p>Test Secin</p>

        <span onClick={props.close}>
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
      </ModalHeader>

      <ModalBody>
        {categories?.map((cat, id) => (
          <div className="items" key={id}>
            <div className="item">
              <p>{cat?.categoryName}</p>

              <i
                onClick={() => {
                  setAppState("quiz");
                  setClickedCategory(cat?.categoryId);
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
