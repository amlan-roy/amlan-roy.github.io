"use client";

import { Typography } from "@mui/material";
import React from "react";

type ExperienceSectionProps = {};

// Latest jobs should be at the top
const JOBS_DATA = [
  {
    companyName: "RSL",
    companyUrl: "https://www.rajasoftwarelabs.com/",
    jobTitle: "Software Engineer",
    jobDurationText: "June 2022 - Present",
    experienceDescription: [
      "Designed and implemented complex UI components and features using EmberJS and Glimmer components for LinkedIn's flagship user and recruiter apps, resulting in a 20% increase in client satisfaction and engagement.",
      "Developed and tested code using Play Framework for server-side applications that support LinkedIn's ad library and other lite PWAs, improving their scalability, security, and performance and integrating them with the client-side applications.",
      "Used agile methodologies and tools such as Jira and Git to increase collaboration and efficiency of the cross-functional teams across different time zones, achieving a 40% increase in productivity and quality for LinkedIn's software projects.",
      "Enhanced user experience and functionality of LinkedIn's user and recruiter apps that serve millions of daily users, by applying best practices and standards for web development and accessibility.",
      "Collaborated with other developers, designers, and stakeholders deliver high-quality software solutions, using code reviews, pair programming, and feedback sessions.",
    ],
  },
  {
    companyName: "RSL",
    companyUrl: "https://www.rajasoftwarelabs.com/",
    jobTitle: "SDE Intern",
    jobDurationText: "December 2021 - May 2022",
    experienceDescription: [
      "Participated in all stages of the software development lifecycle for the web development project as the sole intern in a dynamic team for LinkedIn, receiving positive feedback from the clients and stakeholders.",
      "Debugged and optimized code using best practices to improve user interface, accessibility, and performance of LinkedIn's flagship web application.",
      "Learned and applied new technologies and frameworks such as EmberJs, TypeScript, GraphQL, etc. to the web development project, expanding technical skills and knowledge of the web development technologies and frameworks.",
      "Collaborated with other web developers, designers, and project managers in a fast-paced and agile environment, using tools such as Git, Jira, and Slack.",
      "Demonstrated initiative, creativity, and problem-solving skills in developing and delivering high-quality web solutions for LinkedIn's professional network platform.",
    ],
  },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const [activeJobIndex, setActiveJobIndex] = React.useState(0);
  const {
    companyName,
    companyUrl,
    jobTitle,
    jobDurationText,
    experienceDescription,
  } = JOBS_DATA[activeJobIndex];
  return (
    <section
      className="max-w-5xl w-full flex flex-col my-5 p-6 scroll-mt-24"
      id="experience"
    >
      <div className="flex w-full md:mb-24 mb-10 items-center">
        <div className="grow w-full h-[1px] bg-gray-200 "></div>
        <Typography
          variant="h4"
          mx={3}
          className="w-full text-center flex-4 whitespace-nowrap"
        >
          Where I&apos;ve Worked
        </Typography>
        <div className="grow w-full h-[1px] bg-gray-200"></div>
      </div>

      <div className="flex w-full max-w-3xl p-6 sm:flex-row flex-col md:gap-24 sm:gap-8 ">
        <div className="w-full flex sm:border-l border-gray-200 gap-4 overflow-x-auto sm:flex-col sm:overflow-x-visible border-l-0 py-1 sm:w-fit px-6 sm:px-0 sm:items-start items-center mx-auto sm:mx-0 h-9 sm:h-fit justify-center sm:justify-start mb-9">
          {JOBS_DATA.map(({ companyName }, index) => {
            return (
              <button
                key={`job-description-list-item-${index}`}
                className={`${
                  activeJobIndex === index &&
                  "sm:border-l-4 sm:border-b-0 border-solid border-[#8AFFD5] border-b-4 text-[#8AFFD5]"
                } pl-4 relative sm:-left-[2px] sm:bottom-0 -bottom-[5px] pb-0.5 transition-all `}
                onClick={() => {
                  setActiveJobIndex(index);
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={200}
                  textAlign={"center"}
                >
                  {companyName}
                </Typography>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col">
          <Typography variant="h5" className="text-gray-200">
            {jobTitle}
            <a
              className="text-[#8AFFD5] font-bold"
              href={companyUrl}
              target="/"
              aria-label={companyName}
            >
              {" "}
              @ {companyName}
            </a>
          </Typography>
          <Typography variant="h6" className="text-gray-400">
            {jobDurationText}
          </Typography>
          <ul className="list-disc text-[#8AFFD5] pl-6 mt-5">
            {experienceDescription.map((point, index) => (
              <li key={`job-desc-point-${index}`}>
                <Typography
                  variant="body1"
                  fontWeight={200}
                  className="text-gray-100"
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
