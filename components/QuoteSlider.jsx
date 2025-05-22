import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';


export default function QuoteSlider({ data }) {

const slickSliderRef = useRef(null);

const settings = {
		dots: true,
    	arrows: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
    	centerPadding: '0',
		centerMode: true,
		// initialSlide: slider,
		responsive: [
			{
				breakpoint: 2499,
				settings: {
					centerPadding: '0',
				},
			},
			{
				breakpoint: 1600,
				settings: {
					centerPadding: '0',
				},
			},
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '0',
				},
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '0',
				},
			},
      	{
				breakpoint: 767,
				settings: {
					centerPadding: '0',
          	slidesToShow: 2,
				},
			},
      {
				breakpoint: 595,
				settings: {
					centerPadding: '0',
          	slidesToShow: 1,
				},
			},
		],
	};
  return (
    <section className="quoteSlider bg-gray-50">
      <div className="container">
        <div className="intro text-center" data-aos="fade-up">
          <h2 className='!font-[600]'>What Our Learners Say</h2>
        </div>
        <div className="sliderWrap " data-aos="fade-up">
          <Slider ref={slickSliderRef} {...settings}>
            {
              data?.map((item, i) => {
                return (
                  <div key={i} className="item p-[20px] bg-white shadow rounded-[10px]">
                    <p className='!text-[16px]'>{item?.desc}</p>
                    <div className="ratingWrap flex text-yellow-500 my-[10px]">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    </div>
                    <h4 className='!text-[16px] !font-[600]'>{item?.name}</h4>
                  </div>
                )

              })
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}
