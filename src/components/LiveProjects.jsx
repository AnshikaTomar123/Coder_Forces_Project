import React from "react";

function LiveProjects() {
  const projects = [
    {
      title: "Java Full Stack E-Commerce",
      desc: "Complete product listing, cart & backend APIs",
    },
    {
      title: "Microservices Banking System",
      desc: "Spring Boot based scalable architecture",
    },
    {
      title: "Admin & Student Portal",
      desc: "Role based dashboard & authentication",
    },
    {
      title: "Distributed Library System",
      desc: "Database + backend integration project",
    },
  ];
  return(
    <section className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What We’ll Build Live
          </h2>
          <p className="text-gray-600 mt-3">
            Real-world projects you can add to your resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LiveProjects;
