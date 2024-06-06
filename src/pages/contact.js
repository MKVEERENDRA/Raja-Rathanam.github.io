import React, { useEffect,useState } from 'react';
import Layout from "../components/layout";
import { Helmet } from 'react-helmet';
import "./home.css";
import PickaxeButton from "../components/Pix";
import "./contact.css"
export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <Layout>
      <h1 className="title-header-large">Contact Raja Rathanam</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or any
        inquiries, feel free to reach out to us through the following channels:
      </p>
      <hr />
       {/* Button */}
<div className="button-container">
    <button className="popup-button" onClick={togglePopup}>
    <span className="emoji">💬</span> 
      Chat With Our Company AI
    </button>
  </div>

{/* Popup */}
{showPopup && (
  <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
              Close X
            </button>
            <button className="close-button1" onClick={togglePopup}>
              Close X
            </button>
            <iframe
src="https://www.blackbox.ai/agent/RAJARATHANAMIjUXsf3"              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
              title="Pickaxe Embed"
            ></iframe>
          </div>
        </div>)}
      <h2>Email us!</h2>
      <p>For general inquiries or consulting services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a className="regular-link" href="mailto:mkrveeresh@gmail.com" target="_blank" rel="noreferrer">
Click to Connect with Owner      </a>
      <p>For support around our products and prior provided services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a className="regular-link" href="mailto:veerendravamsi66@gmail.com" target="_blank" rel="noreferrer">
      Click to Connect with Owner        </a>
      <br />
      <h2>Connect with us!</h2>
      <p>Follow or contact us on our social platforms:</p>
      <i className="fab fa-github"></i>&nbsp;
      <a className="regular-link"
        href="https://github.com/MKVEERENDRA"
        target="_blank"
        rel="noreferrer"
      >
        OWNER On Github
      </a>
      <br /> <br />
      <i className="fab fa-linkedin"></i>&nbsp;
      <a className="regular-link"
        href="https://www.linkedin.com/in/veerendra-vamshi-821890225/"
        target="_blank"
        rel="noreferrer"
      >
        OWNER on LinkedIn
      </a>
      <br /> <br />
      <br/>
      <h2>Share our website!</h2>
      <p>Know somebody that may need our help? Share the RajaRathanam website with others:</p>
      <i class="fa-solid fa-briefcase"></i>&nbsp;
      <a className="regular-link"
         href="https://urukundha.com" 
         target="_blank" 
         rel="noreferrer">
         RajaRathanam.in
      </a>
      <br />
      <br />
      <hr />
      <div className="closing-wrapper">
        <p>Like this website? Feel free to...<br />
        <br />
        <i id="github-fork" className="fa-solid fa-code-fork fa-bounce"></i>&nbsp;&nbsp;
          <a className="regular-link"
            href="https://github.com/MKVEERENDRA"
            target="_blank"
            rel="noreferrer"
          >
            Fork and Star it on GitHub!
          </a>
          &nbsp;&nbsp;<i id="github-star" className="fa-solid fa-star fa-bounce"></i>
        </p>  
        <a href="https://github.com/MKVEERENDRA">
          <img
            src="/images/company/R.gif"
            alt="Night Owl Labs"
            title="Night Owl Labs"
            className="landing-logo"
            id="landing-footer"
            style={{ height: '200px', width: '200px' }}

          />
          </a>
      </div>
    </Layout>
  )
}
