import { Suspense } from "react";
import WelcomeSurvey from "@/components/WelcomeSurvey";

export const metadata = {
  title: "Welcome — Evoluteon",
  description: "You're on the list.",
};

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl">
        <Suspense fallback={null}>
          <WelcomeSurvey />
        </Suspense>
      </div>
    </main>
  );
}
