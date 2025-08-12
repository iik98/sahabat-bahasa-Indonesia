import { useState } from "react";

const wordPairs = [
  { id: 1, category: "Kata Benda", word: "Meja" },
  { id: 2, category: "Kata Kerja", word: "Berlari" },
  { id: 3, category: "Kata Sifat", word: "Cepat" },
];

type DropAnswer = {
  [category: string]: string | null;
};

export default function LatihanInteraktif() {
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [answers, setAnswers] = useState<DropAnswer>(
    wordPairs.reduce((acc, pair) => ({ ...acc, [pair.category]: null }), {})
  );

  const handleDrop = (category: string) => {
    if (draggedWord) {
      setAnswers((prev) => ({
        ...prev,
        [category]: draggedWord,
      }));
      setDraggedWord(null);
    }
  };

  const handleReset = () => {
    setAnswers(
      wordPairs.reduce((acc, pair) => ({ ...acc, [pair.category]: null }), {})
    );
  };

  const remainingWords = wordPairs
    .map((p) => p.word)
    .filter((w) => !Object.values(answers).includes(w));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Drag & Drop - Cocokkan Kata
      </h1>

      <div className="mb-8 text-center">
        <p className="text-gray-700">Seret kata ke kategori yang sesuai</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Available Words */}
        <div>
          <h2 className="font-semibold mb-3 text-gray-700">Kata:</h2>
          <div className="space-y-2">
            {remainingWords.map((word) => (
              <div
                key={word}
                draggable
                onDragStart={() => setDraggedWord(word)}
                className="cursor-move bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded border border-blue-300"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Drop Targets */}
        <div>
          <h2 className="font-semibold mb-3 text-gray-700">Kategori:</h2>
          <div className="space-y-4">
            {wordPairs.map((pair) => (
              <div
                key={pair.category}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(pair.category)}
                className="p-4 bg-gray-100 border-2 border-dashed rounded-md min-h-[60px] flex items-center justify-between"
              >
                <strong>{pair.category}</strong>
                <div className="ml-4 text-sm text-gray-700">
                  {answers[pair.category] ?? (
                    <span className="text-gray-400">Drop here</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
