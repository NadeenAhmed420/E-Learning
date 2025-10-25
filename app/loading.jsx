
export default function Loading() {
  return (
    <div className="bg-amber-500 flex flex-col gap-5 items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
      <span className="text-2xl text-white">Loading .....</span>
    </div>
  );
}
