import React from 'react'

function Certificate({onEnroll}) {
  return (
    <section className="bg-gray-50 py-40">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Elevate Your Portfolio in Just 120 Minutes
          </h2>
          <p className="text-gray-600 mt-4">
            Get a verified certificate after completing the live workshop
            and showcase it on your resume & LinkedIn.
          </p>

          <button onClick={onEnroll} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer">
            Join Workshop
          </button>
        </div>

        {/* Right */}
        <div className="flex justify-center items-center bg-white h-[15rem] w-[23rem] rounded-4xl shadow-2xl">
          <img src="https://amp.gdoc.io/uploads/blue-gold-certificate-free-google-docs-template-t-984x712.jpg" alt="Certificate Preview" className="w-80 h-52 bg-white border rounded-xl shadow flex items-center justify-center" />
        </div>

      </div>
    </section>
  )
}

export default Certificate
