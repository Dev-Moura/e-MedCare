import React from "react";
import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import QuickActions from "./components/QuickActions/page";
import Services from "./components/Services/page";
import Doctors from "./components/Doctors/page";
import Testimonials from "./components/Testimonials/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-10">
=======
    <div className="min-h-screen bg-background dark:bg-bg-full text-text dark:text-text-dark">
      <Header />
      <main className=" container mx-auto px-4 lg:px-8 py-10">
>>>>>>> front-end
        <Hero />
        <QuickActions />
        <Services />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}