"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DoctorCreate() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [medicalSpecialty, setMedicalSpecialty] = useState<string>("");
  const [medicalRegistration, setMedicalRegistration] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const addDoctor = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (
      name != "" &&
      login != "" &&
      password != "" &&
      medicalSpecialty != "" &&
      medicalRegistration != "" &&
      email != "" &&
      phone != ""
    ) {
      const formData = {
        name: name,
        login: login,
        password: password,
        medicalSpecialty: medicalSpecialty,
        medicalRegistration: medicalRegistration,
        email: email,
        phone: phone,
      };

      const add = await fetch("http://127.0.0.1:3001/postDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") || "",
        },
        body: JSON.stringify(formData),
      });

      const content = await add.json();

      if (content.login) {
        router.push("/home");
      } else {
        setError(content.error);
      }
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <header className="w-full h-14 bg-white">
        <a href="../" className="w-12 flex ml-2 font-bold text-4xl text-blue-600 p-2">MedCare</a>
      </header>
      <main className="w-full h-full flex flex-1 justify-center items-center h-screen bg-gray-400">
      <form className="w-full max-w-2xl p-10 bg-white rounded-lg shadow-md" onSubmit={addDoctor}>
        <h1 className="font-bold py-6 block text-3xl text-gray-700">
          Cadastro de Médico
        </h1>
        <div className="w-full py-2">
          {/* <label htmlFor="" className="text-sm font-bold py-2 block">
            Nome
          </label> */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          {/* <label htmlFor="" className="text-sm font-bold py-2 block">
            Login
          </label> */}
          <input
            placeholder="Login"
            type="text"
            name="login"
            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
            onChange={(e: any) => setLogin(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          {/* <label htmlFor="" className="text-sm font-bold py-2 block">
            Senha
          </label> */}
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
            placeholder="MedicalSpecialty"
            type="text"
            name="medicalSpecialty"
            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
            onChange={(e: any) => setMedicalSpecialty(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          
          <input
            placeholder="MedicalRegistration"
            type="text"
            name="medicalRegistration"
            className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700 focus:placeholder-transparent focus:outline-none"
            onChange={(e: any) => setMedicalRegistration(e.target.value)}
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
          <button className="mt-6 w-full p-2 text-2xl text-gray-200 border rounded-4xl bg-blue-600 flex justify-center">
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
    </>
  );
}
