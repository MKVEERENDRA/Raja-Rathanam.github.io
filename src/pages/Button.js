import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ url }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button className={styles.button} onClick={togglePopup}>
        Open Popup
      </button>
      {showPopup && (
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={togglePopup}>
            Close
          </button>
          <iframe
            src={url}
            width="100%"
            height="400px"
            frameBorder="0"
            allowFullScreen
            title="Embedded Content"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Button;
