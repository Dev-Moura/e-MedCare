"use client";

import axios from "axios";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import ReCaptchaComponent from "../components/ReCaptchaComponent/page";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState<string>(""); // hook -> gancho
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  

  const authenticantion = async (e: any) => {
    e.preventDefault();
    setError(null);

    // validação de login e senha
    if (login != "" && password != "") {
      const formData = {
        login: login,
        password: password,
        captchaToken,
      };

    if(!captchaToken) {
      alert("Please confirm that you are not a robot!");
      return;
     } ;


     try{

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
        setError(content.error || "Error authenticating user");
      }
     } catch (e) {
      setError("Server connection error");
     }
    }
  };

  return (
    <>
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">
     <Header/>
        <main className="w-full h-full flex flex-1 justify-center items-center h-screen" >
                <form
                    className="w-full max-w-sm p-10 bg-white rounded-lg shadow-2xl "
                    onSubmit={authenticantion}
                >
                    <h1 className="font-bold py-6 block text-4xl text-gray-700  ">Entrar</h1>
=======
    <div className="min-h-screen flex flex-col bg-background dark:bg-bg-full text-text dark:text-text-dark">
     <Header/>
        <main className="w-full h-screen flex flex-1 justify-center items-center " >
                <form
                    className=" bg-background dark:bg-background-dark text-text dark:text-text-dark
                     w-full max-w-md p-10 rounded-lg shadow-md "
                    onSubmit={authenticantion}
                >
                    <h1 className=" font-bold py-6 block text-4xl ">Entrar</h1>
>>>>>>> front-end
                    <div className="w-full py-2">
                        <input
                            placeholder="Login"
                            type="text"
                            name="name"
<<<<<<< HEAD
                            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
=======
                            className="w-full border border-gray-600 p-4 rounded-sm focus:placeholder-transparent focus:outline-none"
>>>>>>> front-end
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="w-full py-2">
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
<<<<<<< HEAD
                            className="mt-2 w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
=======
                            className="mt-2 w-full border border-gray-600 p-4 rounded-sm focus:placeholder-transparent focus:outline-none"
>>>>>>> front-end
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-full py-2">
<<<<<<< HEAD
                        <a href="./CreatePacient" className="flex mt-2 text-black-700  w-2/3" >Paciente? Crie sua conta</a>
=======
>>>>>>> front-end
                        <ReCaptchaComponent
                         onVerify={setCaptchaToken} 
                         onExpired={() => setCaptchaToken(null)}
                         />
<<<<<<< HEAD
                        <button type="submit" className=" mt-6 w-full p-2 text-2xl text-gray-200 border rounded-4xl bg-blue-400 flex justify-center ">
                            Login
                        </button>
                        <a href= "./forgetPassword" className="mt-6 flex justify-center  text-black-700">Esqueceu a senha?</a>
=======
                        <button type="submit" className=" mt-6 w-full p-2 text-2xl bg-blue-600 border border-gray-600 rounded flex justify-center ">
                            Login
                        </button>
                        <a href= "./forgetPassword" className="mt-6 flex justify-center ">Esqueceu a senha?</a>
                        <a href="./CreatePacient" className="text-text dark:text-text-dark flex justify-center mt-2 " >Crie sua conta</a>
>>>>>>> front-end
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
          <Footer/>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> front-end
