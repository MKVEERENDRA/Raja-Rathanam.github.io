import React from "react"
import Layout from "../components/layout"
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components

import 'swiper/css';
import 'swiper/css/effect-cards';
import ContactForm from "../components/ContactForm";

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
export default function FAQ() {
  return (
    <Layout>
     <div className="suppliers-hall">
        <h1 className="title-header-large">Supplier Services</h1>
        <div className="suppliers-hall-details">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: '100%', height: '400px' }}
          >
            <SwiperSlide>
              <img src="/images/company/supplier.jpeg" alt="Slide 1" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/supplier2.jpeg" alt="Slide 2" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/supplier3.jpeg" alt="Slide 3" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
          </Swiper>
          <p>
            Partner with us for reliable and efficient supplier services! Our network ensures the timely delivery of high-quality products tailored to meet your business needs. From raw materials to finished goods, we provide comprehensive solutions to support your operations.
          </p>
          <p>
            For partnerships and inquiries, please contact us at:
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
