"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header></header>
      <h1>Home</h1>
      <main>
          <Link href="/doctor/create">Create new doctor</Link>
          <br />
          <Link href="/doctor/list">list all doctor</Link>
          <br />
          <Link href="/pacient/create">Create new Pacient</Link>
          <br />
          <Link href="/appointment/create">Create new Appointment</Link>
          <br />
          <Link href="/prescription/create">Create new Prescription</Link>
          <br />
          <Link href="/prescription/upload">upload Prescription</Link>
          <br />
          <Link href="/api">Acess FakeApi</Link>
      </main>
      <footer></footer>
    </>
  );
}
