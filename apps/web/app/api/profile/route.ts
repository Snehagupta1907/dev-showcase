import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const userData = {
    id: '1',
    name: 'Sneha Gupta',
    email: 'snehagupta98930@gmail.com',
    profileImage: '/assets/images/banner-bg.png',
    bio: 'Enthusiastic about art and design, here to transform ideas into reality!',
    imagesCreated: 1,
    generatedImages:["/assets/images/banner-bg.png","/assets/images/banner-bg.png","/assets/images/banner-bg.png"]
  };

  return NextResponse.json(userData);
}
