"use client";
import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { fal } from "@fal-ai/client";
import { Input } from "@repo/ui/components/ui/input";
import { useToast } from "@repo/ui/hooks/use-toast";

export default function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const { toast } = useToast();

  fal.config({
    proxyUrl: "/api/generate-art",
  });

  const generateImage = async () => {
    if (!prompt) {
      toast({
        title: "Error",
        description: "Please enter a prompt.",
        variant: "destructive",
      });
      return;
    }

    setImageUrl(null);
    setLoading(true);

    try {
      const result = await fal.subscribe("110602490-lora", {
        input: {
          prompt,
          model_name: "stabilityai/stable-diffusion-xl-base-1.0",
          image_size: "square_hd",
        },
        pollInterval: 5000,
        logs: true,
        onQueueUpdate: (update) => {
          console.log("Queue update:", update);
        },
      });

      const generatedImageUrl = result?.data?.images?.[0]?.url;
      setImageUrl(generatedImageUrl);
      setPrompt("");

      toast({
        title: "Success",
        description: "Image generated successfully!",
        variant: "default",
      });
    } catch (err) {
      console.error("Error generating image:", err);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {!imageUrl ? (
        <div className="flex flex-col items-center justify-center max-w-lg p-8 bg-gray-950 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-white">Image Generator</h1>
          <p className="mb-6 text-gray-400 text-center">
            Enter a prompt below to generate an image using our AI model.
          </p>
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What do you want to create?"
            className="w-full mb-5 p-4 border border-gray-700 rounded-lg shadow-sm bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <Button
            onClick={generateImage}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition duration-300 ease-in-out"
          >
            {loading ? "Generating..." : "Generate Image"}
          </Button>
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-6 items-center">
          <div className="flex w-full max-w-full">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What do you want to create?"
              className="w-full px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <Button
              onClick={generateImage}
              disabled={loading}
              className="ml-2 py-3 flex-col rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition duration-300 ease-in-out"
            >
              {loading ? "Generating..." : "Generate Image"}
            </Button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center">
              {/* Tailwind CSS spinner */}
              <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-violet-600 border-t-transparent"></div>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt="Generated"
              className="max-w-md h-auto rounded-lg shadow-lg border-2 border-violet-600 mb-4"
            />
          )}
        </div>
      )}
    </div>
  );
}
