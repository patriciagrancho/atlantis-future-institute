import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Become a Partner · Evoluteon",
  description:
    "Apply to list your clinic, hotel or retreat on Evoluteon — a curated longevity marketplace for verified members.",
};

export default function BecomeAPartnerPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-cream-dark pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="label-luxury mb-4">for wellness venues</p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-4">
            Strategic Partner Application
          </h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed mb-12 max-w-xl">
            For world-class clinics, hotels &amp; retreats.
          </p>

          <Reveal>
            <div className="glass-card rounded-[3rem] p-8 md:p-12">
              <PartnerForm />
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
