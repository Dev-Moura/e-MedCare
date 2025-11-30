import React from "react";


export default function Contact() {
  return (
    <section id="contact" className=" text-text dark:text-text-dark bg-background dark:bg-background-dark mt-12 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold">Fale conosco</h3>
      <p className="text-gray-500 mt-2">Agende, tire dúvidas ou solicite informações.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input className="mt-1 w-full rounded-md shadow-md border border-gray-700 p-2" placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input className="mt-1 w-full rounded-md border border-gray-700 shadow-md p-2" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensagem</label>
            <textarea className="mt-1 w-full rounded-md border border-gray-700 shadow-md p-2" rows={4} placeholder="Como podemos ajudar?"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded-md">Enviar</button>
          </div>
        </form>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Endereço</h4>
            <p className="text-sm text-gray-500">Rua Exemplo, 123 — Centro</p>
          </div>
          <div>
            <h4 className="font-semibold">Telefone</h4>
            <p className="text-sm text-gray-500">(21) 99999-9999</p>
          </div>
          <div>
            <h4 className="font-semibold">Horário</h4>
            <p className="text-sm text-gray-500">Seg — Sex: 08:00 — 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
