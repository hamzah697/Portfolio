"use client";
import React from 'react'
import {useEffect} from 'react'
const Scrollreveal = () => {
  useEffect(() => {
    console.log("Scrollreveal mounted");
   const revealElements = document.querySelectorAll(".reveal, .reveal-lines");
   console.log(revealElements);
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add("is-visible");
       } 
     });
   },
     {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  }
);
  revealElements.forEach((el) => observer.observe(el))
   document.documentElement.classList.add("reveal-ready");
  }, []);


  return null
  
  
}

export default Scrollreveal
