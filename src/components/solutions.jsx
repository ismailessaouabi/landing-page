import React from 'react';

export const Solutions = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row px-6 lg:px-32 py-12 justify-between items-center bg-polor">
      
      {/* Image */}
      <img 
        className="max-w-full lg:max-w-[500px] mb-8 lg:mb-0" 
        src="/images/img2.png" 
        alt="Solutions" 
      />

      {/* Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-5">
          Simple{" "}
          <span className="text-orange-600">
            Solutions
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          An advertising agency helps businesses promote their products or services by creating strategic and creative campaigns.
        </p>

        {/* Steps */}
        <ul className="space-y-6">
          {[
            { title: "Contact Us", desc: "Contact us to boost your brand" },
            { title: "Consult", desc: "Always available for your questions" },
            { title: "Place Order", desc: "Easy and fast ordering process" },
            { title: "Payment", desc: "Secure and reliable transactions" },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex justify-center items-center text-xl font-bold text-white shadow-md">
                {index + 1}
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <button className="bg-orange-600 px-6 py-2 rounded-lg text-white shadow-md shadow-orange-200 hover:bg-orange-700 transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-orange-500 px-6 py-2 rounded-lg text-orange-600 hover:bg-orange-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
