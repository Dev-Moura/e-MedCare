"use client";

import ReCaptchaComponent from "@/app/components/reCaptchaComponent/page";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


 export default function Home() {
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const addPacient = async (e: any) => {
      e.preventDefault();
      setError(null);
      

      if(name != "" &&
        login != "" &&
        password !== "" &&
        confirmPassword !== "" &&
        email != "" &&
        phone != "" &&
        birthDate != "" &&
        password === confirmPassword
      ) {
        const formData = {
            name: name,
            login: login,
            password: password,
            email: email,
            birthDate: birthDate,
        };

        const create = await fetch("http://localhost:3001/postPacient", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token") || "",
          },
          body: JSON.stringify(formData),
        });

        const content = await create.json();

        if (content.login) {
          router.push("/home");
        } else {
          setError(content.error);
        }
        alert("Cadasro Realizado com Sucesso!");
      }
        else {
          alert("Verifique os Campos.")
      }
      if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
      }
    };

    return (
      <>
    <div className="flex flex-col">
      <Header /> 
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="bg-[url(/image/bg-patient.jpg)] bg-cover bg-center"/>
          <main className="flex flex-col w-full h-full justify-center items-center h-screen">
          <form className= "max-w-2xl p-10 bg-white rounded-lg shadow-2xl" onSubmit={addPacient}>
            <h1 className="font-bold py-6 block text-2xl text-gray-700">
              Cadastro de Paciente
            </h1>
          <div className="w-full py-2">
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <input
              placeholder="Login"
              type="text"
              name="login"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setLogin(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <input
              placeholder="Phone"
              type="text"
              name="phone"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setPhone(e.target.value)}
            />
          </div>
           <div className="w-full py-2">
            <input
              placeholder="password"
              type="password"
              name="password"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full py-2">
            <input
              placeholder="password"
              type="password"
              name="password"
              className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <ReCaptchaComponent
              onVerify={setCaptchaToken} 
              onExpired={() => setCaptchaToken(null)}
            />
          </div>
           
          <div className="w-full py-2">
            <button className="mt-6 w-full p-2 text-2xl text-gray-200 border rounded-4xl bg-blue-400 flex justify-center">
              Criar
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
          </main>
         </div>
        {/* <Footer/> */}
    </div>
    </>
    ) 
 };