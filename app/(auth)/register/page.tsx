import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Join Organishi for fresh, organic produce
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className="border-border focus:ring-primary w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="border-border focus:ring-primary w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="border-border focus:ring-primary w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            id="confirm"
            type="password"
            placeholder="••••••••"
            className="border-border focus:ring-primary w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg py-2.5 font-medium transition-colors"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
