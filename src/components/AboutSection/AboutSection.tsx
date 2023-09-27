import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
        <div className="mt-6 md:mt-0 text-gray-300 flex flex-col justify-center">
          <Typography variant="body1" mb={3} fontWeight={200}>
            Hello! My name is <strong>Amlan</strong> and I enjoy creating things
            that I find cool. I am an Information Technology Engineer by
            education and a Software Engineer by profession.
          </Typography>
          <Typography variant="body1" mb={3}>
            I am currently working on the flagship web apps of{" "}
            <a href="https://www.linkedin.com/in/amlan-roy/" target="/">
              <strong className="text-[#8AFFD5]">LinkedIn</strong>
            </a>{" "}
            (as a contractor via{" "}
            <a href="https://www.rajasoftwarelabs.com/" target="/">
              <strong className="text-[#8AFFD5]">RSL</strong>
            </a>
            ). I also have interest in making mobile apps using frameworks like
            React Native and even native Android.
          </Typography>
          <Typography variant="body1" mb={3}>
            I love experimenting with and learning new technologies that I find
            cool. I love solving complex problems and creating solutions that
            have real world applications.
          </Typography>
          <Typography variant="body1" mb={3}>
            Here are a few technologies I&apos;ve been working with recently:
          </Typography>
          <ul className="list-disc text-[#8AFFD5] columns-2 pl-6">
            <li>
              <Typography variant="body1" className="text-gray-300">
                JavaScript (ES6+)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="text-gray-300">
                TypeScript
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="text-gray-300">
                EmberJS
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="text-gray-300">
                ReactJS
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="text-gray-300">
                NextJS
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="text-gray-300">
                Node.js
              </Typography>
            </li>
          </ul>
        </div>
        <div className=" md:w-[900px] md:m-0 w-[300px] m-auto">
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
