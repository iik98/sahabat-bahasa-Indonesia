import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Materi Bahasa", path: "/materi-bahasa" },
  { name: "Latihan Interaktif", path: "/latihan-interaktif" },
  { name: "Mulai Menulis", path: "/mulai-menulis" },
  { name: "Portofolio Saya", path: "/portofolio-saya" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <div className="flex">
        <span role="img" aria-label="book">
          <BookOpenIcon className="size-14 text-blue-900" />
        </span>{" "}
        <div>
          <h1 className="text-xl font-bold ">Sahabat</h1>
          <p className=" font-bold ">Bahasa Indonesia</p>
        </div>
      </div>
      <ul className="flex gap-6 text-sm">
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
    </nav>
  );
}
