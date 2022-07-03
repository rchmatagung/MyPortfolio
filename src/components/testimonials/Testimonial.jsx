import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Winona Maharani",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est mollitia, nesciunt possimus rem animi ipsam quo quas quam delectus facilis dolores consequuntur pariatur ipsa quod aspernatur officiis repellendus voluptates.",
  },
  {
    avatar: AVTR2,
    name: "Ridha Aisyiyah Ryandani",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est mollitia, nesciunt possimus rem animi ipsam quo quas quam delectus facilis dolores consequuntur pariatur ipsa quod aspernatur officiis repellendus voluptates.",
  },
  {
    avatar: AVTR3,
    name: "Muhammad Naufal Ashiddiq",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est mollitia, nesciunt possimus rem animi ipsam quo quas quam delectus facilis dolores consequuntur pariatur ipsa quod aspernatur officiis repellendus voluptates.",
  },
  {
    avatar: AVTR4,
    name: "Sanjaya Ilham Kurnia",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est mollitia, nesciunt possimus rem animi ipsam quo quas quam delectus facilis dolores consequuntur pariatur ipsa quod aspernatur officiis repellendus voluptates.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
