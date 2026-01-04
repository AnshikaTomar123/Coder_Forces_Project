import React from "react";

function Hero({ onEnroll }) {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Master Java in <span className="text-blue-600">Just 2 Hours</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Join our intensive Java Full Stack live workshop and build
            real-world projects with industry-level guidance.
          </p>

          <div className="mt-8 flex gap-4">
            <button  onClick={onEnroll} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:cursor-pointer">
              Enroll Now
            </button>
            <a href="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf" target="_blank" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center items-center bg-white h-[23rem] w-[33rem] rounded-4xl shadow-2xl">
        <img className="h-[20rem] w-[30rem] rounded-4xl shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySqYCXirnyO3uA481DvKhvLIEEhqATbVpUw&s" alt="" />
          {/* <div className="w-80 h-80 rounded-full bg-blue-100 flex items-center justify-center text-center font-semibold text-blue-700">
            Java Full Stack
            <br />
            Workshop
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
