import { FaWhatsapp } from 'react-icons/fa';
import { place01 } from "@/assets"
import Image from "next/image"
import Link from "next/link"

const Index = () => {
  return (
    <section className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col justify-center items-center w-full p-4 md:p-10 rounded-lg shadow-md text-center">
            <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300">
              O melhor lugar para começar o dia é aqui
            </h2>
            <p className="text-[24px] font-semibold text-[#322C2B]/80 text-body mb-[24px]"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300">
              Tenha o melhor café da região
            </p>

            <div className="w-full h-[280px] md:h-[400px] bg-place-01 bg-fixed bg-no-repeat bg-cover object-cover bg-center rounded-md"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"></div>

            <p className="text-[#322C2B]/80 text-[20px] font-semibold text-center py-10 w-full max-w-[1100px]"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500">Aqui nós somos apaixonados por café, e todo o processo até ele chegar na sua xícara. Prezamos por produtos de alta qualidade e atendimento excepcional, para garantir que a sua experiência seja o nosso maior valor</p>

            <Link
              href="https://api.whatsapp.com/send/?phone=5511954439424&text=Ola%21+Vim+pelo+site%2C+gostaria+de+reservar+uma+mesa.&type=phone_number&app_absent=0"
              className="text-[16px] mx-auto w-fit group text-center inline-flex justify-center items-center gap-2 transition-all whitespace-nowrap
              py-4 px-8 rounded-[6px] bg-coffee-light text-white font-bold uppercase ease-linear"
              target=" _blank"
              title="Chamar no Whatsapp"
              data-aos="fade-down"
              data-aos-delay="900"
              data-aos-duration="900"
            >
              <span className="whitespace-nowrap">Fazer reserva</span>
              <FaWhatsapp
                className=" group-hover:translate-x-2 transition-all ease-linear"
                size={28}
              />{' '}
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Index