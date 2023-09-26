import { buttonClasses } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AboutSectionProps = {};

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="max-w-5xl w-full flex flex-col my-5 p-6" id="about">
      <div className="flex w-full md:mb-32 mb-6 items-center">
        <div className="grow w-full h-[1px] bg-white"></div>
        <Typography variant="h4" mx={3}>
          About
        </Typography>
        <div className="grow w-full h-[1px] bg-white"></div>
      </div>
      <div className="flex w-full flex-wrap-reverse md:flex-nowrap">
        <div className="mt-6 md:mt-0 text-gray-300">
          <Typography variant="h6" mb={3}>
            Hello! My name is Amlan and I enjoy creating things that I find
            cool. I am an Information Technology Engineer by education and a
            Software Engineer by profession.
          </Typography>
          <Typography variant="h6" mb={3}>
            I am currently working on the flagship web apps of LinkedIn (as a
            contractor via RSL). I also have interest in making mobile apps
            using frameworks like React Native and even native Android.
          </Typography>
          <Typography variant="h6" mb={3}>
            I love experimenting with and learning new technologies that I find
            cool. I love solving complex problems and creating solutions that
            have real world applications.
          </Typography>
        </div>
        <div className="relative w-[1200px] md:-top-36">
          <Image
            src={"./files/amlan-image-v1.png"}
            height={800}
            width={800}
            style={{ objectFit: "cover" }}
            alt={"Amlan Image"}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
