// src/pages/MulaiMenulis.tsx

import { useState } from "react";
// import { OpenAI } from "openai"; // pastikan versi openai >=4.0
// import type { ChatCompletionRequestMessage } from "openai";

export default function MulaiMenulis() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCorrect = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      //   const openai = new OpenAI({
      //     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      //   });

      //   const messages: ChatCompletionRequestMessage[] = [
      //     {
      //       role: "system",
      //       content:
      //         "Kamu adalah editor bahasa Indonesia yang memperbaiki tata bahasa dan gaya menulis. Berikan versi teks yang diperbaiki secara langsung tanpa penjelasan.",
      //     },
      //     {
      //       role: "user",
      //       content: text,
      //     },
      //   ];

      //   const response = await openai.chat.completions.create({
      //     model: "gpt-3.5-turbo",
      //     messages,
      //   });

      //   const reply = "response.choices[0].message?.content";
      const reply = "contoh hasil perbaikan";

      setResult(reply ?? "Tidak ada balasan dari AI.");
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-900 text-center">
        Mulai Menulis
      </h1>
      <textarea
        className="w-full h-48 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Tulis di sini..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-center">
        <button
          onClick={handleCorrect}
          disabled={loading || text.trim() === ""}
          className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded disabled:bg-gray-400 transition"
        >
          {loading ? "Memproses..." : "Periksa & Perbaiki"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {result && (
        <div className="border border-gray-300 bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Hasil Koreksi</h2>
          <p className="whitespace-pre-wrap text-gray-800">{result}</p>
        </div>
      )}
    </div>
  );
}
