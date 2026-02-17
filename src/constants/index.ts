// IT‑Focused Portfolio Constants for Alvitt Jijo

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "about", title: "About", link: null },
  { id: "work", title: "Experience", link: null },
  { id: "contact", title: "Contact", link: null },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/alvittjijo",
  },
] as const;

// Services (IT‑Focused)
export const SERVICES = [
  {
    title: "Systems Technician",
    icon: backend,
  },
  {
    title: "Network Technician",
    icon: web,
  },
  {
    title: "IT Support Specialist",
    icon: mobile,
  },
  {
    title: "Technical Troubleshooting Expert",
    icon: creator,
  },
] as const;

// Technologies (IT‑Relevant)
export const TECHNOLOGIES = [
  { name: "Windows Server", icon: docker },
  { name: "Linux Administration", icon: nodejs },
  { name: "Networking (Cisco)", icon: threejs },
  { name: "Active Directory", icon: git },
  { name: "Virtualization (VMware/Hyper‑V)", icon: mongodb },
  { name: "Cloud (AWS)", icon: reactjs },
  { name: "PowerShell", icon: javascript },
  { name: "IT Security Basics", icon: figma },
] as const;

// Experience (Professional, IT‑Focused)
export const EXPERIENCES = [
  {
    title: "User Support Representative",
    company_name: "Sto & Go Mini Storage",
    icon: starbucks, // you can change this icon if you want
    iconBg: "#383E56",
    date: "Nov 2023 – Present",
    points: [
      "Providing friendly and efficient customer service during transactions and daily operations.",
      "Delivering help desk support and resolving client inquiries with accuracy and professionalism.",
      "Maintaining organized records and ensuring smooth communication between customers and management.",
      "Supporting administrative and technical tasks to improve overall service quality.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "North Bay Computer Services Inc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2021 – Present",
    points: [
      "Specializing in networking and Microsoft Endpoint Configuration Manager deployments.",
      "Diagnosing and resolving hardware and software issues to maintain optimal system performance.",
      "Configuring and troubleshooting network devices, workstations, and enterprise applications.",
      "Providing on-site and remote technical support for residential and business clients.",
    ],
  },
  {
    title: "Electronic Sales Associate",
    company_name: "OSL Retail Services",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2020 – Sep 2022",
    points: [
      "Coordinated efficient restocking of merchandise and ensured accurate product signage.",
      "Delivered exceptional technical product knowledge to assist customers in making informed purchases.",
      "Maintained an organized sales floor and supported inventory management tasks.",
      "Provided customer-focused service to drive sales and improve overall store performance.",
    ],
  },
] as const;
// Testimonials (Professional, Generic)
export const TESTIMONIALS = [
  {
    testimonial:
      "Alvitt consistently delivers reliable technical solutions and approaches every challenge with professionalism.",
    name: "Sarah Thompson",
    designation: "IT Manager",
    company: "TechNova IT Solutions",
    image: user1,
  },
  {
    testimonial:
      "His troubleshooting skills and calm approach under pressure make him an invaluable part of any IT team.",
    name: "Michael Carter",
    designation: "Network Administrator",
    company: "NorthBay Digital Services",
    image: user2,
  },
  {
    testimonial:
      "A dedicated technician with strong technical instincts and a passion for continuous learning.",
    name: "Daniel Lee",
    designation: "Systems Engineer",
    company: "MapleTech Networks",
    image: user3,
  },
] as const;

// Projects (Fake but Realistic IT Projects)
export const PROJECTS = [
  {
    name: "Enterprise Network Setup & Segmentation",
    description:
      "Designed and deployed a multi‑VLAN network for a simulated enterprise environment, including routing, firewall rules, and access control policies.",
    tags: [
      { name: "networking", color: "blue-text-gradient" },
      { name: "cisco", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/alvittjijo",
    live_site_link: "",
  },
  {
    name: "Windows Server & Active Directory Lab",
    description:
      "Built a full Windows Server environment with AD DS, DNS, DHCP, GPOs, and user management to simulate real‑world IT infrastructure.",
    tags: [
      { name: "windowsserver", color: "blue-text-gradient" },
      { name: "activedirectory", color: "green-text-gradient" },
      { name: "virtualization", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/alvittjijo",
    live_site_link: "",
  },
  {
    name: "AWS Cloud Deployment Lab",
    description:
      "Deployed a scalable cloud environment using EC2, S3, IAM, and VPC configurations to practice cloud architecture and security fundamentals.",
    tags: [
      { name: "aws", color: "blue-text-gradient" },
      { name: "cloud", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/alvittjijo",
    live_site_link: "",
  },
] as const;

// Social Links
export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/alvittjijo",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/alvittjijo",
  },
  {
    name: "Email",
    icon: twitter,
    link: "mailto:alvittjijo@gmail.com",
  },
] as const;