"use client"; 

import React, {useState} from "react";
import { useRouter} from "next/navigation";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

export default function ForgetPassword() {
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const handleAction = () => {setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000)};

    const authenticantion = async (e: any) => {
        e.preventDefault();
        setError(null);

        router.push("/forgetPassword");
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

            if (content.email) {
                sessionStorage.setItem("email", content.email);
            } else {
                setError(content.error);
            }
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col bg-background dark:bg-bg-full text-text dark:text-text-dark ">
                <Header/>
                <main className="w-full h-screen flex flex-1 justify-center items-center">
                    <form
                        className="w-full max-w-sm p-10 dark:bg-background-dark bg-background text-text dark:text-text-dark rounded-lg shadow-md "
                        onSubmit={authenticantion}
                    >
                        <h1 className="font-bold py-6 block text-2xl ">Informe o seu E-mail</h1>
                        <div className="w-full py-2">
                            <input
                                placeholder="E-mail"
                                type="text"
                                name="email"
                                className="w-full border border-gray-600 p-4 rounded-sm placeholder:text-text dark:placeholder:text-text-dark focus:placeholder-transparent focus:outline-none "
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full py-2">
                            <button
                                onClick={handleAction}
                                className="mt-4 w-full p-2 text-2xl border rounded-md bg-blue-600 flex justify-center">
                                Enviar
                            </button>

                            {showPopup && (
                                <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                                    ✅ Sucesso! verifique seu e-mail!.
                                </div>
                            )}
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
    )
};