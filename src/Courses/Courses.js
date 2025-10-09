import JavascriptDSA from "../Assets/images/JavascriptDSA.webp";
import GCP from "../Assets/images/GCP.png";
import AWA_C03 from "../Assets/images/AWA_C03.jpg";
import EthicalHacking_JS from "../Assets/images/EthicalHacking_JS.jpg";
import React_TypeScript from "../Assets/images/React_TypeScript.png";
import Node_Pack_Module from "../Assets/images/Node_Pack_Module.webp";
import Machine from "../Assets/images/Introduction to Machine Learning.webp";
import GitGitHub from "../Assets/images/learn-git.webp";
import Generative_AI from "../Assets/images/Generative_AI.jpg";
import AWS from "../Assets/images/AWS.jpg";
import Spring from "../Assets/images/Spring.jpeg";
import JEST from "../Assets/images/Jest.jpg";
import NEXTJS from "../Assets/images/Next js.webp";
import PROMT_ENG from "../Assets/images/promptengineering.webp";

const apikey = "AIzaSyBCHCqjPT5dn9x8M_PCEeoKSaLBu8CWRy4";

const course = [
  {
    name: "JavaScript Data Structures and Algorithms",
    folderid: "1-2wSOzGPQg70IwFUnUnxnJk0apHCIgji",
    img: JavascriptDSA,
  },
  {
    name: "GCP Associate Cloud Engineer Certification Google Cloud",
    folderid: "1EHwKZmDBlpNLpzBgRPBQCLK_2Vofebwr",
    img: GCP,
  },
  {
    name: "Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02",
    apikey: "AIzaSyDaRxfpcqNfs6aW4R0pE9F2ZyrV5HNKcG8",
    folderid: "1-0tW5h9dBooFzUFKwlxkJkM6KoyKUZrP",
    img: AWS,
  },
  {
    name: "Reactive Microservices with Spring WebFlux",
    folderid: "16hWqatHyuzWJD2oUIFzFkdmLpD2tAC8u",
    img: Spring,
  },
  {
    name: "Typescript & React JS Course with React & Typescript Project",
    folderid: "1PUDOFhC8EuQ__RonmUu0d_mtGhZSPeIz",
    img: React_TypeScript,
  },
  {
    name: "Understanding NPM - Node.js Package Manager",
    folderid: "1Oiz6iCUXdqAo15GVF37JwV7slj7tMNLZ",
    img: Node_Pack_Module,
  },
  {
    name: "Next.js & React - The Complete Guide",
    folderid: "1-20GymnKHjdJtz0dmomo8caG93COAJRO",
    img: NEXTJS,
  },
  {
    name: "Mastering Prompt Engineering for Chat GPT A Beginner's Guide",
    folderid: "14zyDGrkSjWernWWT2ytETlABSz3uokEu",
    img: PROMT_ENG,
  },
  {
    name: "React Testing Library and Jest: The Complete Guide",
    folderid: "195y-jUVjdWZhioG8ZsvBpfK_q45rJx6P",
    img: JEST,
  },
  {
    name: "Introduction to Machine Learning",
    folderid: "",
    apikey: "",
    img: Machine,
    availability: "false",
  },
  {
    name: "Learn and Master Git & Github from zero to Hero",
    folderid: "1WYHVMilPj_NPwcWhRodjY82gzMbuGOf6",
    img: GitGitHub,
  },
  {
    name: "The Generative AI Full Stack for Beginners and Pro Level",
    folderid: "15zJkHsgUUvWXPd1-Pilvs60ylLjJF302",
    img: Generative_AI,
  },
  {
    name: "Ethical Hacking With JavaScript",
    folderid: "171YUEODao0mbZ3t0gwDlBn6UyWD4TGOH",
    img: EthicalHacking_JS,
  },
  {
    name: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
    folderid: "1R41m-1RWAsAeoYe5BPsbys42-OdEvXWY",
    img: AWA_C03,
  },
  {
    name: "Coursera Generative AI For Everyone FCO",
    folderid: "1QZSEhceF7_y8t6T5mt_o0GY4gUISVdLF",
    img: Generative_AI,
  },
];

export const Courses = course
  .sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt())
  .map((e, index) => {
    return {
      id: index + 1,
      name: e.name,
      folderid: e.folderid,
      apikey: e.apikey || apikey,
      img: e.img,
      availability: e.availability === "false" ? false : true,
    };
  });
