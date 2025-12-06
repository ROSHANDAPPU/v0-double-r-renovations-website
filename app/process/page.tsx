
import { Header } from "@/components/header";
import { ProcessHero } from "@/components/ProcessHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PostProjectCare } from "@/components/PostProjectCare";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <ProcessHero />
      <ProcessSteps />
      <PostProjectCare />
      <Portfolio backgroundColor="#1B3A34" />
      <CTA />
      <Footer />
    </main>
  );
}
