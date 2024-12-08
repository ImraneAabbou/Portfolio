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
    id: "experiences",
    title: "Experiences",
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
    title: {
      en: "High School Diploma in Physics and Chemistry",
      fr: "Baccalauréat en Physique et Chimie",
    },
    company_name: {
      en: "High School Ibn Al Haitam",
      fr: "Lycée Ibn Al Haitam",
    },
    icon: IoSchool,
    iconBg: "#333333",
    date: {
      en: "Sep 2022 - Aug 2023",
      fr: "Sep 2022 - Août 2023",
    },
  },
  {
    title: {
      en: "Digital Development Speciality 1st Year at ISTA",
      fr: "Spécialité Développement Digital 1ère Année à l'ISTA",
    },
    company_name: {
      en: "Specialized Institute of Applied Technology Hay Hassani",
      fr: "Institut Spécialisé de Technologie Appliquée Hay Hassani",
    },
    icon: BiSolidInstitution,
    iconBg: "#333333",
    date: {
      en: "Sep 2023 - June 2023",
      fr: "Sep 2023 - Juin 2023",
    },
  },
  {
    title: {
      en: "Hackathon Philips",
      fr: "Hackathon Philips",
    },
    company_name: {
      en: "Hackathon organized by ISGI Philips",
      fr: "Hackathon organisé par ISGI Philips",
    },
    icon: SiGamejolt,
    iconBg: "#333333",
    date: {
      en: "May 21, 2024",
      fr: "21 Mai, 2024",
    },
  },
  {
    title: {
      en: "QuickHack",
      fr: "QuickHack",
    },
    company_name: {
      en: "Hackathon Organized by ISTA Hay Hassani",
      fr: "Hackathon organisé par l'ISTA Hay Hassani",
    },
    icon: SiRetroarch,
    iconBg: "#333333",
    date: {
      en: "June 11, 2024",
      fr: "11 Juin, 2024",
    },
  },
  {
    title: {
      en: "Fullstack Speciality, 2nd Year at ISTA",
      fr: "Spécialité Fullstack, 2ème Année à l'ISTA",
    },
    company_name: {
      en: "Specialized Institute of Applied Technology Hay Hassani",
      fr: "Institut Spécialisé de Technologie Appliquée Hay Hassani",
    },
    icon: BiSolidInstitution,
    iconBg: "#333333",
    date: {
      en: "Sep 2023 - Now",
      fr: "Sep 2023 - Maintenant",
    },
  },
  //{
  //  title: {
  //    en: "Full Stack Developer",
  //    fr: "Développeur Full Stack",
  //  },
  //  company_name: {
  //    en: "Diversity Cyber Council",
  //    fr: "Diversity Cyber Council",
  //  },
  //  icon: dcc,
  //  iconBg: "#333333",
  //  date: {
  //    en: "Sep 2022 - Present",
  //    fr: "Sep 2022 - Présent",
  //  },
  // },
];

export const projects = [
  {
    id: 1,
    name: "Espace Creche",
    description: {
      en: "Full e-commerce website built with MERN, Typescript and Tailwindcss it comes with a blog, admin panel and supports product variants with different prices and images for each variant.",
      fr: "Site Web de commerce électronique complet construit avec MERN, Typescript et Tailwindcss, il est livré avec un blog, un panneau d'administration et prend en charge les variantes de produits avec des prix et des images différents pour chaque variante.",
    },
    image: EspaceCrecheImage,
    repo: "https://github.com/ImraneAabbou/espace-creche-frontend",
    demo: "https://espace-creche.fr/",
  },
  {
    id: 2,
    name: "Taalim Atlass",
    description: {
      en: "Educational plateform for post-bac studies orientations for a friend, i was missioned to create a multi-step form & initiate the authentication logic for backend and modify on basic views like login & registration on vuexy template where NEXT.JS, typescript, tailwindcss, prisma and JWT was used.",
      fr: "Plateforme pédagogique d'orientation d'études post-bac pour un ami, j'ai été missionné pour créer un formulaire en plusieurs étapes & initier la logique d'authentification pour le backend et modifier les vues de base comme la connexion & l'inscription sur le template vuexy où NEXT.JS, typescript, tailwindcss, prisma et JWT ont été utilisés.",
    },
    image: TaalimAtlass,
    repo: "https://github.com/Yassin6up/Taalim-Atlass",
    //demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export const langs = ["en", "fr"];
export const fallbackLang = "en";
