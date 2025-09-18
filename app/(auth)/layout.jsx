import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-200 via-amber-500 to-amber-500">
      <NavBar className="w-full" />
      <main className="flex-1 flex items-center justify-center w-full">
        {children}
      </main>
      <Footer className="w-full" />
    </div>
  );
}
