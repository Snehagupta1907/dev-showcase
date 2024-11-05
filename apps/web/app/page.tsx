import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./constants";
import ImageCard from "./shared/ImageCard";

const Home = async () => {

  const imageCardsData = [
    {
      user: {
        profileImage: '/assets/images/banner-bg.png', 
        username: 'User One',
      },
      genImg: '/assets/images/banner-bg.png', 
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
    <div className="py-8 px-4">
      <section
        className="home relative  flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: "url('/assets/images/banner-bg.png')" }}
      >
        <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10"></div>

        <div className="relative z-20 p-8 rounded-lg">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Your AI Magic Artist{" "}
            <span className="text-violet-400">Who Never Gets Tired!</span>
          </h1>
          <p className="text-base sm:text-md lg:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your ideas into stunning visuals effortlessly and with creativity.
          </p>

          <ul className="w-full flex flex-row justify-center gap-8 md:gap-12 mt-8">
            {navLinks.slice(1, 5).map((link) => (
              <li key={link.route} className="text-center">
                <Link
                  href={link.route}
                  className="flex flex-col items-center gap-2 group transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={link.icon}
                      alt="icon image"
                      width={32}
                      height={32}
                      className="p-2"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base group-hover:text-violet-400 transition-colors">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
          {imageCardsData.map((data, index) => (
            <ImageCard
              key={index}
              user={{ profileImage: data.user.profileImage, username: data.user.username }}
              genImg={data.genImg}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
