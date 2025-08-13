import { Link } from "react-router-dom";
import {
  PencilSquareIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { JSX } from "react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Selamat datang di Sahabat Bahasa Indonesia
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Platform daring untuk belajar dan mengasah keterampilan bahasa
            Indonesia
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              title="Materi Bahasa"
              desc="Pelajari berbagai konsep dan kaidah bahasa Indonesia"
              icon={<ServerStackIcon className="size-14 text-blue-900" />}
              to="/materi-bahasa"
            />
            <Feature
              title="Latihan Interaktif"
              desc="Uji kemampuanmu dengan soal-soal interaktif"
              icon={
                <ClipboardDocumentListIcon className="size-14 text-blue-900" />
              }
              to="/latihan-interaktif"
            />
            <Feature
              title="Mulai Menulis"
              desc="Kembangkan keterampilan menulismu dengan bantuan prompt"
              icon={<PencilSquareIcon className="size-14 text-blue-900" />}
              to="/mulai-menulis"
            />
            <Feature
              title="Portofolio Saya"
              desc="Lacak dan kelola hasil tulisanmu dalam satu tempat"
              icon={<UserIcon className="size-14 text-blue-900" />}
              to="/portofolio-saya"
            />
          </div>
        </div>
        <div className=" md:block">
          <img
            src="/banner.jpg"
            alt="Belajar Bahasa"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  title,
  desc,
  icon,
  to,
}: {
  title: string;
  desc: string;
  icon: JSX.Element; // ✅ FIXED: not string, but JSX.Element
  to: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition hover:bg-gray-100"
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </Link>
  );
}
