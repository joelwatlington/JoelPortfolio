
import Head from "next/head";
import Link from 'next/link';
import {
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";  
import Grid from '@mui/material/Grid';
import { SiIndeed } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import joel from "../public/joelPic1.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import web11 from "../public/web11.png";
import web12 from "../public/web12.svg";
import web13 from "../public/web13.jpg";
import web21 from "../public/web21.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
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
              Easy to work with and experienced government employee providing services for any programming need and solution. Join me down below and lets work together!
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
		
        <section id="Coding" className="scroll-smooth focus:scroll-auto">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Coding Expertise</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my years of experience I have been heavily involved with work inside the federal and state government. I am proud of my <a className="text-teal-500">top-secret security clearance</a>, 
              my <a className="text-teal-500">linux certification</a>, and my <a className="text-teal-500" href="/JoelsCertification.pdf" download>Comptia Security+ Certification</a> from working with Robins AFB to say that I am both intelligent and dependable. While working for the State of Maine I earned my nomination
              for a CARES award by providing excellent customer service through good communication skills and technical knowledge.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My programming skills cover a large base ranging from frameworks, to analytical tools, and so much more!
            </p>
          </div>
          {[
            { img: "/web4.png", text: "C# – Utilized ASP.NET and ASP Classic frameworks to maintain programs using C# and have a strong grasp of the language throughout working with the State of Maine. The MVC design pattern was critical for the orginization of coding practices" },
            { img: "/web5.png", text: "Angular – Finalized front-end visualization with Angular for Robins AFB to develope a full-stack application while meeting the expectations of multiple product owners. My biggest contribution included a dynamic calendar component to display accurate information, schedule meetings, and narrow search queries" },
            { img: "/web6.png", text: "Java – Successfully crafted back-end functionality for API calls using Java while working under Robins AFB" },
            { img: "/web17.png", text: "C++ – Edited multiple Cpp and Hpp files for data flow under Wright Patterson to invoke the correct mathematical computations. Additionally throughout college C++ was the language that was used very frequently" },
            { img: "/web10.png", text: "JavaScript – Manipulated JavaScript for various data changes in Robins AFB and under the CDC for the State of Maine utilizing Rhapsody. There have always been various JavaScript needs such as item selection, Sorting algorithms, math calculations, and so much more!" },
            { img: "/web7.png", text: "Git – Deployed code, organized repository files, and boosted team productivity. Very efficient with Git bash through the commands necessary to pull, commit, comment, and push to the repository!" },
            { img: "/web22.jpg", text: "Bitbucket – Very similar to Git and is able to work with Git commands in order to Deploy code, organize repository files, and boost team productivity. Additionally, has linked Jenkins repositories for scheduled testing" },
            { img: "/web8.png", text: "Elasticsearch, Kibana, EQL, and Lucene – Competently developed tickets through the Elasticsearch team by organizing date and creating install packages. Install packages needed scripts, indice changes, file trees, and written documentation to ensure proper data was loaded into the Elasticsearch image for customer support" },
            { img: "/web9.jpg", text: "Python – Built multiple scripts i.e. manipulating JSON and NDJSON files under the Elasticsearch team. For every integration package that clients would need to install there included different scripts to help data flow into Elasticsearch for diagram accuracy" },
            { img: "/web1.png", text: "Spring Boot – Reliably worked tickets through large scale teams under the federal government with front-end, back-end, and database components using Spring Boot framework" },
            { img: "/web14.png", text: "SQL Developer, PostgreSQL, and SQL Server Management Studio – Has no problem fixing database related issues or mapping large database tables for programming new functionality in web applications. Both Robins AFB and the State of Maine required database management to fix bugs or organizational errors" },
            { img: "/web3.png", text: "Docker – Contained programming functionality through Docker under Wright Patterson AFB to improve deployment flow. Service containers were used so that data could be stored and pulled from Jfrog to be run later on" },
            { img: "/web2.png", text: "Postman – Resourcefully used postman for testing and debugging website API calls throughout my experience in the federal government and the State of Maine" },
            { img: "/web15.png", text: "Gitlab CI/CD, Gitlab runners, and YAML – Initialized jobs through Gitlab pipelines to generate security data and test files while working for Wright Patterson AFB. Executed gitlab CI/CD with runners, and controlled workflow or option using YAML and TOML files" },
            { img: "/web18.png", text: "Jenkins – Organized projectes by developing a better space for code production. Created a major improvement for security by using Coverity to scan individual committed files being pushed to the Bitbucket Repository" },
            { img: "/web16.png", text: "Jfrog – Navigated thousands of files in an effort to download correct versions of files to solve dependency issues for the work under Wright Patterson" },
            { img: "/web20.png", text: "Groovy – Added onto Jenkins framework by using Groovy functions. Additionally, set parameters through groovy files for pipeline flow" },
            { img: "/web19.png", text: "Eggplant – Operated Eggplant through programming in SenseTalk for writing Test cases. Taught an entire team of developers how to write Eggplant code and execute test cases. These test cases through various methods piece together functions for the purpose of navigating a program, selecting buttons, clicking sliders, and terminating each use case of a project" },
            
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 py-3">
            <img src={item.img} alt="" className="w-20 h-20 object-cover aspect-square shrink-0 rounded" style={{ objectPosition: "center" }}/>
            <p className="text-md leading-7 text-gray-800 dark:text-gray-200">{item.text}</p>
            </div>
          ))}

        </section>
        <br></br>
		
		{/* Beginning of work experience portion */}
		
        <section id="Working">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Relevant Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              It has been my privilege to have experience working with <a href="https://www.robins.af.mil/" className="text-teal-500">Robins Air Force Base</a>, <a href="https://www.maine.gov/portal/index.html" className="text-teal-500">State of Maine</a>, <a href="https://www.wpafb.af.mil/" className="text-teal-500">Wright Patterson AFB</a>, and <a href="https://davisdsi.com/" className="text-teal-500">Davis Strategic Innovations</a> over the past four years I have as a Software developer
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full h-80 bg-white" src={web21} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">DSI under Lockheed Martin</h1>
                <p class="text-gray-700 text-base">
                  For Davis Strategic innovations I navigated automation up the entire product chain from writing Eggplant test cases to matching product requirements for created work. I have constructed pipeline solutions using Jenkins, Jfrog, and Groovy code in an effort to increase product deliverability and security 
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
                <h1 class="font-bold text-xl mb-2">Wright Patterson AFB</h1>
                <p class="text-gray-700 text-base">
                  For Wright Patterson I deployed Gitlab runners that executed jobs to create service containers, security tests, and unit tests to push into Jfrog. There have been many examples where I effictively communicated with other teams to solve dependency issues for building our project successfully
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
                  For the State of Maine I was able to rewrite the structure of a program called Local Health Officers through first full-stack analysis, documentation over multiple pages, and many bug fixes. My work additionally involved JavaScript programming for Rhapsody that utilized JavaScript for data manipulation
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
                  For Robins AFB I created a dynamic calendar, rewrote entire pages for better programming flow, and fixed bugs. My career as an Elasticsearch Engineer saw machine learning, security rules, integration packages, python scripts, and resource management tests being employed
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
