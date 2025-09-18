import { FaBell, FaBook } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGlobe, FaPhone } from "react-icons/fa6";

export const navigation = {
  pages: [
    { name: "Home", href: "/dashboard" },
    {
      name: "Courses",
      href: "/dashboard/courses", // main page
      categories: [
        {
          id: "web",
          name: "Web Development",
          items: [
            { name: "HTML & CSS", href: "/dashboard/courses/web/html-css" },
            { name: "JavaScript", href: "/dashboard/courses/web/javascript" },
            { name: "React", href: "/dashboard/courses/web/react" },
            { name: "Node.js", href: "/dashboard/courses/web/nodejs" },
            { name: "Vue.js", href: "/dashboard/courses/web/vue" },
            { name: "Angular", href: "/dashboard/courses/web/angular" },
            { name: "Full Stack", href: "/dashboard/courses/web/fullstack" },
            { name: "Browse All", href: "/dashboard/courses/web" },
          ],
        },
        {
          id: "mobile",
          name: "Mobile Development",
          items: [
            { name: "iOS", href: "/dashboard/courses/mobile/ios" },
            { name: "Android", href: "/dashboard/courses/mobile/android" },
            {
              name: "React Native",
              href: "/dashboard/courses/mobile/react-native",
            },
            { name: "Flutter", href: "/dashboard/courses/mobile/flutter" },
            { name: "Swift", href: "/dashboard/courses/mobile/swift" },
            { name: "Kotlin", href: "/dashboard/courses/mobile/kotlin" },
          ],
        },
        {
          id: "languages",
          name: "Programming Languages",
          items: [
            { name: "Python", href: "/dashboard/courses/languages/python" },
            { name: "Java", href: "/dashboard/courses/languages/java" },
            { name: "C#", href: "/dashboard/courses/languages/csharp" },
            { name: "C++", href: "/dashboard/courses/languages/cpp" },
            { name: "Go", href: "/dashboard/courses/languages/go" },
          ],
        },
        {
          img: "/course-1.svg",
          name: "Data Science",
          href: "/dashboard/courses/data-science",
        },
      ],
    },
    { name: "About Us", href: "/dashboard/about-us" },
    { name: "Pricing", href: "/dashboard/pricing" },
    { name: "Contact", href: "/dashboard/contact-us" },
  ],
};

