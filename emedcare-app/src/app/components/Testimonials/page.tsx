import React from "react";

export default function Testimonials() {
  const items = [
    { text: "Atendimento excelente e equipe muito atenciosa.", author: "Ana P." },
    { text: "Agendei online e foi muito prático.", author: "Carlos M." },
  ];

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold">Depoimentos</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <blockquote key={i} className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-700">"{t.text}"</p>
            <footer className="mt-3 text-sm text-gray-500">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}