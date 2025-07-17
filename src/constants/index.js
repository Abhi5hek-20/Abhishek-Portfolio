export const myProjects = [
  {
    id: 1,
    title: "WORKOUT TRACKER",
    github: "https://github.com/abhishekam2004/workout-tracker",
    description:
      "A full-stack fitness tracking app built using React.js for the frontend and Redux for state management, with Node.js, Express, and SQL on the backend. Users can log, edit, and delete workouts, track sets, reps, and max weight, and visualize progress with Chart.js.",
    subDescription: [
      "Includes inline editing, bulk delete, RESTful API integration, and a responsive UI styled with Tailwind CSS for efficient workout tracking and progress monitoring.",
    ],
    href: "",
    logo: "",
    extraImages: [ // ✅ renamed from "images"
      "/assets/projects/WT_home.jpg",
      "/assets/projects/WT_login.jpg",
    ],
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Redux", path: "" },
      { id: 3, name: "Node.js", path: "" },
      { id: 4, name: "Express", path: "" },
      { id: 5, name: "SQL", path: "" },
      { id: 6, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 7, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "UberForBlood — Full-Stack MERN Application",
    github: "https://github.com/abhishekam2004/uberforblood",
    description:
      "Designed a real-time blood donation platform with Socket.io for instant donor-seeker communication. Used Redux Toolkit for scalable state management and MongoDB for persistent user/request data. Reduced geolocation response time by ~80% using client-side caching. Implemented secure user authentication and optimized backend API throughput.",
    subDescription: [
      "Ongoing project. Real-time, scalable, and secure blood donation platform.",
    ],
    href: "",
    logo: "",
    extraImages: [ // ✅ renamed from "images"
      "/assets/projects/UFB_1.png",
      "/assets/projects/UFB_2.png",
    ],
    tags: [
      { id: 1, name: "MERN", path: "" },
      { id: 2, name: "Socket.io", path: "" },
      { id: 3, name: "Redux Toolkit", path: "" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 3,
    title: "HAND GESTURE RECOGNITION USING PYTHON",
    github: "https://github.com/abhishekam2004/hand-gesture-cnn",
    description:
      "Creating a desktop application that uses a computer’s webcam to capture a person signing gestures for American Sign Language (ASL), and translate it into corresponding text and speech in real time.",
    subDescription: [
      "The translated sign language gesture will be acquired in text which is farther converted into audio. In this manner we are implementing a finger spelling sign language translator. To enable the detection of gestures, we are making use of a Convolutional neural network (CNN).         ",
    ],
    href: "",
    logo: "",
    extraImages: [ // ✅ renamed from "images"
      "/assets/projects/HGVC_1.png",
      "/assets/projects/HGVC_2.png",
    ],
    tags: [
      { id: 1, name: "Python", path: "" },
      { id: 2, name: "OpenCV", path: "" },
      { id: 3, name: "CNN", path: "" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-a-125bb5322/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/abhishekam2004",
    icon: "/assets/logos/github.svg",
  },
];
