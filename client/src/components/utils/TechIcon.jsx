import React from "react";
import { SiNextdotjs, SiJavascript, SiRedux, SiFigma, SiFirebase, SiMongodb, SiJsonwebtokens, SiCloudinary, SiSocketdotio, SiAxios, SiStripe, SiExpress, SiNodedotjs, SiTypescript, SiSass, SiPrisma, SiGraphql, SiVite } from "react-icons/si";
import { FaUserShield, FaGithub } from "react-icons/fa6";
import { MdOutlineAnimation } from "react-icons/md";
import nextJsIcon from "../../assets/images/NextJsIcon.svg";
import ReactIcon from "../../assets/images/react.svg";
import TailwindIcon from "../../assets/images/TailwindCssIcon.svg";
import ReduxIcon from "../../assets/images/ReduxIcon.svg";
import FigmaIcon from "../../assets/images/FigmaIcon.svg";
import FirebaseIcon from "../../assets/images/FirebaseIcon.svg";
import HtmlIcon from "../../assets/images/HtmlIcon.svg";
import CssIcon from "../../assets/images/CssIcon.svg";
import BootstrapIcon from "../../assets/images/BootStrapIcon.svg";
import GithubIcon from "../../assets/images/GithubIcon.svg";
import AosIcon from "../../assets/images/AosIcon.png";

const iconClass = "h-full w-full object-contain";

const iconMap = {
  nextjs: { type: "asset", src: nextJsIcon, alt:"Next" },
  react: { type: "asset", src: ReactIcon, alt: "React" },
  tailwind: { type: "asset", src: TailwindIcon, alt: "Tailwind CSS" },
  javascript: { type: "icon", node: SiJavascript, color: "#F7DF1E" },
  typescript: { type: "icon", node: SiTypescript, color: "#3178C6" },
  html: { type: "asset", src: HtmlIcon, alt: "HTML" },
  css: { type: "asset", src: CssIcon, alt: "CSS" },
  redux: { type: "asset", src: ReduxIcon, alt: "Redux" },
  zustand: { type: "icon", node: FaUserShield, color: "#ff7a00" },
  figma: { type: "asset", src: FigmaIcon, alt: "Figma" },
  firebase: { type: "asset", src: FirebaseIcon, alt: "Firebase" },
  mongodb: { type: "icon", node: SiMongodb, color: "#47A248" },
  postgresql: { type: "icon", node: SiPrisma, color: "#0EA5E9" },
  bcrypt: { type: "icon", node: FaUserShield, color: "#7c3aed" },
  authentication: { type: "icon", node: FaUserShield, color: "#dc2626" },
  aos: { type: "asset", src: AosIcon, alt: "AOS" },
  jwt: { type: "icon", node: SiJsonwebtokens, color: "#f97316" },
  cloudinary: { type: "icon", node: SiCloudinary, color: "#0f52ba" },
  "socket.io": { type: "icon", node: SiSocketdotio, color: "#111827" },
  axios: { type: "icon", node: SiAxios, color: "#5A29E4" },
  stripe: { type: "icon", node: SiStripe, color: "#635BFF" },
  express: { type: "icon", node: SiExpress, color: "#000000" },
  nodejs: { type: "icon", node: SiNodedotjs, color: "#68A063" },
  prisma: { type: "icon", node: SiPrisma, color: "#0F172A" },
  framer: { type: "icon", node: MdOutlineAnimation, color: "#0055FF" },
  gsap: { type: "icon", node: MdOutlineAnimation, color: "#88CE02" },
  bootstrap: { type: "asset", src: BootstrapIcon, alt: "Bootstrap" },
  sass: { type: "icon", node: SiSass, color: "#CF649A" },
  graphql: { type: "icon", node: SiGraphql, color: "#E10098" },
  vite: { type: "icon", node: SiVite, color: "#646CFF" },
  github: { type: "icon", node: FaGithub, color: "#181717" },
};

const normalizeTech = (tech) => String(tech || "").trim().toLowerCase();

const inferTechFromAsset = (tech) => {
  if (typeof tech !== "string") return "";
  const lower = tech.toLowerCase();
  if (lower.includes("nextjsicon")) return "nextjs";
  if (lower.includes("react")) return "react";
  if (lower.includes("tailwind")) return "tailwind";
  if (lower.includes("redux")) return "redux";
  if (lower.includes("figma")) return "figma";
  if (lower.includes("firebase")) return "firebase";
  if (lower.includes("html")) return "html";
  if (lower.includes("css")) return "css";
  if (lower.includes("bootstrap")) return "bootstrap";
  if (lower.includes("aos")) return "aos";
  if (lower.includes("github")) return "github";
  return "";
};

const TechIcon = ({ tech, className = "", title }) => {
  const normalized = normalizeTech(inferTechFromAsset(tech) || tech);
  const entry = iconMap[normalized];

  if (!entry) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full border border-Primary/10 bg-white/70 text-[10px] font-semibold uppercase text-Primary/60 ${className}`}
        title={title || tech}
      >
        {String(tech || "").slice(0, 2)}
      </span>
    );
  }

  if (entry.type === "asset") {
    return <img src={entry.src} alt={entry.alt || tech} title={title || tech} className={`${iconClass} ${className}`} loading="lazy" />;
  }

  const Icon = entry.node;
  return (
    <Icon
      title={title || tech}
      aria-label={title || tech}
      className={className}
      style={{ color: entry.color }}
    />
  );
};

export default TechIcon;
