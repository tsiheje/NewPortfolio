"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import bgimage from "../../Assets/Images/bgimage.jpg";
import sary from "../../Assets/Images/images.png";

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const Homepage = () => {
  const [sectionRef, isInView] = useInView();

  const socialLinks = [
    {
      href: "https://wa.me/+261342341566",
      label: "WhatsApp",
      icon: <FaWhatsapp size={40} className="sm:w-12 sm:h-12" />,
    },
    {
      href: "https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/",
      label: "LinkedIn",
      icon: <FaLinkedin size={40} className="sm:w-12 sm:h-12" />,
    },
    {
      href: "https://github.com/tsiheje",
      label: "GitHub",
      icon: <FaGithub size={40} className="sm:w-12 sm:h-12" />,
    },
    {
      href: "https://join.skype.com/invite/IPIhGiQpePER",
      label: "Skype",
      icon: <FaSkype size={40} className="sm:w-12 sm:h-12" />,
    },
  ];

  const handleSocialClick = (e, href) => {
    e.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="h-screen w-full" ref={sectionRef}>
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={bgimage}
          alt="Background"
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          priority
          quality={100}
        />
        <div className={`absolute inset-0 bg-black/95 transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
      <div
        className={`relative z-10 flex flex-col lg:flex-row min-h-screen w-full px-4 sm:px-6 lg:px-16 py-36 lg:py-40 transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full lg:w-1/2 max-w-2xl lg:mr-8">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight transition-all duration-700 transform ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Hello!👋
              </h1>
              <div
                className={`transition-all duration-700 transform ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                  I&apos;m,{" "}
                  <span className="text-blue-400 mt-2 text-5xl sm:text-7xl lg:text-8xl">
                    Mickaelio
                  </span>
                </h1>
              </div>
            </div>
            <p
              className={`text-base sm:text-lg text-gray-200 transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              🌟 A dedicated front-end developer and web integrator with a passion for crafting seamless
              user experiences. Specializing in{" "}
              <span className="text-blue-400">React</span>, I transform ideas into impactful and
              memorable digital solutions. 🚀
            </p>
            <div className="pt-12 sm:pt-16 lg:pt-24">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map(({ href, label, icon }, index) => (
                  <button
                    key={label}
                    onClick={(e) => handleSocialClick(e, href)}
                    className={`text-gray-300 hover:text-blue-400 transition-all duration-500 transform hover:scale-110 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                    aria-label={label}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:block hidden">
          <div
            className={`transition-all duration-1000 transform ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Image
              src={sary}
              alt="Profile Picture"
              width={350}
              height={350}
              priority
              className="ml-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;