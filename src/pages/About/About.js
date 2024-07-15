
import React from "react";
import "./About.css";
 import {motion} from 'framer-motion';

const About = () => {
    return (
    <div class="parent-container">
       <motion.div 
       className="styled-motion-div"
       initial={{x:'-100vw'}}
       animate={{x:0}}
       transition={{type:'spring', stiffness:100}}
       >
        Know Who I'M
       </motion.div> 
        <motion.div 
        className="content"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        >
        <motion.p
          className="subtitle1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Hi Everyone, I am Anjali from Delhi, India. I am currently pursuing my
          B.Tech in Computer Science and Engineering at Indira Gandhi Delhi
          Technical University for Women. With a passion for Deep Learning and
          Machine Learning, I am committed to leveraging my skills to make
          meaningful contributions in the tech industry.
        <br>
        </br>
        <br></br>
       
          Apart from academics, I am actively involved in the National Cadet
          Corps (NCC), where I hold a B Certificate and am preparing for the C
          Certificate. I also volunteer for various initiatives such as the
          Research Showcase and Desh ke Mentor program.
          </motion.p>
        </motion.div>
      </div>
    );
}

export default About;
  