import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { RiMenu3Fill } from 'react-icons/ri';

import { 
  MdOutlineAlternateEmail, 
  MdOutlineAppShortcut, 
  MdOutlineManageAccounts, 
  MdThumbUpOffAlt 
} 
from "react-icons/md";

import { FaYoutube,FaInstagram,FaDrawPolygon, FaCode, FaLaptopCode, FaMobileAlt, FaTasks, FaBullhorn, FaDatabase, FaChartLine  } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";

import { GrUserManager } from "react-icons/gr";
import { 
         Mohana, pavithra, Suma, Venkatesh,
        blog_1,blog_2,blog_3} from "./assets";
        

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`Our team crafts stunning, user-friendly websites that captivate and engage your audience. 
    From seamless functionality to striking design, 
    we bring your ideas to life, ensuring your online presence stands out in a digital world.`,
  },
  {
    name:"Apps Development",
    icon:<MdOutlineAppShortcut/>,
    description:`Our skilled team designs and builds custom applications that seamlessly blend innovation and functionality.
     From concept to launch, we transform your vision into powerful solutions that enhance user experience and drive business success.

    `,
  },
  {
    name:"Project Management",
    icon:<MdOutlineManageAccounts/>,
    description:`Our company excels in project management, delivering organized and efficient solutions tailored to your business needs. We ensure seamless collaboration, on-time delivery, and transparent communication throughout every stage of the project. From planning to execution, 
    our dedicated team ensures your goals are met with precision, empowering your business to thrive in a competitive landscape.`,
  },
  {
    name:"Digital Marketing",
    icon:<FaBullhorn/>,
    description:`We create tailored strategies that elevate your online presence and connect you with your audience. 
    From engaging content to data-driven campaigns, we transform clicks into customers and drive sustainable growth for your business.`,
  },
  {
    name:"Data Engineering",
    icon:<FaDatabase/>,
    description:`Our expert data engineering services transform raw data into actionable insights, enabling your business to thrive.
     From seamless data integration to robust pipeline solutions,
     we empower your organization to make informed decisions and drive innovation.`,
  },
  {
    name:"Data Analytics",
    icon:<FaChartLine/>,
    description:`Harness the power of insights as we turn complex data into clear, actionable strategies tailored for your success.
     With cutting-edge analytics and visualizations,
     we empower you to make informed decisions that drive growth and innovation.`,
  },
]

export const teams = [
  {
    name:"Mohana Kumari",
    title:"Founder",
    profile:Mohana,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Pavithra",
    title:"Program Manager",
    profile:pavithra,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Suma",
    title:"Digital Marketing Manager",
    profile:Suma,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },

  {
    name:"Venkatesh",
    title:"Director",
    profile:Venkatesh,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
 
]

export const projects = [
  {
    title:"",
      image:``,
    description:``,
  },
 
  
];


export const testimonial = [
  {
    image:``,
    name:"Venkatesh",
    review:`Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam`
  },
  {
    image:``,
    name:"Balaji",
    review:`Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam`
  },
  {
    image:``,
    name:"Venkatesh",
    review:`Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam`
  },
  {
    image:``,
    name:"Balaji",
    review:`Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam`
  }

];


export const blogs = [
  {
      title:"How to build a website:",
      image:blog_1,
      category:"Web Design",
      content:`
        Building a website can seem like a daunting task, but in today's digital age, it's easier than ever to create a professional,
         functional website. 
        Whether you’re starting a blog, showcasing your portfolio, or creating an online store, 
        this guide will walk you through the essential steps of building a website.
      `,
      date:new Date("October 10, 2024"),
      likeCount:34,
      commentCount:14,
      tags:[""],
      poster:{
          name:"John Doe",
      },
  },
  {
      title:"A Beginner's Guide to Web Development:",
      image:blog_2,
      category:"Web Development",
      content:`
       Web development is the backbone of the internet. It involves building, creating,
        and maintaining websites and web applications. 
          From static pages to complex web apps, web development encompasses various tools, frameworks, and languages that bring digital 
            experiences to life..
      `,
      date:new Date("November 15, 2024"),
      likeCount:54,
      commentCount:23,
      tags:[""],
      poster:{
          name:"John Doe",
      },
  },
  {
      title:"The Power of Email Marketing: A Complete Guide:",
      image:blog_3,
      category:"Email Marketing",
      content:`
            Email marketing remains one of the most effective and affordable tools for businesses to connect with their audience, 
            nurture relationships, and drive conversions.
            This guide explores the essentials of email marketing and how you can leverage 
            it to grow your business.

      `,
      date:new Date("September 20, 2024"),
      likeCount:88,
      commentCount:54,
      tags:[""],
      poster:{
          name:"John Doe",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"info@nexdrift.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+91 93535 21309",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"F4, 596, SGS Park View, Narayana Nagar 3rd Block, Bangalore, KA 560062",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


