import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card";

interface ImageCardProps {
  user: {
    profileImage: string;
    username: string;
  };
  genImg: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ user, genImg }) => {
  return (
    <Card className="w-full max-w-md rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <CardHeader className="flex items-center gap-3 p-4">
        <Image 
          src={user.profileImage} 
          alt={`${user.username}'s profile`} 
          className="rounded-full" 
          width={40} 
          height={1400} 
        />
        <div>
        <p className="text-sm text-gray-500">Created by</p> 
          <CardTitle className="text-lg font-semibold">{user.username}</CardTitle>
          
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative w-full h-80">
          <Image 
            src={genImg} 
            alt="Post content" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-b-lg" // Ensures the image corners are rounded as well
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
