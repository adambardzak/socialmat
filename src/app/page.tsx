import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <Process />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </div>
  );
}

export default page;
