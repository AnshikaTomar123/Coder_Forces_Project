import React from "react";

function MasterSkills({ onEnroll }) {
  const skills = [
    "Core Java Fundamentals",
    "OOPs Concepts",
    "Spring Boot Basics",
    "REST APIs Development",
    "Database Integration",
    "Frontend with React",
    "Project Deployment Basics",
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            What You’ll Master in{" "}
            <span className="text-blue-600">120 Minutes</span>
          </h2>

          <ul className="mt-6 space-y-3">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
            <p className="text-gray-600 mt-1">Students Trained</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">4.8★</h3>
            <p className="text-gray-600 mt-1">Average Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-1">Live Projects</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600 mt-1">Hands-on</p>
          </div>
        </div>

        <button
          onClick={onEnroll}
          className=" bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:cursor-pointer"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
}

export default MasterSkills;
