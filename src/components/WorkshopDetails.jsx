import React from "react";

function WorkshopDetails() {
  const details = [
    { title: "Batch Starts", value: "Live Today" },
    { title: "Duration", value: "120 Minutes" },
    { title: "Mode", value: "Live Online" },
    { title: "Level", value: "Beginner Friendly" },
    { title: "Language", value: "English" },
    { title: "Certificate", value: "Yes" },
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Essential Workshop Details
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know before joining the live session
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {details.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-sm text-gray-500">{item.title}</h3>
              <p className="mt-2 font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;
