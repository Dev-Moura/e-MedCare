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
    <div className="min-h-screen flex flex-col">
        <header className= "w-full h-14 bg-white" >
          <a href="./" className= "w-12 flex ml-2 font-bold text-4xl text-green-500 p-2 ">MedCare</a>
        </header>
        <main className="w-full h-full flex flex-1 justify-center items-center h-screen bg-gray-100">
                <form
                    className="w-full max-w-sm p-10 bg-white rounded-lg shadow-md "
                    onSubmit={authenticantion}
                >
                    <h1 className="font-bold py-6 block text-4xl text-green-500  ">Entrar</h1>
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
                        <a href= "./forgetPassword/page.tsx" className=" text-green-500">Esqueceu a senha?</a>
                        <a href="./createAccount/page.tsx" className="flex mt-2 text-green-500 font-bold" >Criar conta</a>
                        <button className=" mt-4 w-full p-2 text-2xl text-gray-200 border rounded-4xl bg-green-500 flex justify-center ">
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
          </main>
      </div>
    </>
  );
}
