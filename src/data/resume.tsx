import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
   name: "Mobasir Sarkar",
   initials: "AMS",
   url: "https://mobasir-beyond.online",
   location: "Gurugram, India",
   locationLink: "https://www.google.com/maps/place/sanfrancisco",
   description:
      "Software Engineer Based In India. With Strong Foundation in Full-Stack Engineering , I enjoy building Scalable and High-Performance Applications.",
   summary: "I've always been a die-hard fan of the internet and have a passion for learning about new technologies and techniques. I make it a priority to stay up-to-date with the latest tech trends. Since completing my graduation, I have focused on creating scalable and high-performance applications.",
   avatarUrl: "/me.PNG",
   skills: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "Python",
      "Go",
      "Postgres",
      "Docker",
      "Nest.js",
      "MySQL",
      "Linux"
   ],
   navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
   ],
   contact: {
      email: "mobasirwork43@gmail.com",
      tel: "+91-7303689762",
      social: {
         GitHub: {
            name: "GitHub",
            url: "https://github.com/MobasirSarkar",
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/abdul-mobasir-sarkar-744643299",
            icon: Icons.linkedin,

            navbar: true,
         },
         X: {
            name: "X",
            url: "https://x.com/mobasir_3412?t=QK5u4nTnIBTNlQpdZOybug&s=09",
            icon: Icons.x,

            navbar: true,
         },
         Youtube: {
            name: "Youtube",
            url: "https://youtube.com/@beyondse?si=RM7c1dwNCU5Jg2xp",
            icon: Icons.youtube,
            navbar: true,
         },
         email: {
            name: "Send Email",
            url: "mailto:mobasirwork43@gmail.com",
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: "Bioqube Technologies",
         href: "https://bioqube.ai",
         badges: [],
         location: "Nodia, India",
         title: "Associate Software Engineer",
         logoUrl: "/bioqube.jpg",
         start: "September 2024",
         end: "Present",
         description: `I designed and implemented RESTful APIs and microservices using Golang and Node.js for scalable and efficient web applications. I collaborated closely with cross-functional teams in Agile environments, contributing to sprint planning, code reviews, and continuous process improvement. I managed relational databases, optimized MySQL queries, and ensured data integrity in PostgreSQL while handling complex data models and relationships.handling complex data models and relationships.`,
      },
      {
         company: "Bioqube Technologies",
         href: "https://bioqube.ai",
         badges: [],
         location: "Gurugram, India",
         title: "Software Developer Intern",
         logoUrl: "/bioqube.jpg",
         start: "June 2024",
         end: "September 2024",
         description: `I created RESTful APIs using Go and the Fiber framework. By implementing a multithreaded API architecture with Goroutines, I enhanced performance by 60% through concurrent request handling, resulting in an overall system efficiency improvement of 40%.`
      },
   ],
   education: [
      {
         school: "Maharshi Dayanand University",
         href: "https://mdu.ac.in/default.aspx",
         degree: "Bachelors In Computer Applications",
         logoUrl: "/mdu.png",
         start: "2021",
         end: "2024",
      },
   ],
   projects: [
      {
         title: "Post Jobs | A Website for Developer",
         href: "https://post-jobs.vercel.app/",
         dates: "Jan 2024 - Feb 2024",
         active: true,
         description: "I developed a feature-rich job posting web application that simplifies global job searches and postings. The platform includes a robust search and filtering system, allowing users to easily filter job postings by keywords, location, and title. This functionality enhances the user experience by making it quicker and more efficient to find relevant job opportunities.",
         technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
         ],
         links: [
            {
               type: "Website",
               href: "https://post-jobs.vercel.app",
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: "GitHub",
               href: "https://github.com/MobasirSarkar/post-jobs",
               icon: <Icons.github className="size-3" />
            }
         ],
         image: "/post-jobs.png",
      },
      {
         title: "A Interpreter In Go",
         href: "https://github.com/MobasirSarkar/Interpreter_In_Go",
         dates: "Jan 2024 - Feb 2024",
         active: true,
         description: "I built an interpreter for a custom Monkey language in Go, which involved lexical analysis, parsing, and AST generation. I developed a REPL that allows users to interactively input, evaluate, and test code in real time. I also enhanced the interpreter with robust error detection and recovery techniques and added support for data types such as arrays, strings, and hash maps",
         technologies: [
            "Go",
            "GitHub"
         ],
         links: [
            {
               type: "Website",
               href: "https://github.com/MobasirSarkar/Interpreter_In_Go",
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: "GitHub",
               href: "https://github.com/MobasirSarkar/Interpreter_In_Go",
               icon: <Icons.github className="size-3" />
            }
         ],
         image: "/interpreter_in_go.png",
      },
   ],
   hackathons: [
   ],
} as const;
