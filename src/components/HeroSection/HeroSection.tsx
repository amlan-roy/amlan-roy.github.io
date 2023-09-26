import React from "react";
import Typography from "@mui/material/Typography/Typography";
import Link from "next/link";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const highlightClasses = "hover:text-[#8AFFD5] focus:text-[#8AFFD5]";
  const buttonClasses = `${highlightClasses} border border-[#8AFFD5] border-solid p-4 rounded hover:bg-[#8affd43c] active:bg-[#8affd43c] w-fit text-2xl my-32 mx-auto`;

  return (
    <section className="max-w-5xl w-full flex flex-col mt-16 p-6" id="about">
      <Typography
        variant="body1"
        sx={{ typography: { md: "h5", sm: "h6" } }}
        mb={3}
      >
        Hi, my name is
      </Typography>
      <Typography
        variant="h4"
        sx={{ typography: { md: "h2", sm: "h3" } }}
        className="font-bold"
      >
        Amlan Roy
      </Typography>
      <Typography
        variant="h5"
        sx={{ typography: { md: "h2", sm: "h3" } }}
        className="font-bold text-gray-400"
        mb={4}
      >
        I solve problems using Technology
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-400"
        sx={{ typography: { sm: "h6" } }}
      >
        I’m a software developer who loves to create engaging and user-friendly
        web experiences. Currently, I’m focused at using cutting-edge
        technologies to build innovative and scalable web solutions at{" "}
        <a href="https://www.rajasoftwarelabs.com/" target="/">
          <strong className="text-[#8AFFD5]">RSL.</strong>
        </a>
      </Typography>

      <Link href="#contactMe" className={buttonClasses}>
        <span>Contact Me</span>
      </Link>
    </section>
  );
};
export default HeroSection;
