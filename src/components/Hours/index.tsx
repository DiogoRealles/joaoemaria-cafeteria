import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Index = () => {
  return (
    <section
      className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="300"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="rounded-lg p-6 md:px-0 md:py-6 shadow-md w-full mx-auto -mt-[60px] bg-white flex items-start justify-center flex-col md:flex-row gap-10 ">
          <div
            className="border-b-2 md:border-b-0 md:border-r border-[#322C2B]/10 md:px-6 w-fit pb-8"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase">
              Pegue um copo de café
            </h2>
            <p className="text-[20px] font-semibold text-[#322C2B]/80 text-body mb-[24px] w-full max-w-[700px]">
              Aqui nós somos apaixonados por café, e todo o processo até ele
              chegar na sua xícara. Prezamos por produtos de alta qualidade e
              atendimento excepcional, para garantir que a sua experiência seja
              o nosso maior valor
            </p>

            <Link
              href="https://api.whatsapp.com/send/?phone=5511954439424&text=Ola%21+Vim+pelo+site%2C+gostaria+de+reservar+uma+mesa.&type=phone_number&app_absent=0"
              className="text-[16px] w-fit group text-center inline-flex justify-center items-center gap-2 transition-all whitespace-nowrap
              py-4 px-8 rounded-[6px] bg-coffee-light text-white font-bold uppercase ease-linear"
              target=" _blank"
              title="Chamar no Whatsapp"
            >
              <span className="whitespace-nowrap">Fazer reserva</span>
              <FaWhatsapp
                className=" group-hover:translate-x-2 transition-all ease-linear"
                size={28}
              />{' '}
            </Link>
          </div>
          <div
            className="px-0 md:px-6 w-full md:w-[35%]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase">
              Nosso horário
            </h2>
            <div className="flex flex-col gap-2">
              <div className="text-[22px] font-semibold text-[#322C2B]/80 text-body flex gap-2 justify-between items-center whitespace-nowrap">
                <p className="px-0">Seg - Sáb</p>
                <div className="border-b-2 border-dotted border-[#322C2B] w-full"></div>
                <p className="px-0">9h - 18h</p>
              </div>
              <div className="text-[22px] font-semibold text-[#322C2B]/80 text-body flex gap-2 justify-between items-center whitespace-nowrap">
                <p className="px-0">Dom - Feriados</p>
                <div className="border-b-2 border-dotted border-[#322C2B] w-full"></div>

                <p className="px-0">8h - 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
