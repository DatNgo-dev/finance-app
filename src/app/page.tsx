"use client";
import Link from "next/link";
import { useAuth } from "@/components/providers/supabase-auth-provider";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Link href={"/login"} className="text-white">
        Sign In
      </Link>
    </main>
  );
}
