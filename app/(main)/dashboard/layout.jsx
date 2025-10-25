
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-50">
      <NavBar/>
      <main className="lg:container mx-auto px-5 md:px-10">{children}</main>
      <Footer />
    </div>
  );
}
