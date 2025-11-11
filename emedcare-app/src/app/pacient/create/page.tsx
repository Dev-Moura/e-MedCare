"use client";

 import React, { useState } from "react";
 import { useRouter } from "next/navigation";


 export default function Home() {
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const addPacient = async (e: any) => {
      e.preventDefault();
      setError(null);
      

      if(name != "" &&
        login != "" &&
        password != "" &&
        email != "" &&
        phone != "" &&
        birthDate != ""
      ) {
        const formData = {
            name: name,
            login: login,
            password: password,
            email: email,
            birthDate: birthDate,
        };

        const create = await fetch("http://localhost:3001/registration", {
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
      }
    };

    return (
      <>
      
      </>
    ) 
 }