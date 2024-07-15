import React from "react";
import "./Home.css";
import  {motion} from 'framer-motion';

const Home = () => {
    return(
      
        <motion.div 
        className="container"
        initial = {{y:-50}}
        animate ={{y:0 }}
        transition={{ duration:1, delay:0.5}}
        >
            <motion.h1
            className="title"
            initial={{opacity:0}}
            whileInView={{ opacity:1}}
            
            transition={{duration:1, delay:0.5}}            
            >
                Welcome to My Portfolio
            </motion.h1>
            <motion.p
            className="subtitle"
            initial={{y:50,opacity:0}}
            animate={{y:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.7}}
            >
                Frontend Developer 
            </motion.p>

            
        </motion.div>
        
    )
}
export default Home;
