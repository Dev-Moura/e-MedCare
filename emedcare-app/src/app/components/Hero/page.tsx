import React from "react";

export default function Hero() {
return (
    <section className="bg-background dark:bg-background-dark text-text dark:text-text-dark p-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-lg">
    <div>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">Cuidado humano, tecnologia e proximidade</h2>
        <p className="mt-4 text-gray-500">Atendimento médico multiprofissional com foco em prevenção e bem-estar. Agende sua consulta online ou venha nos visitar.</p>

        <div className="mt-6 flex gap-4 bg-background dark:bg-background-dark text-text dark:text-text-dark ">
        <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-md shadow">Agendar Consulta</a>
        <a href="#services" className="px-6 py-3 border border-gray-700 rounded-md text-gray-500">Conhecer Serviços</a>
        </div>

        <ul className=" bg-background dark:bg-background-dark text-text dark:text-text-dark mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <li className="flex items-start gap-3">
            <span className="  w-10 h-10 rounded-md shadow flex items-center justify-center ">🏥</span>
            <div>
            <div className=" text-sm font-semibold ">Estrutura Completa</div>
            <div className=" text-gray-700 text-xs ">Consultórios e salas equipadas</div>
            </div>
        </li>
        <li className="flex items-start gap-3">
            <span className=" w-10 h-10 rounded-md shadow flex items-center justify-center ">🩺</span>
            <div>
            <div className=" text-sm font-semibold ">Especialidades</div>
            <div className=" text-gray-700 text-xs ">Diversas áreas da medicina</div>
            </div>
        </li>
        <li className="flex items-start gap-3">
            <span className=" w-10 h-10 rounded-md shadow flex items-center justify-center ">⏱️</span>
            <div>
            <div className=" text-sm font-semibold ">Atendimento Rápido</div>
            <div className=" text-gray-700 text-xs ">Agendamento online e plantões</div>
            </div>
        </li>
        </ul>
        </div>

        <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark rounded-xl shadow-md p-4">
            <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
            alt="Equipe médica" className="rounded-lg w-full h-72 object-cover" />
        <div className="mt-4 text-sm text-gray-600">Foto ilustrativa — equipe de atendimento.</div>
    </div>
    </section>
    );
}