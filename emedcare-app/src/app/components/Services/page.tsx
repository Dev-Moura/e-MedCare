import React from "react";

export default function Services() {
  const services = [
    { title: "Clínica Geral", desc: "Atendimento adulto e infantil" },
    { title: "Pediatria", desc: "Cuidado para os pequenos" },
    { title: "Ginecologia", desc: "Saúde da mulher" },
    { title: "Cardiologia", desc: "Prevenção e tratamento" },
  ];

  return (
    <section id="services" className="mt-12">
      <h3 className="text-2xl font-bold">Nossos serviços</h3>
      <p className="text-gray-600 mt-2">Atendimento multidisciplinar com foco na qualidade de vida.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="text-xl font-semibold">{s.title}</div>
            <div className="text-sm text-gray-500 mt-2">{s.desc}</div>
            <div className="mt-4">
              <a href="#" className="text-sm text-blue-600">Saiba mais →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}