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
        router.push("/home"); // se o token existir encaminha o usuario pra home
      } else {
        setError(content.error);
      }
    }
  };

  return (
    <>
        <header className= " w-full h-16" >
        <h1 className= " flex w-full text-4xl">E-medCare</h1>
        </header>
        <main className="">
            <div className=" w-full h-full flex justify-center items-center h-screen bg-gray-200 ">
                <form
                    className="w-full max-w-sm p-10 bg-white rounded-lg shadow-md "
                    onSubmit={authenticantion}
                >
                    <h1 className="font-bold py-6 block text-4xl ">Entrar</h1>
                    <div className="w-full py-2">
                        {/*<label htmlFor="" className="text-sm font-bold py-2 block">*/}
                        {/*</label>*/}
                        <input
                            placeholder="Login"
                            type="text"
                            name="name"
                            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-600"
                            onChange={(e: any) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="w-full py-2">
                        {/*<label htmlFor="" className="text-sm font-bold p-2 block">*/}

                        {/*</label>*/}
                        <input
                            placeholder="Senha"
                            name="login"
                            type="password"
                            className="mt-2 w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-600"
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-full py-2">
                        <a className=" text-blue-400">Esqueceu a senha?</a>

                        <button className=" mt-4 w-full p-2 text-gray-200 border rounded-4xl bg-blue-400 flex justify-center ">
                            Login
                        </button>
                    </div>
                    <div>
                        {error && (
                            <div
                                className="p-2 text-white border-gray-200 border rounded-sm bg-red-400"
                                style={{ color: "red" }}
                            >
                                {error}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </main>

    </>
  );
}
