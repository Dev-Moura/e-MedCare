"use client"; 

import React, {useState} from "react";
import { useRouter} from "next/navigation";

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
            <div className="min-h-screen flex flex-col">
                <header className= "w-full h-14 bg-white" >
                    <a href="./" className= "w-12 flex ml-2 font-bold text-4xl text-blue-600 p-2 ">MedCare</a>
                </header>
                <main className="w-full h-full flex flex-1 justify-center items-center h-screen bg-gray-400">
                    <form
                        className="w-full max-w-sm p-10 bg-white rounded-lg shadow-md "
                        onSubmit={authenticantion}
                    >
                        <h1 className="font-bold py-6 block text-2xl text-blue-600  ">Informe o seu E-mail</h1>
                        <div className="w-full py-2">
                            {/*<label htmlFor="" className="text-sm font-bold py-2 block">*/}
                            {/*</label>*/}
                            <input
                                placeholder="E-mail"
                                type="text"
                                name="email"
                                className="w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700"
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                        </div>
                        {/*<div className="w-full py-2">*/}
                        {/*    /!*<label htmlFor="" className="text-sm font-bold p-2 block">*!/*/}

                        {/*    /!*</label>*!/*/}
                        {/*    <input*/}
                        {/*        placeholder="Password"*/}
                        {/*        name="password"*/}
                        {/*        type="text"*/}
                        {/*        className="mt-2 w-full border-1 border-gray-600 p-4 rounded-sm placeholder-gray-700"*/}
                        {/*        onChange={(e: any) => setPassword(e.target.value)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="w-full py-2">
                            {/*<a href= "./forgetPassword/page.tsx" className="w-4 text-gray-700">Esqueceu a senha?</a>*/}
                            {/*<a href="./createAccount/page.tsx" className="flex mt-2 text-gray-700 font-bold text-2xl w-1/2" >Criar conta</a>*/}
                            <button
                                onClick={handleAction}
                                className=" mt-4 w-full p-2 text-2xl text-gray-200 border rounded-4xl bg-blue-600 flex justify-center ">
                                Enviar
                            </button>

                            {showPopup && (
                                <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                                    ✅ Sucesso! Ação concluída.
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
            </div>
        </>
    )
};