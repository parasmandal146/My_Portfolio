import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile-pic.jpg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.png';
import resume from '../assets/Prashant_Yadav_Resume.pdf';


export const assets = {
  profileImg,
  resume
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: [ 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Coding Languages',
    icon: FaCode,
    description: 'Building logical and performance-oriented solutions with languages',
    tags: ['C', 'Java', 'Python']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'EC2', 'S3 Bucket', 'IAM', 'SNS']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman', 'Thunder client', 'Canva']
  }
];



export const projects = [
  {
    title: "Staffing Company Website",
    description: "A full-featured staffing platform with job listings, candidate management, and employer authentication.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://vercenttechit.com/",
    code: "#",
  },
  {
    title: "College Website",
    description: "A full-featured college website with academic information, student services, and placement details.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "To-Do List Web App",
    description: "A full-featured to-do list application with task creation, editing, and completion tracking.",
    image: projectImg3,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaDatabase],
    demo: "https://prashantyadav91.github.io/To-Do--List/",
    code: "https://github.com/Prashantyadav91/To-Do--List",
  },
  {
    title: "Text to Speech Web App",
    description: "A full-featured text to speech website with voice conversion, playback, and controls.",
    image: projectImg4,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "https://prashantyadav91.github.io/Text_to_Speech/",
    code: "https://github.com/Prashantyadav91/Text_to_Speech",
  },
  {
    title: "Music Player Web App",
    description: "A full-featured music player website with soothing songs, audio playback, and controls.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://prashantyadav91.github.io/My_Music_Player/",
    code: "https://github.com/Prashantyadav91/My_Music_Player",
  },
  {
    title: "Calculator Web App",
    description: "A full-featured calculator website with basic arithmetic operations, responsive design, and error handling.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://prashantyadav91.github.io/My_Calculator/",
    code: "https://github.com/Prashantyadav91/My_Calculator",
  },
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
