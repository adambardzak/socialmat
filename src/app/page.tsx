import Hero from "@/components/Hero";
import Process from "@/components/Process";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import InvestmentInfo from "@/components/InvestmentInfo";
import ContactForm from "@/components/ContactForm";
import React from "react";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <div>
      <Hero />
      <Process />
      {/* <TrustSignals /> */}
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
}

export default page;
