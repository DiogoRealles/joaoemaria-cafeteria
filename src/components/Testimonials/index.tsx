import Swiper from '@/components/Swiper';

const Index = () => {
  return (
    <section
      id="testimonials"
      className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]"
    >
      <div
        className="container mx-auto px-4 md:px-0"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="300"
      >
        <h2 className="text-[50px] font-title text-[#322C2B] font-bold uppercase">
          Depoimentos
        </h2>
        <p className="text-[24px] font-semibold text-[#322C2B]/80 text-body mb-[24px]">
          O que nossos clientes dizem sobre nossos cafés
        </p>

        <Swiper />
      </div>
    </section>
  );
};

export default Index;
