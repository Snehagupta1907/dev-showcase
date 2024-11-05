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
    <>
      <section
        className="home relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/banner-bg.png')" }}
      >
        <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10"></div>

        <div className="relative z-20 p-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Your AI Magic Artist{" "}
            <span className="text-yellow-400">Who Never Gets Tired!</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your ideas into stunning visuals effortlessly and with
            creativity.
          </p>

          <Button disabled={disableLogin} variant="default" onClick={login}>
            Login Here
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-gray-400">
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-white">
            <span className="font-bold text-yellow-400">Dev Showcase</span> -
            your tool for generating creative and unique images with AI.
          </p>
          <p className="text-sm">Developer: Sneha Gupta</p>
          <p className="pt-4 text-xs">
            © 2024 - All rights reserved by AI Magic Artist
          </p>
        </div>
      </footer>
    </>
  );
}

export default Page;
