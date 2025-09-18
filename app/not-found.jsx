import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#041E42] flex flex-col gap-5 items-center justify-center min-h-screen">
      <span className="text-5xl font-bold tracking-wide text-blue-500 ">
        404
      </span>
      <h1 className="text-6xl my-2 font-bold">Page Not Found</h1>
      <p className="text-gray-500 text-sm ">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Button
        asChild
        className="w-35 bg-blue-600 text-white px-4  hover:bg-blue-600/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Link href="/">Back To Home</Link>
      </Button>
    </div>
  );
}
