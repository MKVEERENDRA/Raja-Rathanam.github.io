import React, { useState } from "react"
import Layout from "../components/layout"
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components

import 'swiper/css';
import 'swiper/css/effect-cards';
import ContactForm from "../components/ContactForm";
import "./Rooms.css";
import "./styles.css";
// import required modules
import { EffectCards } from 'swiper/modules';
export default function Projects() {

  return (
    <Layout>
        <div className="room-booking-hall">
        <h1 className="title-header-large">Room Booking Services</h1>
        <div className="room-booking-hall-details">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: '100%', height: '400px' }}
          >
            <SwiperSlide>
              <img src="/images/company/Room.png" alt="Room 1" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/Room2.jpeg" alt="Room 2" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/Room3.jpeg" alt="Room 3" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
          </Swiper>
          <p>
            Discover our exceptional room booking services! Our rooms are designed to provide comfort and luxury, ensuring a memorable stay for our guests. Whether you're traveling for business or leisure, we offer a variety of room options to suit your needs.
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
  )
}
