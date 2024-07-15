import React from "react";
 import "./Skills.css";
import { motion} from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase,FaGithub } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { SiGooglecolab, SiFigma,SiPython, SiCplusplus } from 'react-icons/si';
 const Skills = () => {
    return(
        <div className="skill-container">       
            <motion.div
            className="technical-skill"
            initial = {{y:-50, opacity:0}}
            animate ={{y:0 }}
            whileInView={{opacity:1}}
            transition={{ duration:1, delay:0.3}}
            >
                Professional Skillset
       </motion.div>

       <motion.div
       className="skill-box"
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.9}}
            >
           <div className="skill">
                <SiPython className="icon" style={{ color: 'blue' }}/>
                Python
            </div>
            <div className="skill">
                <SiCplusplus className="icon" style={{ color: 'blue' }}/>
                C++
            </div>
            <div className="skill">
                <FaHtml5 className="icon" style={{ color: 'orange' }}/>
                HTML
            </div>
            <div className="skill">
                <FaCss3Alt className="icon" style={{ color: 'blue' }}/>
                CSS
            </div>
            <div className="skill">
                <FaJsSquare className="icon" style={{ color: 'yellow' }} />
                Javascript
            </div>
            <div className="skill">
                <FaReact className="icon"style={{ color: 'cyan' }} />
                React
            </div>
        </motion.div>

        <motion.div
            className="technical-skill-1"
            initial = {{y:-50, opacity:0}}
            whileInView={{opacity:1}}
            animate ={{y:0 }}
            transition={{ duration:1, delay:0.4}}
            >
            Tools I use
            </motion.div>
            <motion.div
       className="skill-box"
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.7}}
            >
            <div className="skill">
                <DiVisualstudio className="icon" style={{ color: 'purple' }}/>
                VS Code
            </div>
            <div className="skill">
                <SiGooglecolab className="icon" style={{ color: 'orange' }}/>
                Google Colab
            </div>
            <div className="skill">
                <FaGithub className="icon" style={{ color: 'black' }}/>
                GitHub
            </div>
            <div className="skill">
                < SiFigma className="icon"style={{color:'yellow'}}/>
                Figma
            </div>
            <div className="skill">
                <FaDatabase className="icon"  style={{ color: 'blue' }}/>
                My Sql
            </div>
            
        </motion.div>
       </div>
    )
 }
 export default Skills;

 