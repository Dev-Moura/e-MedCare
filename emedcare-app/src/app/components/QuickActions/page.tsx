import React from "react";

export default function QuickActions() {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ActionCard title="Agendar Consulta" desc="Escolha data e horário" icon="📅" />
      <ActionCard title="Atendimento Online" desc="Teleconsulta segura" icon="💬" />
      <ActionCard title="Exames" desc="Solicitação e resultado online" icon="🧪" />
    </section>
  );

  function ActionCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  );
}
}