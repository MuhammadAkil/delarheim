'use client';
import React from 'react';

const WhyUs = () => {

    const cards = [
  {
    title: "Free Documentation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#e7852e" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 15v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
        <path d="M5 15h14l1 -3h-16l1 3"></path>
        <path d="M3 8l1 -4h16l1 4"></path>
        <path d="M5 4l2 1v2h10V5l2 -1"></path>
      </svg>
    ),
    linkText: "No Hidden Charges",
    description: "How all this mistakens idea off ut denouncing pleasures and praisings ut pain.",
    listItems: ["Professional Finance", "Affordable EMI", "Less Interest Rate"],
  },
  {
    title: "Auto Loan Facility",
    icon: (
       <svg fill="#e7852e" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.783 237.783" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 237.783 237.783"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m42.735,50.071h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.934h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.935h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.935h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6z"></path> <path d="m42.735,62.071h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"></path> <path d="m42.735,88.005h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"></path> <path d="m42.735,113.94h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"></path> <path d="m42.735,139.875h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"></path> <path d="m237.783,98.361c0-1.591-0.632-3.117-1.757-4.243l-16.356-16.355c-1.125-1.125-2.651-1.757-4.243-1.757s-3.117,0.632-4.243,1.757l-28.756,28.756v-88.117c0-3.313-2.686-6-6-6h-170.428c-3.314,0-6,2.687-6,6v200.979c0,3.313 2.686,6 6,6h170.429c3.314,0 6-2.687 6-6v-63.18l53.597-53.597c1.125-1.125 1.757-2.651 1.757-4.243zm-225.783,115.02v-188.979h158.429v94.117l-35.291,35.291h-92.403c-3.313,0-6,2.687-6,6s2.687,6 6,6h80.403l-1.033,1.033c-0.777,0.777-1.326,1.753-1.586,2.821l-4.157,17.05h-25.148c-3.313,0-6,2.687-6,6s2.687,6 6,6c0,0 29.714,0 29.86,0 0.473,0 0.95-0.056 1.421-0.171l21.629-5.273c1.068-0.26 2.044-0.809 2.821-1.586l23.482-23.482v45.181h-158.427zm127.649-31.374l-10.408,2.538 2.538-10.408 83.648-83.648 7.871,7.871-83.649,83.647z"></path> </g> </g></svg>
    ),
    linkText: "No Hidden Charges",
    description: "Denouncing pleasures and ut praisings pains was born work will gives you.",
    listItems: ["Quick Documentation", "Very Confidential", "On Time Processing"],
  },
  {
    title: "Customer Support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headset" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#e7852e" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 10v4a4 4 0 0 0 8 0v-4"></path>
        <path d="M5 10v-1a4 4 0 0 1 8 0v1"></path>
        <path d="M5 10a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4v-1"></path>
        <path d="M19 10a4 4 0 0 1 4 4v1a4 4 0 0 1 -4 4v-1"></path>
      </svg>
    ),
    linkText: "24/7 Online Support",
    description: "Idea of denouncing pleasure ut and praisings pain born and system and expound.",
    listItems: ["Experienced Team", "Humble Talk", "Quick Response"],
  },
];

    return (
        <div className="">
            <section
                id="features"
                className="mx-auto max-w-screen-lg relative block px-6 py-10 md:pb-20 md:pt-[2rem] md:px-10"
            >
                <div className="relative lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
                    <span className="text-[#3d3838] my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        Why Choose Us
                    </span>
   {/* <div className="relative lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
  <h2 className="block w-full bg-gradient-to-b from-white to-white bg-clip-text text-[#3d3838] text-center font-bold text-3xl sm:text-4xl">
    4.8 stars, 2000+ reviews
  </h2>
  
</div> */}
  <span className="absolute top-[55px] left-1/2 transform -translate-x-1/2 w-[140px] h-[2px] bg-[#6F68EC]">
  </span>

                    <h2 className="mt-8 text-center block w-full bg-gradient-to-b from-white to-white bg-clip-text font-bold text-[#0f0f0f] text-3xl sm:text-4xl">
Your Trusted Car Partner






                    </h2>
                 <p className="mx-auto my-4 max-w-xl text-center font-medium text-[#0f0f0f]">
  Simplifying the car buying, selling, and trading process with a vast inventory, great pricing, and top-notch service.
</p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    

      {cards.map((card, index) => (
        <div key={index} className="rounded-md bg-white shadow-lg p-8 shadow transition-all duration-300">
          <div className="button-text flex h-12 w-12 items-center justify-center rounded-md border border-[#e7852e]">
            {card.icon}
          </div>
          <h3 className="mt-6 mb-4 text-black">{card.title}</h3>
          <a href="#" className="text-black">
            {card.linkText}
          </a>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
            {card.description}
          </p>
          <ul className="text-black list-disc list-inside mt-3">
            {card.listItems.map((item, idx) => (
              <li key={idx} className="font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
   
                </div>

            </section>
        </div>
    );
};

export default WhyUs;
