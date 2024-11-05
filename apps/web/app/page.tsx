import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./constants";
import ImageCard from "./shared/ImageCard";

const Home = async () => {
  // Dummy data for image cards
  const imageCardsData = [
    {
      user: {
        profileImage: '/assets/images/banner-bg.png', // Replace with actual paths
        username: 'User One',
      },
      genImg: '/assets/images/banner-bg.png', // Replace with actual paths
    },
    {
      user: {
        profileImage: '/assets/images/banner-bg.png',
        username: 'User Two',
      },
      genImg: '/assets/images/banner-bg.png',
    },
    {
      user: {
        profileImage: '/assets/images/banner-bg.png',
        username: 'User Three',
      },
      genImg: '/assets/images/banner-bg.png',
    },
    {
      user: {
        profileImage: '/assets/images/banner-bg.png',
        username: 'User Four',
      },
      genImg: '/assets/images/banner-bg.png',
    },
  ];

  return (
    <>
      <section className="home relative flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/assets/images/banner-bg.png')" }}>
        
        <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10"></div>
        
        <div className="relative z-20 p-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4 transition-transform transform hover:scale-105">
            Your AI Magic Artist{" "}
            <span className="text-yellow-400">Who Never Gets Tired!</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your ideas into stunning visuals effortlessly and with creativity.
          </p>

          <ul className="w-full flex justify-center gap-10 md:gap-16 mt-8">
            {navLinks.slice(1, 5).map((link) => (
              <li key={link.route} className="text-center">
                <Link href={link.route} className="flex flex-col items-center gap-4 group transition-transform duration-300 ease-in-out hover:scale-110">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={link.icon}
                      alt="icon image"
                      width={32}
                      height={32}
                      className="p-2"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base group-hover:text-yellow-400 transition-colors">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {imageCardsData.map((data, index) => (
            <ImageCard
              key={index}
              user={{ profileImage: data.user.profileImage, username: data.user.username }}
              genImg={data.genImg}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
