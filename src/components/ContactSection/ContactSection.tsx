import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

type ContactSectionProps = {};

const ContactSection: React.FC<ContactSectionProps> = () => {
  const highlightClasses = "hover:text-[#8AFFD5] focus:text-[#8AFFD5]";
  const buttonClasses = `${highlightClasses} border border-[#8AFFD5] border-solid p-4 rounded hover:bg-[#8affd43c] active:bg-[#8affd43c] w-fit text-2xl my-16 mx-auto`;
  return (
    <section className="max-w-5xl w-full flex flex-col my-5 p-6" id="about">
      <div className="flex w-full md:mb-24 mb-10 items-center">
        <div className="grow w-full h-[1px] bg-gray-200"></div>
        <Typography
          variant="h4"
          mx={3}
          className="max-w-[fit-content] w-full text-center"
        >
          What&apos;s Next?
        </Typography>
        <div className="grow w-full h-[1px] bg-gray-200"></div>
      </div>

      <Typography variant="h3" textAlign={"center"} className="text-gray-300">
        {" "}
        Get in touch
      </Typography>

      <Typography
        variant="body1"
        className="w-full max-w-2xl px-4 text-gray-300 mx-auto"
        fontWeight={200}
        my={3}
      >
        If you are looking for a dedicated and innovative software engineer who
        is committed to delivering top-notch solutions or just want to say hi,
        let&apos;s connect!
      </Typography>

      <Link
        href="mailto:amlanroy2500@gmail.com"
        className={buttonClasses}
        aria-label="Button to email Amlan"
      >
        <span>Let&apos;s Connect</span>
      </Link>

      <div className="flex justify-center mt-14 gap-10 text-gray-300">
        <a
          href="https://github.com/amlan-roy"
          target="/"
          aria-label="Amlan's Github link"
          className={highlightClasses}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/amlan-roy/"
          target="/"
          aria-label="Amlan's Linkedin link"
          className={highlightClasses}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/_royamlan_"
          target="/"
          aria-label="Amlan's Twitter link"
          className={highlightClasses}
        >
          <TwitterIcon />
        </a>
        <a
          href="mailto:amlanroy2500@gmail.com"
          aria-label="Button to email Amlan"
          className={highlightClasses}
        >
          <EmailIcon />
        </a>
      </div>
    </section>
  );
};
export default ContactSection;
