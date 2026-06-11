import Link from "next/link";
import { Leaf } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white px-6 py-4">
        <Link href="/" className="flex w-fit items-center gap-2">
          <Leaf className="text-primary h-6 w-6" />
          <span className="merriweather-font text-primary text-xl font-extrabold tracking-wider">
            ORGANISHI
          </span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
