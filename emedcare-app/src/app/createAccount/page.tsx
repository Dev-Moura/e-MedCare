 "use client";

 import React, { useState } from "react";
 import { useRouter } from "next/navigation";


 export default function Home() {
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [medicalSpecialty, setMedicalSpecialty] = useState<string>("");
    const [medicalRegistration, setMedicalRegistration] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const authenticantion = async (e: any) => {
      e.preventDefault();
      setError(null);
      

      if(name != "" &&
        login != "" &&
        password != "" &&
        medicalSpecialty != "" &&
        medicalRegistration != "" &&
        email != "" &&
        phone != "" &&
        birthDate != ""
      ) {
        const formData = {
            name: name,
            login: login,
            password: password,
            medicalSpecialty: medicalSpecialty,
            medicalRegistration: medicalRegistration,
            email: email,
            birthDate: birthDate,
        };

        const add = await fetch("http://localhost:3001/")
      }
    }

 }