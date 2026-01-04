import React from 'react'

function FAQ() {
  const faqs = [
    "Is this workshop beginner friendly?",
    "Will I get a certificate?",
    "Is this a live session?",
    "Will recordings be available?",
  ]

  return (
    <section className="bg-white py-40">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Got Questions?
        </h2>

        <div className="space-y-4">
          {faqs.map((q, i) => (
            <div key={i} className="border rounded-lg p-4">
              <p className="font-medium text-gray-800">{q}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
