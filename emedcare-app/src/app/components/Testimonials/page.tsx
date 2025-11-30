import React from "react";

export default function Testimonials() {
  const items = [
    { text: "Atendimento excelente e equipe muito atenciosa.", author: "Ana P." },
    { text: "Agendei online e foi muito prático.", author: "Carlos M." },
  ];

  return (
<<<<<<< HEAD
    <section className="mt-12">
      <h3 className="text-2xl font-bold">Depoimentos</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <blockquote key={i} className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-700">"{t.text}"</p>
            <footer className="mt-3 text-sm text-gray-500">— {t.author}</footer>
=======
    <section className=" bg-background dark:bg-background-dark text-text dark:text-text-dark mt-12 p-6 rounded-lg ">
      <h3 className="text-2xl font-bold">Depoimentos</h3>
      <div className=" bg-background dark:bg-background-dark text-text dark:text-text-dark mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <blockquote key={i} className=" bg-background dark:bg-bg-full p-4 rounded-lg shadow-lg ">
            <p className="text-text dark:text-text-dark text-lg">"{t.text}"</p>
            <footer className="mt-3 text-sm text-gray-700">— {t.author}</footer>
>>>>>>> front-end
          </blockquote>
        ))}
      </div>
    </section>
  );
}