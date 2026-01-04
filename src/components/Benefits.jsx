import React from 'react'

function Benefits() {
  const benefits = [
    "Industry-Level Live Projects",
    "Resume & Portfolio Boost",
    "Hands-on Coding Experience",
    "Expert Mentorship",
    "Completion Certificate",
    "Career Guidance"
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Exclusive Benefits for Students
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <p className="font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits
