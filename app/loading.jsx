
export default function Loading() {
  return (
    <div className="bg-[#041E42] flex flex-col gap-5 items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="text-xl text-gray-100">Loading .....</span>
    </div>
  );
}
