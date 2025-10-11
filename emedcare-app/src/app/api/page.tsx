"use client";
import React, { useState } from "react";
import axios from "axios";

export default function MockApi() {
  const [mockApiData, setMockApiData] = useState(null);

  const requestMockApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMockApiData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Mock Api Dados</h1>
      <button
        className="bg-blue-500 p-2 inline-block text-white texte-sm"
        onClick={(e) => requestMockApi()}
      >
        Buscar dados fake api
      </button>
      <table>
        {!!mockApiData &&
          mockApiData.map((data: any) => (
            <tr>
              <td className="border border-slate-300">{data.name}</td>
              <td className="border border-slate-300">{data.username}</td>
              <td className="border border-slate-300">{data.email}</td>
              <td className="border border-slate-300">{data.phone}</td>
            </tr>
          ))}
      </table>
    </>
  );
}
