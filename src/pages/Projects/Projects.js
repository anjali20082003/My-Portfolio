import React from "react";
import "./Projects.css";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="projects-title">My Recent Works</h1>
      <h className="projects-title1">
         Here are a few projects I've worked on recently.</h>
      <motion.div
        className="project"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Breast Cancer Prediction using Deep Learning Techniques</h2>
        <p>June 2023 – July 2023</p>
        <p>
          Worked in collaboration under mentor guidance to predict on breast cancer.
          Utilized neural networks, particularly CNN, to analyze mammograms or medical data.
          The goal was to develop accurate models that can predict the likelihood of breast cancer based on features extracted from medical images, contributing to early detection and improved patient outcomes.
        </p>
        
        <a href="https://github.com/anjali20082003/Breast-cancer-Prediction-" target="_blank" rel="noopener noreferrer">
          <button className="button1">GitHub</button>
        </a>
      </motion.div>
      <motion.div
        className="project"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Prediction of Loan Approval of Customer Based on Credit Score</h2>
        <p>June 2022 – July 2022</p>
        <p>
          Collaborative efforts with a team consisting of six members to predict loan approval for customers based on their credit scores using ML techniques.
          Practical experience applying algorithms for tasks like intrusion detection and vulnerability assessment.
          The focus included real-time threat analysis, ethical considerations, and collaboration with cyber security experts.
        </p>
        <a href="https://github.com/anjali20082003/Prediction-of-Loan-Approvall-of-Customers-based-on-Credit-Scoring-" target="_blank" rel="noopener noreferrer">
        <button className="button2">GitHub</button>
        </a>
         
      </motion.div>

      <motion.div
        className="project"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>PolyDisease-Classifier-A-Multi-Class-Disease-Identification-Model</h2>
        <p>September</p>
        <p>
          Worked in collaboration under mentor guidance to predict on breast cancer.
          Utilized neural networks, particularly CNN, to analyze mammograms or medical data.
          The goal was to develop accurate models that can predict the likelihood of breast cancer based on features extracted from medical images, contributing to early detection and improved patient outcomes.
        </p>
        
        <a href="https://github.com/anjali20082003/PolyDisease-Classifier-A-Multi-Class-Disease-Identification-Model" target="_blank" rel="noopener noreferrer">
          <button className="button1">GitHub</button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
