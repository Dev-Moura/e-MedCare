import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-white border-t">
      <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} E-MedCare. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">Política de Privacidade</a>
          <a href="#" className="hover:text-blue-600">Termos</a>
        </div>
      </div>
    </footer>
  );
}