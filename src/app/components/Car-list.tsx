import Image from 'next/image';

const CarList = () => {
  const cars = [
    {
      title: 'Audi A8 3.0 TDI S12',
      
      description: 'Fingerstache flexitarian street art 8-bit waistcoat.',
      imgSrc: 'https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small',
    },
    {
      title: 'Audi A8 3.0 TDI S12',
      
      description: 'Fingerstache flexitarian street art 8-bit waistcoat.',
      imgSrc: '	https://fastly.clutch.ca/e88e870f-0c8d-4091-a16d-dca0b8d97a68.jpg?class=extra_small',
    },
    {
      title: 'Audi A8 3.0 TDI S12',
      
      description: 'Fingerstache flexitarian street art 8-bit waistcoat.',
      imgSrc: 'https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small',
    },
    // {
    //   title: 'San Francisco',
    //   
    //   description: 'Fingerstache flexitarian street art 8-bit waistcoat.',
    //   imgSrc: 'https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small',
    // },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center justify-center w-full mb-20">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-white text-[#18746c] text-center bg-clip-text font-bold text-3xl sm:text-4xl">Popular New Cars</h2>
          </div>
       
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {cars.map((car, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100  rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={car.imgSrc}
                  alt={car.title}
                  width={720}
                  height={400}
                />
                      <div className="px-5 pb-5">
                          
                      {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{car.subtitle}</h3> */}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{car.title}</h2>
                <p className="leading-relaxed text-base">{car.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarList;
