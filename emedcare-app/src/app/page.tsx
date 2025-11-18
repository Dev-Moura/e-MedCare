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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-10">
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
