import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Materi Bahasa", path: "/materi-bahasa" },
  { name: "Latihan Interaktif", path: "/latihan-interaktif" },
  { name: "Mulai Menulis", path: "/mulai-menulis" },
  { name: "Portofolio Saya", path: "/portofolio-saya" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookOpenIcon className="w-10 h-10 text-blue-900" />
          <div>
            <h1 className="text-xl font-bold">Sahabat</h1>
            <p className="font-bold">Bahasa Indonesia</p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-700 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-3 md:hidden">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-900 ${
                  location.pathname === item.path
                    ? "text-blue-900 font-semibold bg-blue-50"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
