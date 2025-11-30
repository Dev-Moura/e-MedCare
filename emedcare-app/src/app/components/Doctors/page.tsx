import React from "react";

export default function Doctors() {
  const docs = [
    { name: "Dra. Marcia Regina", specialty: "Cardiologista", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" },
    { name: "Dra. Maria Almeida", specialty: "Pediatra", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" },
    { name: "Dr. Pedro Costa", specialty: "Clínico Geral", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
<<<<<<< HEAD
    <section id="doctors" className="mt-12">
      <h3 className="text-2xl font-bold">Nossa equipe</h3>
      <p className="text-gray-600 mt-2">Profissionais qualificados e acolhedores.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {docs.map((d) => (
          <div key={d.name} className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
=======
    <section id="doctors" className="mt-12 bg-background dark:bg-background-dark text-text dark:text-text-dark p-6 rounded-lg">
      <h3 className="text-2xl font-bold">Nossa equipe</h3>
      <p className="text-gray-500 mt-2">Profissionais qualificados e acolhedores.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {docs.map((d) => (
          <div key={d.name} className=" p-4 rounded-lg shadow flex flex-col items-center text-center">
>>>>>>> front-end
            <img src={d.img} alt={d.name} className="w-28 h-28 rounded-full object-cover" />
            <div className="mt-3 font-semibold">{d.name}</div>
            <div className="text-sm text-gray-500">{d.specialty}</div>
            <div className="mt-4 w-full">
              <a href="#" className="block w-full text-center py-2 border border-blue-600 rounded-md text-blue-600">Ver Perfil</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}