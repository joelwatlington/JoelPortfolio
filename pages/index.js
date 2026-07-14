
import Head from "next/head";
import Link from 'next/link';
import React, { useState } from 'react';
import {
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";  
import Grid from '@mui/material/Grid';
import { SiIndeed } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import joel from "../public/joelPic1.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import web11 from "../public/web11.png";
import web12 from "../public/web12.svg";
import web13 from "../public/web13.jpg";
import web21 from "../public/web21.jpg";
import web23 from "../public/web23.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const technologyData = [
    {
      id: "awscloud",
      name: "AWS Cloud",
      summary: "Worked with Cloud Console",
      text: "Architectured secure cloud infrastructure utilizing IAM roles, Route 53 DNS routing, and security groups; Engineered automated AMI pipelines, deployed Lambda functions, and managed company wide operations through the AWS console"
    },
    {
      id: "terraform",
      name: "Terraform",
      summary: "Worked with Cloud Console",
      text: "Spearheaded the modernization of our cloud infrastructure under Kforce by redesigning a monolithic Terraform architecture into a clean, modular structure. To resolve critical logic errors and security risks, I deconstructed a massive legacy configuration file into isolated, bite-sized manifests. By auditing scattered ingress and egress rules, I consolidated network permissions directly within these new files. This initiative eliminated configuration conflicts, hardened our AWS Security Groups, and established a consistent, secure framework for all future console deployments."
    },
    {
      id: "ansible",
      name: "Ansible",
      summary: "Worked with Cloud Console",
      text: "Served as the team's go-to Ansible expert under Kforce, specializing in cloud automation and cost reduction. I designed and deployed playbooks that converted Jinja2 templates into systemd-driven shell scripts, successfully migrating our health monitoring to Prometheus and eliminating expensive Puppet licenses. Additionally, I built dynamic user provisioning pipelines and an automated AMI patching workflow driven by AWS Parameter Store variables, ensuring efficient node updates and robust statistical reporting."
    },
    {
      id: "kafkazookeeper",
      name: "Kafka and Zookeeper",
      summary: "Worked with Cloud Console",
      text: "Deployed multi-node message brokers and managed Zookeeper states to ensure seamless cluster coordination, topic creation, and fault-tolerant data streaming under Kforce"
    },
    {
      id: "csharp",
      name: "C#",
      summary: "ASP.NET, ASP Classic, MVC Pattern",
      text: "Utilized ASP.NET and ASP Classic frameworks to maintain programs using C# and have a strong grasp of the language throughout working with the State of Maine. The MVC design pattern was critical for the organization of coding practices."
    },
    {
      id: "angular",
      name: "Angular",
      summary: "Front-End Visualization, Dynamic Dashboards",
      text: "Finalized front-end visualization with Angular for Robins AFB to develop a full-stack application while meeting the expectations of multiple product owners. My biggest contribution included a dynamic calendar component to display accurate information, schedule meetings, and narrow search queries."
    },
    {
      id: "java",
      name: "Java",
      summary: "Back-End Logic, Core API Architectures",
      text: "Successfully crafted back-end functionality for API calls using Java while working under Robins AFB."
    },
    {
      id: "cpp",
      name: "C++",
      summary: "Data Flow, Math Computations, .cpp / .hpp Control",
      text: "Edited multiple Cpp and Hpp files for data flow under Wright Patterson to invoke the correct mathematical computations. Additionally throughout college C++ was the language that was used very frequently."
    },
    {
      id: "javascript",
      name: "JavaScript",
      summary: "Rhapsody Engines, Data Manipulation & Sorting",
      text: "Manipulated JavaScript for various data changes in Robins AFB and under the CDC for the State of Maine utilizing Rhapsody. There have always been various JavaScript needs such as item selection, Sorting algorithms, math calculations, and so much more!"
    },
    {
      id: "git",
      name: "Git",
      summary: "Version Control, Repository Maintenance, Git Bash",
      text: "Deployed code, organized repository files, and boosted team productivity. Very efficient with Git bash through the commands necessary to pull, commit, comment, and push to the repository!"
    },
    {
      id: "bitbucket",
      name: "Bitbucket",
      summary: "Enterprise Versioning, Jenkins Repository Hooks",
      text: "Very similar to Git and is able to work with Git commands in order to Deploy code, organize repository files, and boost team productivity. Additionally, has linked Jenkins repositories for scheduled testing."
    },
    {
      id: "elasticsearch",
      name: "Elasticsearch Stack",
      summary: "Kibana, EQL, Lucene, Integration Packages",
      text: "Competently developed tickets through the Elasticsearch team by organizing data and creating install packages. Install packages needed scripts, indice changes, file trees, and written documentation to ensure proper data was loaded into the Elasticsearch image for customer support."
    },
    {
      id: "python",
      name: "Python",
      summary: "Automation Scripts, JSON / NDJSON Parsing",
      text: "Built multiple scripts i.e. manipulating JSON and NDJSON files under the Elasticsearch team. For every integration package that clients would need to install there included different scripts to help data flow into Elasticsearch for diagram accuracy."
    },
    {
      id: "springboot",
      name: "Spring Boot",
      summary: "Enterprise Full-Stack Defense Java Frameworks",
      text: "Reliably worked tickets through large scale teams under the federal government with front-end, back-end, and database components using Spring Boot framework."
    },
    {
      id: "databases",
      name: "SQL & Databases",
      summary: "PostgreSQL, SQL Server (SSMS), Oracle SQL Dev",
      text: "Has no problem fixing database related issues or mapping large database tables for programming new functionality in web applications. Both Robins AFB and the State of Maine required database management to fix bugs or organizational errors."
    },
    {
      id: "docker",
      name: "Docker",
      summary: "Containerization, Artifact Delivery, JFrog Flow",
      text: "Contained programming functionality through Docker under Wright Patterson AFB to improve deployment flow. Service containers were used so that data could be stored and pulled from Jfrog to be run later on."
    },
    {
      id: "postman",
      name: "Postman",
      summary: "API Black-box Testing & Endpoint Debugging",
      text: "Resourcefully used postman for testing and debugging website API calls throughout my experience in the federal government and the State of Maine."
    },
    {
      id: "gitlab",
      name: "GitLab CI/CD",
      summary: "Runners, YAML, TOML Pipeline Controls",
      text: "Initialized jobs through Gitlab pipelines to generate security data and test files while working for Wright Patterson AFB. Executed gitlab CI/CD with runners, and controlled workflow or option using YAML and TOML files."
    },
    {
      id: "jenkins",
      name: "Jenkins",
      summary: "Automation Systems, Coverity Security Scanning",
      text: "Organized projects by developing a better space for code production. Created a major improvement for security by using Coverity to scan individual committed files being pushed to the Bitbucket Repository."
    },
    {
      id: "jfrog",
      name: "JFrog",
      summary: "Artifact Dependency & Secure Version Mapping",
      text: "Navigated thousands of files in an effort to download correct versions of files to solve dependency issues for the work under Wright Patterson."
    },
    {
      id: "groovy",
      name: "Groovy",
      summary: "Pipeline Custom Scripting & Parameter Tuning",
      text: "Added onto Jenkins framework by using Groovy functions. Additionally, set parameters through groovy files for pipeline flow."
    },
    {
      id: "eggplant",
      name: "Eggplant (SenseTalk)",
      summary: "Automated E2E Test Cases, Team Mentorship",
      text: "Operated Eggplant through programming in SenseTalk for writing Test cases. Taught an entire team of developers how to write Eggplant code and execute test cases. These test cases through various methods piece together functions for the purpose of navigating a program, selecting buttons, clicking sliders, and terminating each use case of a project."
    }
  ];
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
	  
	    {/* list for creating the top bar to turn on dark or light mode and navigate the program */}
	  
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Welcome to my Portfolio!</h1>
            <ul className="flex items-center flex-wrap">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a className="bg-gradient-to-r from-purple-500 text- to-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8" href="/JoelsResume.pdf" download>Resume</a>
              </li>
              <li>
                <Link href="#Coding" scroll={false} className=" bg-gradient-to-r from-cyan-500 text- to-indigo-500 text-white px-4 py-2 border-none rounded-md ml-8">
                Coding Expertise
                </Link>
              </li>
              <li>
                <Link href="#Working" scroll={false} className=" bg-gradient-to-r from-indigo-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="#Contact" scroll={false} className="bg-gradient-to-r from-teal-500 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>
		  
		      {/* Introduction statement with a motion div to add an animation to the title */}
		  
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .4 }}
            className="text-6xl flex justify-center text-teal-500"
          >
          Joel Watlington
		      </motion.div>
          <div className="text-center p-10 py-10">
          
            <h3 className="text-2xl py-3 dark:text-white md:text-3xl">
              Positive. Passionate. Proficient.
            </h3>
            <h3 className="text-2xl  dark:text-white md:text-3xl">
            Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Easy to work with and experienced government employee providing services for any programming need and solution. Connect with me and let`s work together!
            </p>
			
			      {/* Needs to be changed later when video is added */}
			
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/joel-watlington-392058200/" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
              </a>
              <SiIndeed />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={joel} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
		
		      {/* Beginning of coding experience portion. A grid was selected to give concise information in a compact way */}
		
        <section id="Coding">

          <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">
                Coding Expertise
              </h3>
              <p className="text-base sm:text-lg leading-8 text-slate-300 max-w-4xl">
                Throughout my years of experience, I have been heavily involved with work inside the federal and state government. I am proud of my{" "}
                <span className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Top Secret security clearance</span>, {" "}
                <a className="text-teal-400 font-semibold underline decoration-dotted hover:text-teal-300 transition-colors" href="/CompTIA_Server_Certificate.pdf" download> CompTIA Server+ Certification </a>, and my{" "}
                <a className="text-teal-400 font-semibold underline decoration-dotted hover:text-teal-300 transition-colors" href="/CompTIA_Security_Certificate.pdf" download> CompTIA Security+ Certification </a>.{" "}
                  While working for the State of Maine, I earned my nomination for a CARES award by providing excellent customer service through good communication skills and technical knowledge. A year later, I went on to receive {" "}
                <span className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">formal congratulations after presenting the first automated test case</span> for the Ground Weapons Systems program under DSI which ultimately promoted me to Automation Team Lead!
              </p>
              <br></br>
              <p className="text-base sm:text-lg leading-8 text-slate-300 max-w-4xl">
                My programming skills cover a large base ranging from software programming, cloud development, DevOps, security, analytical tools, and so much more!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              {technologyData.map((item) => {
              const isCurrentExpanded = expandedId === item.id;
              return (
              <div 
              key={item.id} 
              className={`transition-all duration-300 transform ${
                isCurrentExpanded ? 'md:col-span-2 scale-[1.005]' : 'hover:scale-[1.01]'
              }`}
              >
              <button 
                onClick={() => toggleExpand(item.id)} 
                aria-expanded={isCurrentExpanded} 
                className={`w-full text-left p-4 rounded-full border flex items-center justify-between gap-4 transition-all duration-300 relative overflow-hidden group shadow-md ${
                  isCurrentExpanded 
                    ? 'bg-gradient-to-r from-teal-950/40 via-slate-800 to-slate-800 border-teal-400/80 shadow-teal-950/40' 
                    : 'bg-slate-800/60 backdrop-blur-sm border-slate-700/60 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
              <span className="font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                {item.name}
              </span>
              <span className={`transform transition-transform duration-300 ${isCurrentExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
              </button>
              {isCurrentExpanded && (
              <div className="mt-3 px-6 py-4 bg-slate-800/40 border border-slate-700/40 rounded-2xl text-slate-300 animate-fadeIn">
                {item.text}
              </div>
              )}
              </div>
              );
              })}
            </div>
          </div>
        </section>
		
		  {/* Beginning of work experience portion */}
		
        <section id="Working">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Relevant Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              It has been my privilege to have experience working with{" "}
            <a href="https://www.robins.af.mil/" className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Robins Air Force Base</a>,{" "}
            <a href="https://www.maine.gov/portal/index.html" className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">State of Maine</a>,{" "}
            <a href="https://www.wpafb.af.mil/" className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Wright Patterson AFB</a>,{" "}
            <a href="https://davisdsi.com/" className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Davis Strategic Innovations</a>, and{" "}
            <a href="https://www.kforce.com/" className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Kforce.</a> Over the past four and a half years I have held the title of{" "}
            <span className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Mid-Level Cloud Developer</span>,{" "}
            <span className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Automation Team Lead</span>, and{" "}
            <span className="text-teal-400 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]">Software Developer</span>!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full h-80" src={web23} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">FBI with Kforce</h1>
                <p class="text-gray-700 text-base">
                  I successfully completed a three-month contract by provisioning Terraform code, optimizing security groups, and managing IAM Role modifications. Additionally, I deployed a Kafka cluster, engineered an AMI builder pipeline using federally provided Docker-in-Docker images, and authored multiple Ansible playbooks
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ansible</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AWS Cloud</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Terraform</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Kafka</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Zookeeper</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Linux</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Prometheus</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Docker-in-Docker</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Prometheus</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AWS Lambda</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Security groups</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Route 53</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IAM roles</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Patching AMIs</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full h-80 bg-white" src={web21} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">Northrop Grumman with DSI</h1>
                <p class="text-gray-700 text-base">
                  I drove automation strategies across the entire product lifecycle, from authoring Eggplant test cases to engineering robust CI/CD pipelines, I created DevOps solutions through Jenkins, JFrog Artifactory, and Groovy scripting to significantly accelerate product deliverability, optimize build security, and streamline release cycles 
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Jenkins</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Groovy</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Jfrog</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Eggplant</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#System Requirements</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Leadership</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Git</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bitbucket</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Linux/Bash scripting</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Python</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">
              <Image class="w-full h-80" src={web13} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">Wright Patterson AFB with IG</h1>
                <p class="text-gray-700 text-base">
                  I deployed GitLab runners to automate pipelines that executed jobs for building service containers, running security scans, and performing unit tests prior to pushing artifacts into JFrog. Throughout this process, I frequently collaborated with cross-functional teams to resolve complex dependency issues, ensuring successful and reliable project builds
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gitlab CI/CD</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gitlab Runners</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YAML</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TOML</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Linux</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># C++</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Docker</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Networks</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postman</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Jfrog</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full h-80" src={web12} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">The State of Maine</h1>
                <p class="text-gray-700 text-base">
                  I completely changed the Local Health Officers application by executing a comprehensive full-stack analysis, resolving numerous legacy bugs, and authoring multiple pages of technical documentation. My work additionally involved JavaScript programming for Rhapsody that utilized JavaScript for data manipulation and ingest
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ASP.NET</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># C#</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL Server Management Studio</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Microsoft SQL Server</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#FileZilla</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postman</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Visual Basic</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full h-80 bg-white" src={web11} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">Robins AFB</h1>
                <p class="text-gray-700 text-base">
                  As an Elasticsearch Engineer, I designed advanced cluster architectures featuring machine learning anomaly detection, SIEM security rules, and tailored data integration packages. I authored Python scripts for data manipulation and executed thorough resource management testing to maximize search performance, index stability, and cluster scaling
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Spring Boot</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Java</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postman</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PostgreSQL</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Git</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Elasticsearch</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Linux/Bash scripting</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Python</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Kibana/Eql/Lucene</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Machine Learning</span>
              </div>
            </div>
          </div>
        </section>
		
		  {/* Beginning of contact portion */}
		
        <section id="Contact">
          <h3 className="text-3xl py-1 dark:text-white ">Contact</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Email - joelwatlington7@gmail.com
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Phone - (207) 659 - 9964
          </p>
          <br></br>
          <br></br>
        </section>
        
      </main>
    </div>
  );
}
