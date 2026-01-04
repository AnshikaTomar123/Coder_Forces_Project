import React from "react";

function Navbar({ onNavigate }) {
  const menuItems = [
    { label: "HOME", path: "home" },
    { label: "CURRICULUM", path: "roadmap" },
    { label: "PROJECTS", path: "projects" },
    { label: "CERTIFICATION", path: "certification" },
    { label: "REGISTER", path: "register" },
    { label: "FAQ", path: "faq" },
  ];

  return (
    <nav className="w-full h-20 bg-white shadow-sm sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          className="h-20 w-20 rounded-b-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9AXTDBGGoAlv1f9F2iWDycnSo0rl6oy4Ug&s"
          alt="Logo_Image Loading ..."
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.path} onClick={() => onNavigate(item.path)} className="hover:text-blue-600 transition cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onNavigate.bind(null, "register")}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
        >
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
