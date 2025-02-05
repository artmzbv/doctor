import React, { useEffect, useState } from "react";
// import { Helmet } from 'react-helmet-async';
import './Main.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Intro from "../Intro/Intro";
import Help from "../Help/Help";
import Lectures from "../Lectures/Lectures";
import Blog from "../Blog/Blog"
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact"

gsap.registerPlugin(ScrollTrigger);

export default function Main({ setActiveSection }) {

  // Array of section IDs to observe
  const sectionIds = ["intro", "help", "lectures", "aboutme", "blog", "contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 40% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Attach observer to each section
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [setActiveSection]);

  return (
    <>
      {/* <Helmet>
        <title>Self Made Portraits</title>
        <meta name="description" content="Create your own masterpiece in our secure, private studio! Whether it’s a solo fashion shoot, capturing memories with family, friends, or pets, our space allows you to take professional-quality photos without the need for third-party intervention. Perfect for those who want control over their photos from start to finish.
✨ No photographer? No problem! Just Click & Shoot" />
        <meta property="og:url" content={`https://self-made-portraits.com/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Self Made Portraits" />
        <meta property="og:description" content="Create your own masterpiece in our secure, private studio! Whether it’s a solo fashion shoot, capturing memories with family, friends, or pets, our space allows you to take professional-quality photos without the need for third-party intervention. Perfect for those who want control over their photos from start to finish.
✨ No photographer? No problem! Just Click & Shoot" />
        <meta property="og:image" content={logo} />
        <link rel="canonical" href="https://self-made-portraits.com/"></link>
      </Helmet> */}
      <main className='main'>
         <Intro />
         <Help />
         <Lectures />
         <AboutMe />
         <Blog />
         <Contact />
      </main>
    </>
  );
}
