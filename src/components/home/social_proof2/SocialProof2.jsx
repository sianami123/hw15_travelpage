import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./testimonial";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./SocialProof2.css";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform has transformed how we handle our efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://avatar.iran.liara.run/public/18",
  },
  {
    id: 2,
    quote:
      "The best solution we've found for our team's needs. Intuitive and powerful.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate",
    image: "https://avatar.iran.liara.run/public/1",
  },

  {
    id: 3,
    quote:
      "Outstanding support and features. It's been a game-changer for our organization.",
    author: "Emma Davis",
    role: "Operations Director",
    company: "DataFlow",
    image: "https://avatar.iran.liara.run/public/45",
  },
];

export default function SocialProof2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.slideTo(1);
          }, 2500);
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
