import React, { useEffect,useState } from 'react';
import Layout from "../components/layout";
import { Helmet } from 'react-helmet';
import "./home.css";
import PickaxeButton from "../components/Pix";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <Layout>
      <Helmet>
    <script type="text/javascript">
        {`
            window.onload = function() {
                var script = document.createElement('script');
                script.src = 'https://embed.pickaxeproject.com/axe?id=Raja_Rathanam_A1A7Z&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=000000&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=2&s_to=1&s_r=2';
                script.async = true;
                document.head.appendChild(script);
            };
        `}
    </script>
</Helmet>
      <h1 className="title-header-small">
        🌙  Welcome to RAJA RATHANAM Services! 👋
      </h1>
    {/* Button */}
<div className="button-container">
    <button className="popup-button" onClick={togglePopup}>
    <span className="emoji">💬</span> 
      Chat With AI
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
              src="https://embed.pickaxeproject.com/axe?id=Raja_Rathanam_A1A7Z&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=000000&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=2&s_to=1&s_r=2"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
              title="Pickaxe Embed"
            ></iframe>
          </div>
        </div>
      )}
      <div className="pickaxe-button">
        <PickaxeButton />
      </div>

      <p>
      <p>
        Welcome to <b>RAJA RATHANAM</b>, where we redefine hospitality and
        create unforgettable experiences for our guests. Since our inception in
        2000, we have been dedicated to providing exceptional catering services
        and event solutions tailored to meet the unique needs of our clients.
      </p>

        <br />
        <br />
      
        <li>
          👨🏻‍💻 We offer a wide range of Services from A to Z{" "}
          <a className="regular-link" href="/contact">
            Contact Us
          </a>
          .
        </li>
      
      </p>
      <div className="service">
        <h2>Food Cantering</h2>
        <img src="\images\company\food.gif" alt="Service 1"   className="rounded-image"/>

        <p>          Our Food Catering service offers a delectable array of culinary delights for your events, whether it's a corporate gathering, wedding celebration, or any special occasion. We provide customizable menus tailored to your preferences and dietary requirements. Our experienced chefs and professional staff ensure seamless execution, from menu planning to presentation, to create a memorable dining experience for you and your guests.
</p>
        <a className="regular-link" href="/Food-Cantaring">
          Learn More
        </a>
      </div>

      {/* Service 2 */}
      <div className="service">
        <h2>Convention Hall</h2>
        <img src="\images\company\Kalyan.png" alt="Service 1"   className="rounded-image"/>

        <p>
          Our Convention Hall service provides a versatile and spacious venue for hosting various events such as conferences, seminars, weddings, and social gatherings. Equipped with modern amenities and flexible seating arrangements, our convention hall offers a comfortable and sophisticated environment to accommodate your event needs. Our professional staff ensures seamless event coordination and personalized service to make your occasion memorable and successful.
        </p>
        <a className="regular-link" href="/Convention">
          Learn More
        </a>
      </div>
      <div className="service">
        <h2>Room Booking</h2>
        <img src="\images\company\Room.png" alt="Service 1"   className="rounded-image"/>

        <p>
        Our Room Booking service offers a hassle-free solution for booking accommodations for your events, conferences, or personal travels. With a wide selection of rooms ranging from standard to luxury suites, we provide comfortable and well-appointed accommodations to meet your needs. Our user-friendly booking platform and dedicated customer support ensure a seamless and enjoyable booking experience for our clients.
        </p>
        <a className="regular-link" href="/Room-Booking">
          Learn More
        </a>
      </div>
      <div className="service">
        <h2>suppliers</h2>
        <img src="\images\company\Cantering.png" alt="Service 1"   className="rounded-image"/>

        <p>
        Our Supplier Items service offers a comprehensive selection of high-quality products and materials for your business needs. From office supplies to industrial equipment, we partner with trusted suppliers to deliver reliable and cost-effective solutions to support your operations. Our streamlined ordering process and efficient logistics ensure timely delivery and customer satisfaction.
        </p>
        <a className="regular-link" href="/Suppliers">
          Learn More
        </a>
      </div>

    </Layout>
  )
}
