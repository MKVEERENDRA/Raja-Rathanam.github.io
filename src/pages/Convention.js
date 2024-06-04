// convention-hall.js

import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import './Convention.css';
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Convention() {
  return (
    <Layout>
      <div className="convention-hall">
        <h1 className="title-header-large">Convention Hall</h1>
        <div className="convention-hall-details">
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: '100%', height: '400px' }}
      >
         <SwiperSlide>
    <img src="\images\company\Conve1.png" alt="Slide 1" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </SwiperSlide>
  <SwiperSlide>
    <img src="\images\company\conven2.png" alt="Slide 2" className="rounded-image"style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="\images\company\conven3.png" alt="Slide 3" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
  </SwiperSlide>
      </Swiper>          <p>
            Host your next event in style at our Convention Hall! Our versatile venue is equipped to accommodate a variety of events, from corporate conferences to wedding receptions. With state-of-the-art facilities and impeccable service, we ensure that your event is a resounding success.
          </p>
          <p>
            For bookings and inquiries, please contact us at:
            <br />
    Email: <a href="mailto:mkrveeresh@gmail.com">mkrveeresh@gmail.com</a>
    <br />
    Phone: <a href="tel:+918309754176">+918309754176</a>
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
       
      </div>
    </Layout>
  );
}
