"use client";
import Link from "next/link";
import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const highlightClasses = "hover:text-[#8AFFD5] focus:text-[#8AFFD5]";
  const navLinkClasses = `${highlightClasses} transition-all`;
  const buttonClasses = `${highlightClasses} border border-[#8AFFD5] border-solid p-3 rounded hover:bg-[#8affd43c] active:bg-[#8affd43c] text-center`;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLink = [
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "Work",
      href: "#work",
    },
    {
      text: "Contact Me",
      href: "#contactMe",
    },
  ];

  return (
    <nav className="h-24 w-full sticky top-0 left-0 flex justify-between items-center p-4 px-6 z-50  bg-[#0A192F]">
      <Link href={"/"}>
        <span className={`text-4xl font-bold text-white ${highlightClasses}`}>
          A
        </span>
      </Link>
      <div className="gap-10 text-white mx-5 hidden sm:flex">
        <div className="flex gap-3 items-center">
          {navLink.map(({ href, text }, index) => (
            <Link
              href={href}
              className={navLinkClasses}
              key={`nav-element-${index}`}
            >
              {text}
            </Link>
          ))}
        </div>
        <Link
          href="/files/resume.pdf"
          download={"amlan-roy-software-dev-resume"}
          target="/"
          className={buttonClasses}
        >
          <span>Resume</span>
        </Link>
      </div>

      <button onClick={toggleDrawer} className="text-white sm:hidden">
        <MenuIcon />
      </button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        className="bg-[#0A192F]"
        PaperProps={{
          sx: { width: "75%", backgroundColor: "#0A192F" },
        }}
      >
        <div className="w-full h-full p-5 py-10 text-white flex flex-col gap-10">
          {navLink.map(({ href, text }, index) => (
            <div onClick={toggleDrawer} key={`toggle-drawer-element-${index}`}>
              {
                <Link
                  href={href}
                  className={navLinkClasses}
                  key={`nav-element-${index}`}
                >
                  {text}
                </Link>
              }
            </div>
          ))}
          <Link
            href="/files/resume.pdf"
            download={"amlan-roy-software-dev-resume"}
            target="/"
            className={buttonClasses}
          >
            <span>Resume</span>
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};
export default NavBar;
