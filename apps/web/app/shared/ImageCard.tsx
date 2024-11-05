import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";

interface ImageCardProps {
  user: {
    profileImage: string;
    username: string;
  };
  genImg: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ user, genImg }) => {
  return (
    <Card className="w-full  max-w-md rounded-2xl shadow-lg transition-transform transform hover:scale-105 relative">
      <CardContent className="p-0 relative group">
        <div className="relative w-full h-80">
          <Image
            src={genImg}
            alt="Post content"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-semibold">
            Created by: {user.username}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
