import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function QuoteSlider({ data }) {
  return (
    <section className="quoteSlider bg-gray-100">
      <div className="container">
        <div className="intro text-center" data-aos="fade-up">
          <h2 className="!font-[600]">What Our Learners Say</h2>
        </div>
        <div className="sliderWrap" data-aos="fade-up">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              595: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item p-[20px] bg-white shadow rounded-[10px] h-full">
                  <p className="!text-[16px]">{item?.desc}</p>
                  <div className="ratingWrap flex text-yellow-500 my-[10px]">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    ))}
                  </div>
                  <h4 className="!text-[16px] !font-[600]">{item?.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
