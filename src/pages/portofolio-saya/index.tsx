// src/pages/portofolio-saya.tsx
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useAuth } from "../../context/authContext";
import { firestore } from "../../components/Firebase";

interface WritingResult {
  id: string;
  text: string;
  correctedText?: string;
  createdAt: string;
}

interface PracticeScore {
  id: string;
  score: number;
  date: string;
}

export default function PortofolioSaya() {
  const { user } = useAuth();
  const [scores, setScores] = useState<PracticeScore[]>([]);
  const [writings, setWritings] = useState<WritingResult[]>([]);
  console.log(user);
  useEffect(() => {
    if (!user) return;

    // Ambil nilai latihan
    const fetchScores = async () => {
      const q = query(
        collection(firestore, "practiceScores"),
        where("uid", "==", user.uid),
        orderBy("date", "desc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((doc) => ({
        ...(doc.data() as PracticeScore),
      }));
      setScores(data);
    };

    // Ambil hasil tulisan
    const fetchWritings = async () => {
      const q = query(
        collection(firestore, "writings"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((doc) => ({
        ...(doc.data() as WritingResult),
      }));
      setWritings(data);
    };

    fetchScores();
    fetchWritings();
  }, [user]);

  if (!user) {
    return <p className="text-center mt-10">Harap login terlebih dahulu.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header Profil */}
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Foto Profil"
          referrerPolicy="no-referrer"
          className="w-32 h-32 rounded-full border-4 border-blue-900 shadow-md object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">
          {user.displayName || "Pengguna"}
        </h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Nilai Latihan */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4 text-blue-900">
          Nilai Latihan Interaktif
        </h3>
        {scores.length === 0 ? (
          <p className="text-gray-500">Belum ada nilai latihan.</p>
        ) : (
          <ul className="space-y-3">
            {scores.map((s) => (
              <li
                key={s.id}
                className="p-4 bg-blue-50 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <span className="font-medium">Nilai: {s.score}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(s.date).toLocaleDateString("id-ID")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hasil Tulisan */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4 text-green-900">
          Hasil Tulisan
        </h3>
        {writings.length === 0 ? (
          <p className="text-gray-500">Belum ada hasil tulisan.</p>
        ) : (
          <div className="space-y-4">
            {writings.map((w) => (
              <div
                key={w.id}
                className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="font-medium text-gray-700">Tulisan Asli:</p>
                <p className="whitespace-pre-wrap">{w.text}</p>

                {w.correctedText && (
                  <>
                    <p className="font-medium text-gray-700 mt-3">
                      Hasil Koreksi:
                    </p>
                    <p className="whitespace-pre-wrap text-green-700">
                      {w.correctedText}
                    </p>
                  </>
                )}

                <p className="text-gray-500 text-sm mt-2">
                  {new Date(w.createdAt).toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
