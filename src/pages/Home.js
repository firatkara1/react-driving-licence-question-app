import React from "react";
import ModalRoot from "../modules/modals/components/ModalRoot";
import ModalService from "../modules/modals/services/ModalService";
import TestModal from "../components/TestModal";
import NoteModal from "../components/NoteModal";
import Card from "../components/Card";

import questionImg from "../images/question.png";
import galleryImg from "../images/gallery.png";
import mobileImg from "../images/mobile-app.png";
import notesImg from "../images/notes.png";
import policeImg from "../images/police.png";
import trafficImg from "../images/question.png";

function Home() {
  // const [questionNumber, setQuestionNumber] = useState([1]);
  // const [questionData, setquestionData] = useState([]);
  // const [categoryId, setCategoryId] = useState([]);

  const modalTest = () => {
    ModalService.open(TestModal);
  };

  const modalNote = () => {
    ModalService.open(NoteModal);
  };

  const notice = () => {
    alert("En kısa zamanda eklenecektir...");
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const openMobileLink = () => {
    openInNewTab(
      "https://play.google.com/store/apps/details?id=com.gold.ehliyetuygulamasi"
    );
  };

  return (
    <div className="home-container">
      <ModalRoot />
      <Card
        handleClick={modalTest}
        img={questionImg}
        title={"Soru çöz"}
        desc={"Bu kategoride ehliyet sınavına yönelik sorular bulunmaktadır"}
      />
      <Card
        handleClick={modalNote}
        img={notesImg}
        title={"Ders Notları"}
        desc={"Bu kategoride ehliyet sınavı ders notları bulunmaktadır"}
      />
      <Card
        handleClick={notice}
        img={galleryImg}
        title={"Görselli Sorular"}
        desc={
          "Bu kategoride ehliyet sınavına yönelik görselli sorular bulunmaktadır"
        }
      />
      <Card
        handleClick={notice}
        img={trafficImg}
        title={"Trafik Levhaları"}
        desc={"Bu kategoride trafik levhalarının anlamlarını öğrenebilirsiniz"}
      />
      <Card
        handleClick={notice}
        img={policeImg}
        title={"El İşaretleri"}
        desc={
          "Bu kategoride trafik görevlisinin el işaretlerini öğrenebilirsiniz"
        }
      />
      <Card
        handleClick={openMobileLink}
        img={mobileImg}
        title={"Mobil Uygulama"}
        desc={"Ücretsiz mobil uygulamamızı deneyebilirsiniz"}
      />
    </div>
  );
}

export default Home;
