import React from "react"
import Layout from "../components/layout"
import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/css';
import 'swiper/css/effect-cards';
import ContactForm from "../components/ContactForm";

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Company() {
  return (
    <Layout>

<div className="catering-hall">
        <h1 className="title-header-large">Catering Services</h1>
        <div className="catering-hall-details">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: '100%', height: '600px' }}
          >
            <SwiperSlide>
              <img src="/images/company/food.jpeg" alt="Slide 1" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/food2.jpeg" alt="Slide 2" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/food5.jpeg" alt="Slide 3" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/company/food4.jpeg" alt="Slide 3" className="rounded-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
          </Swiper>
          <p>
            Experience exceptional catering services for your next event! Our team is dedicated to providing delicious and beautifully presented food that will delight your guests. From corporate events to private parties, we offer a wide range of menu options tailored to your preferences.
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
