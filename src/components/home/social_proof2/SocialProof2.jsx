import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
      "This platform has transformed how we handle our workflow. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
  },
  {
    id: 2,
    quote:
      "The best solution we've found for our team's needs. Intuitive and powerful.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate",
  },
  {
    id: 3,
    quote:
      "Outstanding support and features. It's been a game-changer for our organization.",
    author: "Emma Davis",
    role: "Operations Director",
    company: "DataFlow",
  },
];

export default function SocialProof2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
