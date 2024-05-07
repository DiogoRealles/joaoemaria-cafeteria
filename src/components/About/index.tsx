import { cup01 } from '@/assets';
import Image from 'next/image';

const Index = () => {
  return (
    <section id="about" className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]">
      <div className="container mx-auto px-4 md:px-0">
        <div
          className="overflow-hidden rounded-lg shadow-md w-full mx-auto bg-white flex flex-col md:flex-row items-center justify-between"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          <div className="flex-col md:flex-row w-full flex items-center justify-between">
            <div
              className="w-full p-4 md:p-10"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase">
                Sobre
              </h2>
              <p className="text-[24px] md:text-[32px] font-title text-[#322C2B] mb-[6px] font-bold">
                Nossa cafeteria
              </p>

              <p className="text-[20px] font-semibold text-[#322C2B]/80 text-body">
                Aqui nós somos apaixonados por café, e todo o processo até ele
                chegar na sua xícara. Prezamos por produtos de alta qualidade e
                atendimento excepcional, para garantir que a sua experiência
                seja o nosso maior valor
              </p>
            </div>
            <div
              className="w-full h-[450px] bg-cup-0 bg-full bg-no-repeat bg-center"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <Image
                className="w-full h-full bg-cover object-cover"
                src={cup01}
                alt=""
                width={450}
                height={630}
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
