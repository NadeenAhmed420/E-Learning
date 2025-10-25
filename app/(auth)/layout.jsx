
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-500/60 via-amber-500 to-amber-500/80">
      <main className="flex-1 flex items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
}
