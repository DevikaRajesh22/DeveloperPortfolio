import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "text-left justify-center",
      img: "",
      spareImg: "",
    },    
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a full stack project",
      description: "The Velvet Vows",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Organic Beauty",
      des: "Explore Organic Beauty, your premier destination for eco-friendly skincare, offering a seamless shopping experience with our MERN stack-based platform.",
      img: "/organic.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://organicbeauty.cloud/",
    },
    {
      id: 2,
      title: "Vacation Vista",
      des: "Discover Vacation Vista, a seamless booking platform built with the MERN stack, offering you the best vacation experiences effortlessly.",
      img: "/vacation.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://vacationvistaclient.vercel.app/",
    },
    {
      id: 3,
      title: "Developer Portfolio",
      des: "Explore my developer portfolio, crafted with Next.js and Framer Motion, showcasing innovative projects and dynamic animations.",
      img: "/portfolio.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Quiz Master",
      des: "Discover Quiz Master, an engaging and interactive quiz platform built with the MERN stack for a seamless user experience.",
      img: "/quiz.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://quizmaster-eight.vercel.app/",

    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "MERN Stack Development (2023 - Present)",
      desc: "Assisted in the development of a web-based platform using MERN, Javascript, Typescript, Clean Architecture, MVC Architecture, Data structures and figma",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Bachelor's of Computer Applications (2020 - 2023)",
      desc: "Percentage : 89.97%",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Higher Secondary Education (2018 - 2020)",
      desc: "Percentage : 90.04%",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "SSLC (2027 - 2018)",
      desc: "A+",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:'https://www.github.com/DevikaRajesh22'
    },
    {
      id: 2,
      img: "/twit.svg",
      link:'https://x.com/DevikaRajesh22'
    },
    {
      id: 3,
      img: "/link.svg",
      link:'https://www.linkedin.com/in/devikarajesh'
    },
  ];