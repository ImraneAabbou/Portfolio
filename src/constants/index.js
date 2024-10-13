import {
  frontend,
  backend,
  ux,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  nextjs,
  redux,
  framerMotion,
  tailwind,
  nodejs,
  git,
  figma,
  mysql,
  mongodb,
  bash,
  EspaceCrecheImage,
  TaalimAtlass,
  php,
} from "../assets";
import { IoSchool } from "react-icons/io5";
import { BiSolidInstitution } from "react-icons/bi";
import { SiGamejolt } from "react-icons/si";
import { SiRetroarch } from "react-icons/si";

export const resumePublicPath = "/cv.pdf";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Framer Motion",
    icon: framerMotion,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  //{
  //  name: "Prisma",
  //  icon: prisma,
  //},
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Bash Scripting",
    icon: bash,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

export const experiences = [
  {
    title: "High School Diploma in Physics and Chemistry",
    company_name: "High School Ibn Al Haitam",
    icon: IoSchool,
    iconBg: "#333333",
    date: "Sep 2022 - Aug 2023",
  },
  {
    title: "Digital Development Speciality 1st Year at ISTA",
    company_name: "Specialized Institute of Applied Technology Hay Hassani",
    icon: BiSolidInstitution,
    iconBg: "#333333",
    date: "Sep 2023 - June 2023",
  },
  {
    title: "Hackathon",
    company_name: "Hackathon organized by ISGI Philips",
    icon: SiGamejolt,
    iconBg: "#333333",
    date: "May 21, 2024",
  },
  {
    title: "QuickHack",
    company_name: "Hackathon Organized by ISTA Hay Hassani",
    icon: SiRetroarch,
    iconBg: "#333333",
    date: "June 11, 2024",
  },
  {
    title: "Fullstack Speciality, 2nd Year at ISTA",
    company_name: "Specialized Institute of Applied Technology Hay Hassani",
    icon: BiSolidInstitution,
    iconBg: "#333333",
    date: "Sep 2023 - Now",
  },
  //{
  //  title: "Full Stack Developer",
  //  company_name: "Diversity Cyber Council",
  //  icon: dcc,
  //  iconBg: "#333333",
  //  date: "Sep 2022 - Present",
  //},
];

export const projects = [
  {
    id: 1,
    name: "Espace Creche",
    description:
      "Full e-commerce website built with MERN, Typescript and Tailwindcss it comes with a blog, admin panel and supports product variants with different prices and images for each variant.",
    image: EspaceCrecheImage,
    repo: "https://github.com/ImraneAabbou/espace-creche-frontend",
    demo: "https://espace-creche.fr/",
  },
  {
    id: 2,
    name: "Taalim Atlass",
    description:
      "Educational plateform for post-bac studies orientations for a friend, i was missioned to create a multi-step form & initiate the authentication logic for backend and modify on basic views like login & registration on vuexy template where NEXT.JS, typescript, tailwindcss, prisma and JWT was used.",
    image: TaalimAtlass,
    repo: "https://github.com/Yassin6up/Taalim-Atlass",
    //demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];
