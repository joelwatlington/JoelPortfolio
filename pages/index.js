
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
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.jpg";
import web10 from "../public/web10.png";
import web11 from "../public/web11.svg";
import web12 from "../public/web12.jpg";
import web13 from "../public/web13.png";

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
        <section className="min-h-screen">



          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Welcome to my Portfolio!</h1>
            
            <ul className="flex items-center ">
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
        <section id="Coding" className="scroll-smooth focus:scroll-auto">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Coding Expertise</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my years of experience I have been heavily involved with work inside the federal and state government. I am proud of my <a className="text-teal-500">top-secret security clearance</a>, 
              my <a className="text-teal-500">linux certification</a>, and my <a className="text-teal-500" href="/JoelsCertification.pdf" download>Comptia Security+ Certification</a> from working with Robins AFB to say that I am both intelligent and dependable. While working for the State of Maine I earned my nomination
              for a CARES award by providing excellent customer service through good communication skills and technical knowledge.

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My programming skills cover a large base ranging from frameworks, to analytical tools, and so much more!
            </p>
          </div>
          
          <Grid container spacing={2}>
            
            <Grid item xs={6} md={2}>
              <Image alt="" src={web4} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">C# – Utilized ASP.NET and ASP Classic framework to maintain programs using C# and have a strong grasp of the language throughout working with the State of Maine. The MVC design pattern was critical for the orginization of coding practices</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web5} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Angular framework – reliably worked tickets under a large team with the federal government developing a full-stack application to meet expectations of multiple product owners</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web6} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Java – Successfully crafted back-end functionality for API calls using Java while working for the federal government</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web10} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">JavaScript – Manipulated JavaScript for various data changes in the federal government and the CDC utilizing Rhapsody. There have always been various JavaScript needs such as item selection, Sorting algorithms, math calculations, and so much more!</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web7} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Git – deployed code, organized repository files, and boosted team productivity. Very efficient with Git bash through the commands necessary to pull, commit, comment, and push to the repository</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web8} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md leading-8 text-gray-800 dark:text-gray-200">Elasticsearch, Kibana, EQL, and Lucene – Competently developed tickets through the Elasticsearch team by organizing date and creating install packages. Install packages needed scripts, indice changes, file trees, and written documentation to ensure proper data was loaded into the Elasticsearch image for customer support</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web9} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md leading-8 text-gray-800 dark:text-gray-200">Python – Built multiple scripts i.e. manipulating JSON and NDJSON files under the Elasticsearch team. For every integration package that clients would need to install there included different scripts to help data flow into Elasticsearch for diagram accuracy</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web1} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Spring Boot – reliably worked tickets through large scale teams under the federal government with frontend, back-end, and database components using Spring Boot framework </p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web13} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200">SQL Developer, PostgreSQL, and SQL Server Management Studio – Has no problem fixing database related issues or mapping large database tables for programming new functionality in web applications </p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web3} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Docker – Contained programming functionality through Docker under the federal government to improve security and deployment flow</p>
            </Grid>
            <Grid item xs={6} md={2}>
              <Image alt="" src={web2} width={100} height={100} />
            </Grid>
            <Grid item xs={6} md={10}>
              <p className="text-md py-7 leading-8 text-gray-800 dark:text-gray-200">Postman – Resourcefully used postman for testing and debugging website API calls throughout my experience in the federal government and the State of Maine</p>
            </Grid>
          </Grid>
		  
          
        </section>
        <section id="Working">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Relevant Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              It has been my privilege to have experience working with <a href="https://www.robins.af.mil/" className="text-teal-500">Robins Air Force Base</a> and the <a href="https://www.maine.gov/portal/index.html" className="text-teal-500">State of Maine</a> over the past two years I have as a Software developer.
            </p>
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image class="w-full" src={web11} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">The State of Maine</h1>
                <p class="text-gray-700 text-base">
                  For the state of Maine I was able to rewrite the structure of a program called Local Health Officers through first full-stack analysis, documentation over multiple pages, and many bug fixes. My work additionally involved JavaScript programming for Rhapsody that utilized JavaScript for data manipulation.
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
              <Image class="w-full" src={web12} alt="Sunset in the mountains"/>
              <div class="px-6 py-4 bg-gray-100 rounded-b">
                <h1 class="font-bold text-xl mb-2">Robins AFB</h1>
                <p class="text-gray-700 text-base">
                  For Robins AFB I created a dynamic calendar, rewrote entire pages for better programming flow, and fixed bugs. My career as an Elasticsearch Engineer saw machine learning, security rules, integration packages, python scripts, and resource management tests being employed.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Spring Boot</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Java</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postman</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Docker</span>
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
