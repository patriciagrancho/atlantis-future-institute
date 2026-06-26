import MemberNav from "@/components/MemberNav";
import Marketplace from "@/components/Marketplace";

export const metadata = {
  title: "Explore · Evoluteon",
  description: "Browse the curated collection of longevity experiences.",
};

export default function ExplorePage() {
  return (
    <>
      <MemberNav />

      <main className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Greeting */}
          <div className="mb-14">
            <p className="label-luxury mb-4">your curated collection</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-stone-900">
              Welcome back, Sofia.
            </h1>
            <p className="mt-4 text-stone-500 font-light leading-relaxed max-w-xl">
              A selection of longevity experiences, vetted by our medical
              advisory board and chosen for you. Browse, then request the
              journeys that resonate.
            </p>
          </div>

          <Marketplace />
        </div>
      </main>
    </>
  );
}
