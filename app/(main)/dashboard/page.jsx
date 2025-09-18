import Benefits from "@/app/components/Benefits";
import Courses from "@/app/components/Courses";
import FAQ from "@/app/components/FAQ";
import Header from "@/app/components/Header";
import Pricing from "@/app/components/Pricing";
import Testimonials from "@/app/components/Testimonials";

export default function MainDashboard() {
  return (
    <div>
      <Header />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}
