"use client";
import { useAuth } from "@/components/providers/supabase-auth-provider";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <button
        className="text-white"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </main>
  );
}