export const benefitsData = [
  {
    id: 1,
    number: "01",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 2,
    number: "02",
    title: "Expert Instruction",
    description:
      "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: 3,
    number: "03",
    title: "Diverse Course Offerings",
    description:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: 4,
    number: "04",
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    id: 5,
    number: "05",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    id: 6,
    number: "06",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

export const coursesData = [
  {
    id: 1,
    imgHeader: "/course-1.svg",
    images: ["/course-1-1.png", "/course-1-2.png", "/course-1-3.png"],
    duration: "4 Weeks",
    level: "Beginner",
    author: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    curriculum: [
      {
        module: "01",
        title: "Introduction to HTML",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "HTML Basics & Structure",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Common HTML Tags & Attributes",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 03",
            title: "Creating Your First Webpage",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "02",
        title: "Styling with CSS",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Introduction to CSS & Selectors",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Box Model & Positioning",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 03",
            title: "Flexbox & Grid Basics",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "03",
        title: "Introduction to Responsive Design",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Responsive Web Design Principles",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Media Queries & Breakpoints",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "04",
        title: "Design Principles for Web",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Typography & Color Theory",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Visual Hierarchy & Layout",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "05",
        title: "Building a Basic Website",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Planning Your Website",
            duration: "30 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Creating Multi-Page Layouts",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 03",
            title: "Final Project & Deployment",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    imgHeader: "/course-2.svg",
    images: ["/course-2-1.png", "/course-2-2.png", "/course-2-3.png"],
    duration: "6 Weeks",
    level: "Intermediate",
    author: "By Emily Johnson",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    curriculum: [
      {
        module: "01",
        title: "Introduction to UI/UX Design",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Importance of User-Centered Design",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Understanding UI/UX Principles",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "02",
        title: "User Research and Personas",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Conducting User Research & Interviews",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Creating Personas & Scenarios",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "03",
        title: "Wireframing and Prototyping",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Low-Fidelity Wireframes",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Interactive Prototypes",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "04",
        title: "Visual Design and Branding",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Color Theory & Typography",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Creating a Strong Brand Identity",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "05",
        title: "Usability Testing and Iteration",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Usability Testing Methods",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Analyzing Test Results",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 03",
            title: "Iterating & Improving Designs",
            duration: "45 Minutes",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    imgHeader: "/course-3.svg",
    images: ["/course-3-1.png", "/course-3-2.png", "/course-3-3.png"],
    duration: "8 Weeks",
    level: "Intermediate",
    author: "By David Brown",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    curriculum: [
      {
        module: "01",
        title: "Introduction to Mobile App Development",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Overview of iOS & Android Ecosystems",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Setting Up Development Environment",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "02",
        title: "Fundamentals of Swift Programming (iOS)",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Swift Basics & Syntax",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Working with UI Components",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "03",
        title: "Fundamentals of Kotlin Programming (Android)",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Kotlin Basics & Syntax",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Building Layouts with XML",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "04",
        title: "Building User Interfaces",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "UI/UX Best Practices for Mobile",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Handling Navigation & State",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "05",
        title: "App Deployment and Testing",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Debugging & Testing Strategies",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Publishing Apps to App Stores",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    imgHeader: "/course-4.svg",
    images: ["/course-4-1.png", "/course-4-2.png", "/course-4-3.png"],
    duration: "10 Weeks",
    level: "Beginner",
    author: "By Sarah Thompson",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    curriculum: [
      {
        module: "01",
        title: "Introduction to Graphic Design",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "What is Graphic Design?",
            duration: "30 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "History of Design & Styles",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "02",
        title: "Typography and Color Theory",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Typography Basics",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Choosing the Right Colors",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "03",
        title: "Layout Design and Composition",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Principles of Layout",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Balance & Alignment",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "04",
        title: "Image Editing and Manipulation",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Using Photoshop Basics",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Retouching & Filters",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "05",
        title: "Designing for Print and Digital Media",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Print Design Essentials",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Exporting for Web",
            duration: "45 Minutes",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    imgHeader: "/course-5.svg",
    images: ["/course-5-1.png", "/course-5-2.png", "/course-5-3.png"],
    duration: "10 Weeks",
    level: "Intermediate",
    author: "By Michael Adams",
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    curriculum: [
      {
        module: "01",
        title: "HTML Fundamentals",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "HTML Basics & Tags",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Forms & Inputs",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "02",
        title: "CSS Styling and Layouts",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Flexbox & Grid Layouts",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "Responsive Design with Media Queries",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "03",
        title: "JavaScript Basics",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Variables, Data Types & Functions",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "DOM Manipulation",
            duration: "1 Hour",
          },
        ],
      },
      {
        module: "04",
        title: "Building Responsive Websites",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Mobile-First Development",
            duration: "45 Minutes",
          },
          {
            lesson: "Lesson 02",
            title: "Accessibility Best Practices",
            duration: "45 Minutes",
          },
        ],
      },
      {
        module: "05",
        title: "Introduction to Bootstrap and React",
        lessons: [
          {
            lesson: "Lesson 01",
            title: "Getting Started with Bootstrap",
            duration: "1 Hour",
          },
          {
            lesson: "Lesson 02",
            title: "React Basics & Components",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
];

export const testimonialsData = [
  {
    id: 1,
    img: "/pofile-1.svg",
    author: "Sarah L",
    description:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
  },
  {
    id: 2,
    img: "/pofile-2.svg",
    author: "Jason M",
    description:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
  },
  {
    id: 3,
    img: "/pofile-3.svg",
    author: "Emily R",
    description:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
  },
  {
    id: 4,
    img: "/pofile-4.svg",
    author: "Michael K",
    description:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
  },
];

export const pricingData = [
  {
    name: "Free Plan",
    id: "plan-hobby",
    href: "/dashboard/pricing",
    priceMonthly: "$29",
    priceYearly: "$290",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Basic email support",
      "Access to community forums",
    ],
    featured: true,
  },
  {
    name: "Pro Plan",
    id: "plan-enterprise",
    href: "/dashboard/pricing",
    priceMonthly: "$99",
    priceYearly: "$990",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics & reporting",
      "1-hour support response time",
      "Priority email & phone support",
      "Private Slack channel access",
    ],
    featured: true,
  },
];

export const faqsData = [
  {
    id: "item-2",
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    cta: "Enrollment Process for Different Courses",
  },
  {
    id: "item-2b",
    question: "What kind of support can I expect from instructors?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    cta: "Enrollment Process for Different Courses",
  },
  {
    id: "item-3",
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    cta: "Enrollment Process for Different Courses",
  },
  {
    id: "item-4",
    question: "Are there any prerequisites for the courses?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    cta: "Enrollment Process for Different Courses",
  },
  {
    id: "item-5",
    question: "Can I download the course materials for offline access?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    cta: "Enrollment Process for Different Courses",
  },
];

export const aboutUsData = {
  achievements: [
    {
      id: 1,
      icon: <FaCrown />,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      id: 2,
      icon: <FaAward />,
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      id: 4,
      icon: <AiFillThunderbolt />,
      title: "Industry Partnerships",
      description:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ],

  goals: [
    {
      id: 5,
      icon: <IoExtensionPuzzle />,
      title: "Provide Practical Skills",
      description:
        "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      id: 6,
      icon: <FaBook />,
      title: "Foster Creative Problem-Solving",
      description:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
      id: 7,
      icon: <FaBell />,
      title: "Promote Collaboration and Community",
      description:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      id: 8,
      icon: <GiPieChart />,
      title: "Stay Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ],
};

export const contactInfo = [
  {
    icon: <FaEnvelope size={18} />,
    text: "support@skillbridge.com",
  },
  {
    icon: <FaPhone size={18} />,
    text: "+91 00000 00000",
  },
  {
    icon: <FaMapMarkerAlt size={18} />,
    text: "Some Where in the World",
  },
  {
    icon: <FaGlobe size={18} />,
    text: "Social Profiles",
  },
];
