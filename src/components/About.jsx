import React from 'react'
// import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index'
import {fadeIn,textVariant} from "../utils/motion"
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc/index.js'

const ServiceCard = ({index,title,icon}) => {
  return (
    <>   
       <Tilt name="skills" className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className='w-full green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card'>
       <div
         options={{
          max:45,
          scale:1,
          speed:450,
         }}
         className='bg-tertiary rounded-[20px] py-5 px-12 
         min-h-[280px] flex justify-center 
         items-center flex-col '
         >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
         </div>
         <div className='mt-20 flex flex-wrap gap-10 text-white'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
        </motion.div>
      </Tilt> 
      </>  
       )}

const About = () => {
  return (
    <>
    <motion.div name="about"  variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-7'>
   Hello there! My name is <span className='text-white'>Faizan Ali</span> , and I'm an enthusiastic MERN developer with a strong foundation in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, and Three.js. I am excited about the world of web development and dedicated to honing my skills to create engaging and interactive web applications.
   <h2 className="pt-4 pb-0.5 font-bold text-xl text-white "> HTML, CSS, and JavaScript: Building the Foundations</h2>
   With a understanding of HTML, CSS, and JavaScript, I am capable of constructing the basic building blocks of any web application. I can create well-structured and semantically correct HTML markup, apply CSS styles to enhance visual appeal, and utilize JavaScript to add interactivity and dynamic functionality to websites.
   <h2 className="pt-4 pb-0.5 font-bold text-xl text-white ">React: Crafting Interactive User Interfaces</h2>
   React is an incredible library that enables the creation of dynamic user interfaces, and I am proficient in utilizing its features. I enjoy leveraging React's component-based architecture to build modular and reusable UI elements. By incorporating React's virtual DOM, I ensure that my applications are fast and efficient, delivering a seamless user experience.
   <h2 className="pt-4 pb-0.5 font-bold text-xl text-white ">Node.js and Express: Server-side Development</h2>
   I have a good understanding of Node.js and Express, which allows me to develop the back-end of web applications. With Node.js, I can build scalable and efficient server-side applications, while Express simplifies the process of creating robust APIs and handling routing. Together, these technologies enable me to implement server-side logic and ensure smooth communication between the front-end and back-end components.
  <h2 className="pt-4 pb-0.5 font-bold text-xl text-white ">MongoDB: Managing Data Efficiently</h2>
   As a MERN developer, I have experience working with MongoDB, a NoSQL database. I can effectively store and retrieve data using MongoDB's document-oriented approach. By designing schemas and performing queries, I ensure that the application's data layer is optimized for performance and security.
    </motion.p>
  

   
    </>
    )
}

export default SectionWrapper(About,"about")