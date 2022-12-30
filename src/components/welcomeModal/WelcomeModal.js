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
      if (localStorage.getItem('firstVisit') !== "1") {
        showModal();
        localStorage.setItem('firstVisit', '1');
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
          This is a sample consumer app built by Descope.
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
            <li>Try checking out after ordering more than 10 T-shirts</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
