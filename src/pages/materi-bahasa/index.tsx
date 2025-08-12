import { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

type Module = {
  id: number;
  title: string;
  content: string;
};

const modules: Module[] = [
  {
    id: 1,
    title: "Kaidah Tata Bahasa",
    content: `
Bahasa Indonesia memiliki struktur kalimat yang unik, yang terdiri atas subjek, predikat, objek, pelengkap, dan keterangan. Setiap unsur tersebut memiliki fungsi yang berbeda dalam membentuk makna sebuah kalimat.

Struktur kalimat yang tepat akan membantu menyampaikan pesan secara efektif dan efisien. Misalnya, penggunaan frasa dan klausa yang sesuai dapat memperjelas hubungan antar bagian dalam kalimat.

Selain itu, tata bahasa juga mencakup penggunaan imbuhan, kata kerja transitif dan intransitif, serta susunan kata yang mengikuti kaidah bahasa baku.

Pemahaman mendalam mengenai kaidah ini sangat penting terutama dalam penulisan ilmiah, surat resmi, maupun komunikasi formal lainnya.

Bahasa adalah alat komunikasi, dan dengan menguasai struktur dan kaidahnya, siswa akan mampu mengekspresikan pikiran dan gagasannya secara logis dan terstruktur.`,
  },
  {
    id: 2,
    title: "Ejaan dan Tanda Baca",
    content: `
Penggunaan ejaan yang benar menjadi fondasi utama dalam penulisan bahasa Indonesia yang baik. Ejaan yang Disempurnakan (EYD) memberikan panduan dalam penulisan huruf kapital, penggunaan huruf miring, penulisan kata serapan, dan sebagainya.

Tanda baca juga memiliki peran penting dalam menentukan intonasi dan makna kalimat. Misalnya, tanda koma dapat membedakan antara makna kalimat tunggal dan majemuk.

Tanda titik, tanda tanya, dan tanda seru menandai akhir sebuah kalimat. Kesalahan dalam penggunaannya dapat menyebabkan ambiguitas atau makna yang salah.

Konsistensi dalam penggunaan ejaan dan tanda baca akan meningkatkan keterbacaan tulisan dan menunjukkan profesionalisme penulis.

Praktik berulang dan membaca karya tulis yang baik adalah cara efektif untuk meningkatkan kemampuan ini.`,
  },
];

export default function MateriBahasa() {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getPreview = (text: string, length = 300) =>
    text.length > length ? text.slice(0, length).trim() + "..." : text;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Materi Bahasa Indonesia
      </h1>

      <div className="space-y-6">
        {modules.map((modul) => {
          const isExpanded = expandedModules.includes(modul.id);
          return (
            <div
              key={modul.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <BookOpenIcon className="h-6 w-6 text-blue-700 mt-1" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {modul.title}
                </h2>
              </div>

              <p className="text-gray-700 text-sm whitespace-pre-line">
                {isExpanded ? modul.content : getPreview(modul.content)}
              </p>

              <button
                onClick={() => toggleExpand(modul.id)}
                className="mt-4 text-sm text-blue-600 hover:underline font-medium"
              >
                {isExpanded ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
