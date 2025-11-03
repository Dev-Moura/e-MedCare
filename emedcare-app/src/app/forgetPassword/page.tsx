"use client"; 

import React, {useState} from "react";
import { useRouter } from "next/navigation";

export default function forgetPassword() {
    const router = userRouter();
    const [email, setEmail] = useState<String>("");
    const [error, setError] = useState<String | null>("");


    const authenticantion = async (e: any) => {
        e.preventDefault();
        setError(null);
        // validação de e-mail
        if (email != "") {
            const formData = {
                email: email,
            };

            const validation = await fetch("http://localhost:3001/forgetPassword", {
                method: "GET",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const content = await validation.json();
        }
    }
}   