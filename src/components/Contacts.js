import { useState } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./contacts.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

const navbar = [
  {
    id: 1,
    name: "JOHN",
    pathway: "/home",
    call: "Call John?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "MATTHEW",
    pathway: "/iotControls",
    call: "Call Son?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 3,
    name: "SALLY",
    pathway: "/entertainment",
    call: "Call Son?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 4,
    name: "MESERET",
    pathway: "/calendar",
    call: "Call Daughter?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 5,
    name: "PRAPTI",
    pathway: "/calendar",
    call: "Call Lucy?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 5,
    name: "MARK",
    pathway: "/calendar",
    call: "Call Lue?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
];
// Custom hook for handling the modal
const useContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = (contact) => {
    setSelectedContact(contact);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return {
    modalIsOpen,
    selectedContact,
    openModal,
    closeModal,
  };
};

function Contacts() {
  // handle Help Button
  // const handleHelpClick = () => {
  //   const phoneNumber = "+1234556778";
  //   const userChoice = window.confirm("Do you want to call or send an SMS?");

  //   if (userChoice) {
  //     window.location.href = `tel:${phoneNumber}`;
  //   } else {
  //     window.location.href = `sms:${phoneNumber}`;
  //   }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  // };

  const { modalIsOpen, selectedContact, openModal, closeModal } =
    useContactModal();
  const [cardIndex, setCardIndex] = useState(0);
  //call using window
  const contactCall = () => {
    if (selectedContact) {
      const phoneNumber = "+1234556778";
      window.location.href = `tel:${phoneNumber}`;
      closeModal(); // Close the modal after initiating the call
    }
  };
  //   const userChoice = window.confirm('Do you want to call or send an SMS?');

  // if (userChoice) {
  //   window.location.href = `tel:${phoneNumber}`;
  // } else {
  //   window.location.href = `sms:${phoneNumber}`;
  // }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  // };

  // Arrow Functions
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward size={170} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack size={170} />
      </div>
    );
  };
  //slides effect
  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <>
      <div id="contacts" className="settings">
        <Link to="/" className="linkStyle">
          <div className="up-arrow">
            <IoIosArrowUp size={30} className="arrow-up" />
          </div>
        </Link>
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings}>
              {navbar.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => openModal(card)}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                  {card.icon}
                  <h1>{card.name}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Call Modal"
        className="custom-modal centered-modal">
        {selectedContact && (
          <div>
            <h2>{`Do you want to call ${selectedContact.name}?`}</h2>
            <button onClick={contactCall}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Contacts;
