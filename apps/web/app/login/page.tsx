"use client";
import React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

function Page() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
  const disableLogin = !ready || (ready && authenticated);
  
  const { login } = useLogin({
    onComplete: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to <span className="text-violet-500">AI Magic Artist</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover the creative power of AI. Transform your ideas into stunning visuals in seconds!
        </p>

        <Button
          disabled={disableLogin}
          variant="default"
          onClick={login}
          className="text-lg font-semibold bg-violet-500 text-gray-900 hover:bg-violet-600 transition duration-300 ease-in-out py-3 px-8 rounded-full shadow-lg"
        >
          Log in and Start Creating
        </Button>

        <p className="mt-6 text-sm text-gray-400">
          By logging in, you agree to our <span className="text-violet-500">Terms of Service</span> and <span className="text-violet-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default Page;
