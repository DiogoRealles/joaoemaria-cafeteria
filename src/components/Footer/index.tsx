// import React from 'react'

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaRegClock,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';
import { IoIosPin } from 'react-icons/io';

const Index = () => {
  return (
    <footer id="follow" className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[0px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="">
            <div className="flex flex-col">
              <div className="w-[60px] h-[60px] overflow-hidden rounded-full mb-4">
                <Image
                  className="w-full h-full"
                  src="/logo.png"
                  alt=""
                  width={280}
                  height={280}
                  quality={90}
                />
              </div>
              <p className="text-[#322C2B]/80 font-semibold text-[16px] mb-[18px]">
                Aqui nós somos apaixonados por café, e todo o processo até ele
                chegar na sua xícara. Prezamos por produtos de alta qualidade e
                atendimento excepcional, para garantir que a sua experiência
                seja o nosso maior valor
              </p>
              <ul className="flex gap-5">
                <li className="text-[32px]">
                  <Link
                    className="text-[#322C2B] hover:bg-coffee-light/80"
                    href="https://www.instagram.com/joaoemaria.cafeteria/"
                    target="_blank"
                    title="Ir para Instagram João & Maria - Cafeteria"
                    aria-label="Ir para Instagram João & Maria - Cafeteria"
                  >
                    <FaInstagram className="text-[#322C2B] hover:scale-125 ease-linear" />
                  </Link>
                </li>
                <li className="text-[32px]">
                  <Link
                    className="text-[#322C2B] hover:bg-coffee-light/80"
                    href="https://www.instagram.com/joaoemaria.cafeteria/"
                    target="_blank"
                    title="Ir para Facebook João & Maria - Cafeteria"
                    aria-label="Ir para Facebook João & Maria - Cafeteria"
                  >
                    <FaFacebookF className="text-[#322C2B] hover:scale-125 ease-linear" />
                  </Link>
                </li>
                <li className="text-[32px]">
                  <Link
                    className="text-[#322C2B] hover:bg-coffee-light/80"
                    href="https://api.whatsapp.com/send/?phone=5511954439424&text=Ola%21+Vim+pelo+site%2C+gostaria+de+agendar+uma+prova.&type=phone_number&app_absent=0"
                    target="_blank"
                    title="Ir para WhatsApp João & Maria - Cafeteria"
                    aria-label="Ir para WhatsApp João & Maria - Cafeteria"
                  >
                    <FaWhatsapp className="text-[#322C2B] hover:scale-125 ease-linear" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h4 className="text-[#322C2B] uppercase font-bold mb-[8px] md:mb-[40px] text-[24px] font-title">
              Contato
            </h4>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-4">
                <IoIosPin className="text-[#322C2B] text-[32px]" />
                <p className="text-[#322C2B]/80 font-semibold">
                  R. José Rodrigues Gomes, 15A - Jardim São Luís, SP
                </p>
              </li>
              <li className="flex gap-4">
                <FaPhoneAlt className="text-[#322C2B] text-[22px]" />
                <p className="text-[#322C2B]/80 font-semibold">
                  (11) 9 5443-9424
                </p>
              </li>
              <li className="flex gap-4">
                <MdAlternateEmail className="text-[#322C2B] text-[22px]" />
                <p className="text-[#322C2B]/80 font-semibold">
                  joaoemaria.cafeteria@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[#322C2B] uppercase font-bold mb-[8px] md:mb-[40px] text-[24px] font-title">
              Horário de funcionamento
            </h4>
            <ul className="">
              <li className="flex gap-4">
                <FaRegClock className="text-[#322C2B] text-[22px]" />
                <div className="w-full">
                  <div className="">
                    <div className="flex justify-between w-full">
                      <p className="text-[#322C2B]/80 font-semibold">
                        Seg - Sáb
                      </p>
                      <p className="text-[#322C2B]/80 font-semibold">
                        9h - 18h
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-between w-full">
                      <p className="text-[#322C2B]/80 font-semibold">
                        Dom - Feriados
                      </p>
                      <p className="text-[#322C2B]/80 font-semibold">
                        8h - 12h
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[#322C2B] uppercase font-bold mb-[8px] md:mb-[40px] text-[24px] font-title">
              Instagram
            </h4>

            <ul className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2">
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-01.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-02.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-03.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-04.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-05.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
              <li className="w-full h-full overflow-hidden rounded-md">
                <Link
                  href="https://www.instagram.com/joaoemaria.cafeteria/"
                  target="_blank"
                  title="Imagem Instagram João & Maria - Cafeteria"
                  aria-label="Imagem Instagram João & Maria - Cafeteria"
                >
                  <Image
                    className="w-full h-full"
                    src="/instagram-06.webp"
                    alt=""
                    width={280}
                    height={280}
                    quality={90}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="group cursor-pointer text-center text-[16px] text-[#322C2B]/80 w-fit mx-auto py-5">
          Desenvolvido por:{' '}
          <Link
            className="group-hover:underline underline-offset-4"
            href="https://diogorealles.github.io/"
            target="_blank"
          >
            <strong className="text-[#322C2B]/80">
              Diogo Realles - Front-end
            </strong>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Index;
