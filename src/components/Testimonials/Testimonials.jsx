import React from "react";
import "./Testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const sampleData = [
  {
    avatar: "assests/avatar1.jpg",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dignissimos neque. Eveniet voluptates commodi provident iure deserunt vel sit nesciunt, facere corrupti voluptatibus nostrum odit voluptas magni vero aliquam.",
  },
  {
    avatar: "assests/avatar2.jpg",
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dignissimos neque. Eveniet voluptates commodi provident iure deserunt vel sit nesciunt, facere corrupti voluptatibus nostrum odit voluptas magni vero aliquam.",
  },
  {
    avatar: "assests/avatar3.jpg",
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dignissimos neque. Eveniet voluptates commodi provident iure deserunt vel sit nesciunt, facere corrupti voluptatibus nostrum odit voluptas magni vero aliquam.",
  },
  {
    avatar: "assests/avatar4.jpg",
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dignissimos neque. Eveniet voluptates commodi provident iure deserunt vel sit nesciunt, facere corrupti voluptatibus nostrum odit voluptas magni vero aliquam.",
  },
];

const Testimonials = () => {
  return (
    <section id="textimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {sampleData.map((data, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={data.avatar} alt={data.name} />
            </div>
            <h5 className="client__name">{data.name}</h5>
            <small className="client__review">{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
