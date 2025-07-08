import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <Process />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default page;
