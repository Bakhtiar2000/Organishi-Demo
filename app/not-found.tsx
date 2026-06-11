import Link from "next/link";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <Leaf className="text-primary h-16 w-16" />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-muted-foreground text-lg">
        Oops! This page wandered off the farm.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
