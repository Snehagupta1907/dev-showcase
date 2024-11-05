"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrivy, useLogout } from "@privy-io/react-auth";
import { Button } from "@repo/ui/components/ui/button";
import { useRouter } from "next/navigation";
import ImageCard from "../shared/ImageCard";

interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  profileImage: string;
  bio: string;
  imagesCreated: number;
  generatedImages: string[]; 
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const router = useRouter();
  const { ready, authenticated, user: privyUser } = usePrivy();
  const disableLogout = !ready || (ready && !authenticated);

  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/login");
    },
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <section className="Profile flex flex-col items-center min-h-screen py-8 bg-black text-white">
      <div className="bg-gray-950 shadow-lg rounded-lg p-8 w-full max-w-4xl text-center mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-violet-500 mb-4 md:mb-0">
            <Image
              src={user?.profileImage || "/assets/images/banner-bg.png"}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">
              {user?.name || "Username"}
            </h1>
            <p className="text-gray-400 text-xs">{privyUser?.linkedAccounts?.[0]?.address}</p>
            <p className="text-gray-300 mt-2">
              {user?.bio || "Add a bio to introduce yourself."}
            </p>
            <div className="flex justify-center md:justify-start gap-8 mt-4">
              <div>
                <span className="font-bold text-white">
                  {user?.imagesCreated || 0}
                </span>{" "}
                Generated Images
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              onClick={logout}
              className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
              disabled={disableLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {user?.generatedImages?.map((imgUrl, index) => (
          <ImageCard
            key={index}
            user={{ profileImage: user.profileImage, username: user.name }}
            genImg={imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
