'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  const swiperRef = useRef() as any;

  return (
    <section
      id="coffees"
      className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div
          className="container mx-auto px-4 md:px-0"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          <h2 className="text-[50px] font-title text-[#322C2B] font-bold uppercase">
            Café em casa
          </h2>
          <p className="text-[24px] font-semibold text-[#322C2B]/80 text-body mb-[24px]">
            Tenha nossos cafés no conforto da sua casa
          </p>
        </div>

        <div className="flex gap-5 item-center justify-end mb-[16px]">
          <button
            className="w-8 h-8 md:w-12 md:h-12 bg-coffee-light rounded-full flex items-center justify-center hover:bg-coffee-light/80 transition-all ease-linear text-white hover:text-white/80"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <FaChevronLeft className="" size={18} />
          </button>
          <button
            className="w-8 h-8 md:w-12 md:h-12 bg-coffee-light rounded-full flex items-center justify-center hover:bg-coffee-light/80 transition-all ease-linear text-white hover:text-white/80"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <FaChevronRight className="" size={18} />
          </button>
        </div>

        <Swiper
          className="md:!px-0 !py-2"
          slidesPerView={1}
          spaceBetween={18}
          speed={800}
          autoHeight
          loop={true}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            460: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-01.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Metallic <br /> Coffee
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 16,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-02.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Dummya <br /> Coffee
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 18,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-03.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Coffea <br /> Canephor
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 20,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-04.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Coffee <br /> Mastems Specialty
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 19,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-05.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Coffee <br /> Beans People
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 20,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-full p-0 shadow-md rounded-[16px]">
            <Link className="group" href="">
              <div className="overflow-hidden w-full h-[366px]">
                <Image
                  className="group-hover:scale-110 transition-all ease-linear w-full h-full bg-cover object-cover align-middle"
                  src="/coffee-06.webp"
                  alt=""
                  width={310}
                  height={310}
                  quality={90}
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="font-body font-medium text-[24px] text-[#322C2B]/80 ">
                  Vacuum <br /> Coffee
                </p>

                <p className="text-[22px] text-[#322C2B]/80 font-body font-semibold">
                  R$ 22,99
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Index;
