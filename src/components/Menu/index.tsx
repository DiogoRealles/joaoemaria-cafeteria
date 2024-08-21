const Index = () => {
  return (
    <section id="menu" className="pt-[0px] pb-[40px] md:pt-[0px] md:pb-[80px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div
            className="rounded-lg p-4 md:p-10 shadow-md w-full"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase">
              Nossos Café
            </h2>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Espresso <br />
                  <p className="text-[#322C2B]/80 text-[16px]">Duplo (100ml)</p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 10,99
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Machiatto <br />
                  <p className="text-[#322C2B]/80 text-[16px]">
                    Regular (50ml)
                  </p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 6,99
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Cappuccino <br />
                  <p className="text-[#322C2B]/80 text-[16px]">
                    Canela ou Chocolate (170ml)
                  </p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 11,99
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Café com leite <br />
                  <p className="text-[#322C2B]/80 text-[16px]">Médio (170ml)</p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 8,50
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Mocha <br />
                  <p className="text-[#322C2B]/80 text-[16px]">
                    Canela ou Chocolate (170ml)
                  </p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 13,50
                </p>
              </li>
            </ul>
          </div>
          <div
            className="rounded-lg p-4 md:p-10 shadow-md w-full"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <h2 className="text-[32px] md:text-[50px] font-title text-[#322C2B] mb-[8px] font-bold uppercase">
              Bebidas Geladas
            </h2>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Ice coffee <br />
                  <p className="text-[#322C2B]/80 text-[16px]">Café gelado</p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 15,99
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Chocolate <br />
                  <p className="text-[#322C2B]/80 text-[16px]">
                    Chocolate (100ml)
                  </p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 13,50
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Soda Italiana <br />
                  <p className="text-[#322C2B]/80 text-[16px]">...</p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 12,50
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Sucos <br />
                  <p className="text-[#322C2B]/80 text-[16px]">
                    Diversos sabores
                  </p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 6,50
                </p>
              </li>
              <li className="flex justify-between">
                <div className="text-[24px] text-[#322C2B] text-body font-semibold">
                  Coca-Cola <br />
                  <p className="text-[#322C2B]/80 text-[16px]">350ml</p>
                </div>
                <p className="text-[#322C2B]/80 text-[18px] font-bold">
                  R$ 7,50
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
