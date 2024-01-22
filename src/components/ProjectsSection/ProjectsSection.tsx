import Image from "next/image";
import React, { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

type ProjectsSectionProps = {};

type TProject = {
  img: string;
  title: string;
  description: string;
  technologies?: string[];
  label?: string;
  links?: {
    ariaLabel: string;
    icon: ReactElement;
    url: string;
  }[];
};

const PROJECTS: TProject[] = [
  {
    img: "files/code-korbo-demo-v1.gif",
    title: "Code Korbo",
    description:
      "An online coding platform where you can practice different DSA problems in multiple programming languages.",
    technologies: ["Next.js", "React.js", "Judge0", "Firebase"],
    label: "Featured Project",
    links: [
      {
        icon: <LaunchIcon />,
        ariaLabel: "The deployed project on vercel.",
        url: "https://code-korbo-web.vercel.app/",
      },
      {
        icon: <GitHubIcon />,
        ariaLabel: "The Github URL of this project.",
        url: "https://github.com/amlan-roy/code-korbo-web",
      },
    ],
  },
  {
    img: "files/fit-mitra-image-v1.jpg",
    title: "Fit Mitra",
    description:
      "An android app that enables users to monitor and improve their exercise performance at home by analyzing the user’s posture and movement by using AI on the camera input and provides real-time feedback and guidance",
    technologies: ["Kotlin", "Android", "Firebase", "MLKit", "Open Source"],
    label: "Featured Project",
    links: [
      {
        icon: <LaunchIcon />,
        ariaLabel: "The research paper url for the project",
        url: "https://ijrar.org/viewfull.php?&p_id=IJRAR1CNP035",
      },
    ],
  },
  {
    img: "files/portfolio-image-v1.jpeg",
    title: "Personal Portfolio Website",
    description:
      "An Personal Portfolio website made using Next.js 13 and deployed on Github Pages",
    technologies: ["Next.js", "React.js", "Github Pages", "Open Source"],
    links: [
      {
        icon: <LaunchIcon />,
        ariaLabel: "The deployed project on Github Pages.",
        url: "https://amlan-roy.github.io/",
      },
      {
        icon: <GitHubIcon />,
        ariaLabel: "The Github URL of this project.",
        url: "https://github.com/amlan-roy/amlan-roy.github.io",
      },
    ],
  },
];

const ProjectCard = ({
  projectData: { img, title, description, technologies, label, links },
  index,
}: {
  projectData: TProject;
  index: number;
}) => {
  const ProjectDescription = (
    <div className="flex w-full  sm:w-auto flex-col gap-4 m-0 sm:m-4 p-4 sm:p-0 sm:bg-transparent bg-[#000000ce]">
      {label && (
        <Typography variant={"h6"} className="text-[#8AFFD5]">
          {label}
        </Typography>
      )}
      <Typography variant="h4" className="sm:text-gray-100">
        {title}
      </Typography>
      <div className="bg-[#ffffff14] px-4 py-2 max-w-md">
        <Typography
          variant="body1"
          className="sm:text-gray-300"
          fontWeight={200}
        >
          {description}
        </Typography>
      </div>
      {technologies && (
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology, techIndex) => (
            <Typography
              className="sm:text-gray-400 bg-[#ffffff14] hover:shadow-customGlow rounded-full p-1 px-2 text-sm"
              key={`project-${index}-technology-${techIndex}`}
            >
              {technology}
            </Typography>
          ))}{" "}
        </div>
      )}
      {links && (
        <div className="flex flex-wrap gap-3">
          {links.map(({ ariaLabel, url, icon }, linkIndex) => (
            <a
              href={url}
              aria-label={ariaLabel}
              target="/"
              key={`project-${index}-link-${linkIndex}`}
            >
              {icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        className={`sm:flex hidden w-full justify-center ${
          index % 2 == 1 && "flex-row-reverse"
        }`}
      >
        {ProjectDescription}
        <Image
          src={img}
          alt={"Project Image"}
          width={600}
          height={400}
          className="max-w-[300px] object-contain"
        />
      </div>

      <div
        className={"flex w-full justify-center m-4 sm:hidden"}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {ProjectDescription}
      </div>
    </>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <section
      className="max-w-5xl w-full flex flex-col my-5 p-6 scroll-mt-24"
      id="work"
    >
      <div className="flex w-full md:mb-24 mb-10 items-center">
        <div className="grow w-full h-[1px] bg-gray-200 "></div>
        <Typography
          variant="h4"
          mx={3}
          className="w-full text-center flex-4 whitespace-nowrap"
        >
          Featured Projects
        </Typography>
        <div className="grow w-full h-[1px] bg-gray-200"></div>
      </div>
      <div className="flex flex-col w-full max-w-5xl gap-6 p-0 items-center h-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            projectData={project}
            index={index}
            key={`project-card-${index}`}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;
