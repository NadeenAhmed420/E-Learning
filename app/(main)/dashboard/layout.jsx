
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-neutral-50">
      <NavBar/>
      <main className="container mx-auto px-5 sm:px-15">{children}</main>
      <Footer />
    </div>
  );
}
