"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState<string>(""); // hook -> gancho
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  const authenticantion = async (e: any) => {
    e.preventDefault();
    setError(null);
    // validação de login e senha
    if (login != "" && password != "") {
      const formData = {
        login: login,
        password: password,
      };
      // chamada do back-end
      const add = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      // cria um .json do conteudo da chamada
      const content = await add.json();
      // se o token existir
      if (content.token) {
        sessionStorage.setItem("token", content.token); // implementação simplista do jwt
        router.push("/home"); // se ele o token existir encaminha o usuario pra home
      } else {
        setError(content.error);
      }
    }
  };

  return (
    <>
      <div>
        <form className="w-full" onSubmit={authenticantion}>
          <span className="font-bold-text-blue-500 py-2 block text-2x1">
            Login
          </span>
          <div className="w-full py-2">
            <label htmlFor="" className="text-sm font-bold py-2 block">
              Usuário
            </label>
            <input
              type="text"
              name="name"
              className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
              onChange={(e: any) => setLogin(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <label htmlFor="" className="text-sm font-bold py-2 block">
              Senha
            </label>
            <input
              name="login"
              type="password"
              className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <button className="w-20 p-2 text-#f2f2f2 border-gray-200 border-[1px] rounded-sm bg-blue-400">
              Login
            </button>
          </div>
          <div>
            {error && (
              <div
                className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400"
                style={{ color: "red" }}
              >
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
