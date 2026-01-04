import React from 'react'

function Roadmap() {
    const roadmap = [
  { time: "0 - 30 Min", topic: "Java Fundamentals & OOPs" },
  { time: "30 - 60 Min", topic: "Spring Boot & REST APIs" },
  { time: "60 - 90 Min", topic: "Database + Backend Logic" },
  { time: "90 - 120 Min", topic: "Frontend + Deployment" },
];
  return (
    <section className="bg-gray-50 py-40">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          120 Minutes of Intensive Learning
        </h2>

        <div className="space-y-4">
          {roadmap.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-5 flex justify-between"
            >
              <span className="font-semibold text-blue-600">
                {item.time}
              </span>
              <span className="text-gray-700">
                {item.topic}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Roadmap