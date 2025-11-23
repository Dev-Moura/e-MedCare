import React from "react";

export default function Header() {
  return (
    <header className="bg-background dark:bg-bg-full text-text dark:text-text-dark border-b border-gray-700">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center font-bold">
            <a href="./" className="font-bold text-2xl">M</a>
          </div>
          <div>
            <h1 className="text-lg font-semibold">MedCare</h1>
            <p className="text-sm">Centro Médico - Atendimento humanizado</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-blue-600">Serviços</a>
          <a href="#doctors" className="hover:text-blue-600">Profissionais</a>
          <a href="#contact" className="hover:text-blue-600">Contato</a>
          <a href="./login" className="px-4 py-2 bg-blue-600 rounded-md shadow-sm">Login</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="abrir menu" className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}