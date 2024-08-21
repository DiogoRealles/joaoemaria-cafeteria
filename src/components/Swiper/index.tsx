'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Index = () => {
  const swiperRef = useRef() as any;

  return (
    <div
      className="py-10 md:pt-20"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <div className="flex gap-5 item-center justify-end mb-[16px]">
        <button
          className="w-8 h-8 md:w-12 md:h-12 bg-coffee-light rounded-full flex items-center justify-center hover:bg-coffee-light/80 transition-all ease-linear text-white hover:text-white/80"
          aria-label="Prev"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <FaChevronLeft className="" size={18} />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 bg-coffee-light rounded-full flex items-center justify-center hover:bg-coffee-light/80 transition-all ease-linear text-white hover:text-white/80"
          aria-label="Next"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <FaChevronRight className="" size={18} />
        </button>
      </div>

      <Swiper
        className="md:!px-3 !py-2"
        slidesPerView={1}
        spaceBetween={24}
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
            spaceBetween: 24,
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          1250: {
            slidesPerView: 1.7,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide className="h-full p-5 shadow-md rounded-[16px] mb-3">
          <div className="flex items-center gap-2 mb-5">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaStar className="text-yellow-600" size={20} key={index} />
              ))}
          </div>

          <p className="font-body font-medium text-[16px] text-[#322C2B]/80 mb-5 grow">
            Local extremamente agradável, atendimento sensacional, café e doces
            estavam uma delícia.
          </p>
          <Image
            className="w-[60px] h-[60px] rounded-full bg-cover object-cover align-middle"
            src="/client-01.png"
            alt=""
            width={640}
            height={420}
            quality={90}
          />

          <p className="text-xl text-[#322C2B]/80  font-body font-semibold mb-2">
            Samantha Pereira
          </p>
          <span className="inline-block font-body font-normal text-sm text-[#322C2B]/80 capitalize">
            alguns dias atrás
          </span>
        </SwiperSlide>
        <SwiperSlide className="h-full p-5 shadow-md rounded-[16px]">
          <div className="flex items-center gap-2 mb-5">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaStar className="text-yellow-600" size={20} key={index} />
              ))}
          </div>

          <p className="font-body font-medium text-[16px] text-[#322C2B]/80 mb-5 grow">
            Entrei pra comentar como fui bem atendida pelo Pedro e pela Livia!
            Além de achar muito bom ter um ambiente legal no bairro pra poder
            trabalhar, conversar sem a barulheira da rua. O ambiente è muito
            gostoso e quero voltar!
          </p>
          <Image
            className="w-[60px] h-[60px] rounded-full bg-cover object-cover align-middle"
            src="/client-02.png"
            alt=""
            width={640}
            height={420}
            quality={90}
          />

          <p className="text-xl text-[#322C2B]/80  font-body font-semibold mb-2">
            Mari Ballejo
          </p>
          <span className="inline-block font-body font-normal text-sm text-[#322C2B]/80 capitalize">
            alguns dias atrás
          </span>
        </SwiperSlide>
        <SwiperSlide className="h-full p-5 shadow-md rounded-[16px]">
          <div className="flex items-center gap-2 mb-5">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaStar className="text-yellow-600" size={20} key={index} />
              ))}
          </div>

          <p className="font-body font-medium text-[16px] text-[#322C2B]/80 mb-5 grow">
            Fui conhecer hoje a cafeteira, muito lindinha e aconchegante. E como
            tudo começa pelo atendimento, trata-se de um atendimento
            extremamente gentil, o café é delicioso, pedi a opção João e Maria,
            um lanche de queijo curado e uma banoffee, estava tudo perfeito. Da
            de dez a zero em muita cafeteria de franquia famosinha por aí.
          </p>
          <Image
            className="w-[60px] h-[60px] rounded-full bg-cover object-cover align-middle"
            src="/client-03.png"
            alt=""
            width={640}
            height={420}
            quality={90}
          />

          <p className="text-xl text-[#322C2B]/80  font-body font-semibold mb-2">
            Beatriz Lemos
          </p>
          <span className="inline-block font-body font-normal text-sm text-[#322C2B]/80 capitalize">
            algumas semanas atrás
          </span>
        </SwiperSlide>
        <SwiperSlide className="h-full p-5 shadow-md rounded-[16px]">
          <div className="flex items-center gap-2 mb-5">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaStar className="text-yellow-600" size={20} key={index} />
              ))}
          </div>

          <p className="font-body font-medium text-[16px] text-[#322C2B]/80 mb-5 grow">
            Ótima cafeteria e com vibe bem aconchegante. Praticamente foi um
            Brunch rsrs... Pedimos um Ice Coffe e Chocolate Cremoso que estávam
            deliciosos; Os Toxtex, além do Cappuccino Gatinho que é muito
            bonitinho e um Mocha com Tortellete de limão e um salgado recheado
            com 3 queijos e alho poró A visita com certeza valeu a pena e
            voltaremos mais vezes. Parabéns a Renata e seu noivo, gostamos muito
          </p>
          <Image
            className="w-[60px] h-[60px] rounded-full bg-cover object-cover align-middle"
            src="/client-04.png"
            alt=""
            width={640}
            height={420}
            quality={90}
          />

          <p className="text-xl text-[#322C2B]/80  font-body font-semibold mb-2">
            Diogo Gomes
          </p>
          <span className="inline-block font-body font-normal text-sm text-[#322C2B]/80 capitalize">
            Mês passado
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Index;
