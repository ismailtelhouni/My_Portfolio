// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logot.png";
import Artisanat from "./images/artisanat2.jpg";
import PainCare from "./images/painCare-Z0X8D4xG.jpg";
import Location from "./images/locaPulse-IAejT_e1.jpg";


// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ismailtelhouni";

// Navbar Logo image
export const navLogo = Logo;

// Blog link icon - https://icon-sets.iconify.design/
export const linkedinPath = "https://www.linkedin.com/in/ismail-telhouni-880340254/";
export const linkedin = <Icon icon="fa-brands:linkedin" />;

export const InstagramPath = "https://www.instagram.com/telhouni_ismail/";
export const Instagram = <Icon icon="fa-brands:instagram" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am Ismail Telhouni, a passionate software development enthusiast and a student of software engineering at Ensias School. I am a full-stack developer with skills in various domains including IoT, cybersecurity, AI, and machine learning. My goal is to create seamless and innovative digital experiences by combining my front-end and back-end skills. I am always on the lookout for new technologies and opportunities to broaden my knowledge and contribute to shaping a better future through technology.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 28,
    skill: <Icon icon="fa-brands:php" className="display-6" />,
    name: "PHP",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 19,
    skill: <Icon icon="cib:laravel" className="display-6" />,
    name: "Laravel",
  },
  {
    id: 20,
    skill: <Icon icon="cib:symfony" className="display-6" />,
    name: "Symfony",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="logos:spring" className="display-5" />,
    name: "",
  },
  {
    id: 11,
    skill: <Icon icon="logos:angular" className="display-5" />,
    name: "",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 6,
    skill: <Icon icon="logos:nodejs" className="display-4"/>,
    name: "",
  },
  {
    id: 12,
    skill: <Icon icon="vscode-icons:file-type-tailwind" className="display-5  " />,
    name: "Tailwind CSS",
  },
  {
    id: 13,
    skill: <Icon icon="vscode-icons:file-type-sql" className="display-5  " />,
    name: "SQL",
  },
  {
    id: 14,
    skill: <Icon icon="fa-brands:python" className="display-5  " />,
    name: "Python",
  },
  {
    id: 15,
    skill: <Icon icon="fa-brands:java" className="display-5  " />,
    name: "Java",
  },
  {
    id: 16,
    skill: <Icon icon="vscode-icons:file-type-docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 17,
    skill: <Icon icon="logos:nextjs" className="display-6" />,
    name: "",
  },
  {
    id: 18,
    skill: <Icon icon="simple-icons:react" className="display-6" />,
    name: "React Native",
  },
  {
    id: 21,
    skill: <Icon icon="bi:database" className="display-6" />,
    name: "Oracle",
  },
  {
    id: 22,
    skill: <Icon icon="vscode-icons:file-type-maven" className="display-6" />,
    name: "Maven",
  },
  {
    id: 23,
    skill: <Icon icon="vscode-icons:file-type-firebase" className="display-6" />,
    name: "Firebase",
  },
  {
    id: 24,
    skill: <Icon icon="cib:unity" className="display-6" />,
    name: "Unity",
  },
  {
    id: 25,
    skill: <Icon icon="cib:jira" className="display-6" />,
    name: "Jira",
  },
  {
    id: 26,
    skill: <Icon icon="cib:trello" className="display-6" />,
    name: "Trello",
  },
  {
    id: 27,
    skill: <Icon icon="cib:expo" className="display-6" />,
    name: "Expo",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Artisanat_Frontend_Angular", "PainCare_Frontend_Angular", "AppGestionLocation"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "Artisanat_Frontend_Angular",
    image: Artisanat,
  },
  {
    name: "Artisanat_Backend_JAVA_EE",
    image: Artisanat,
  },
  {
    name: "PainCare_Frontend_Angular",
    image: PainCare,
  },
  {
    name: "PainCare_Backend_Spring",
    image: PainCare,
  },
  {
    name: "AppGestionLocation",
    image: Location,
  },
  {
    name: "GestionLocation",
    image: Location,
  },

];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xqkrlnqq";
