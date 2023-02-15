import { Modal, Typography } from "antd";

import { useState, useEffect } from "react";
import "./welcomeModal.css";

const WelcomeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("firstVisit") !== "1") {
      showModal();
      sessionStorage.setItem("firstVisit", "1");
    }
  }, []);

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal-container"
      footer={null}
      style={{
        top: "6rem",
      }}
    >
      <div>
        <br />
        <Typography className="modal-title">
          Welcome to Tee-Hee Tees!
        </Typography>
        <br />
        <Typography className="modal-subtitle">
          This is a sample consumer app built by Descope.<br/>
          We hope this app can give you an idea of how Descope can help your B2C app <br/>with seamless and secure authentication.
        </Typography>
        <br />
        <br />
        <div className="content-wrapper">
          <Typography className="content-head">
            Here are some ways you can explore the site and experience seamless
            and secure authentication:
          </Typography>
          <br />
          <ul className="content-list">
            <li>Try signing up</li>
            <li>Try checking out after adding a T-shirt to your cart to experience a “Step Up” flow</li>
          </ul>
          <Typography className="show-project-id">
          <code>Currently using Descope Flows from Project ID: {localStorage.getItem('projectId') ? localStorage.getItem('projectId') : '(Descope Default)'}</code>
        </Typography>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
