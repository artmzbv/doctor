import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../images/headerLogo.svg"
// import Button from "../common/Button/Button";
import "./Navigation.css";

function Navigation({ activeSection, isShowMenu, setIsShowMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [targetSection, setTargetSection] = useState(null);

  // Function to handle closing the burger menu
  const handleCloseBurgerMenu = () => {
    if (isShowMenu) {
      setIsShowMenu(false); // Close the burger menu
    }
  };

  // Scroll to a specific section by its ID when already on the main page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 65; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    handleCloseBurgerMenu(); // Close menu after scrolling
  };

  // Handle menu button click
  const handleNavigationClick = (e, sectionId) => {
    setActive(e.target.id);
    if (location.pathname === "/") {
      scrollToSection(sectionId); // If already on main page, scroll to the section
    } else {
      setTargetSection(sectionId); // Store the section ID to scroll after navigation
      navigate("/"); // Redirect to main page
    }
  };

  // Effect to scroll to the target section after navigating to the main page
  useEffect(() => {
    if (location.pathname === "/" && targetSection) {
      scrollToSection(targetSection); // Scroll to the stored section
      setTargetSection(null); // Clear target section after scrolling
    }
  }, [location.pathname, targetSection]);

  // Effect to reset active state when navigating away from the main page
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(""); // Reset active state
    }
  }, [location.pathname]);

  return (
    <>
      <button
        id="1"
        className={`navigation__link navigation__link_main ${activeSection === "help" && location.pathname === "/" ? "navigation__link_active" : ""}`}
        onClick={(e) => handleNavigationClick(e, "help")}
      >
        Мои услуги
      </button>
      <button
        id="2"
        className={`navigation__link navigation__link_main ${activeSection === "lectures" && location.pathname === "/" ? "navigation__link_active" : ""}`}
        onClick={(e) => handleNavigationClick(e, "lectures")}
      >
        Лекции
      </button>
        <Link to="/doctor">
          <img
            id={"0"}
            className="navigation__logo"
            src={headerLogo}
            alt="logo"
          />
        </Link>
      <button
        id="3"
        className={`navigation__link navigation__link_main ${activeSection === "aboutme" && location.pathname === "/" ? "navigation__link_active" : ""}`}
        onClick={(e) => handleNavigationClick(e, "aboutme")}
      >
        Обо мне
      </button>
      <button
        id="4"
        className={`navigation__link navigation__link_main ${activeSection === "blog" && location.pathname === "/" ? "navigation__link_active" : ""}`}
        onClick={(e) => handleNavigationClick(e, "blog")}
      >
        Блог
      </button>
      <button
        id="5"
        className={`navigation__link navigation__link_main ${activeSection === "contact" && location.pathname === "/" ? "navigation__link_active" : ""}`}
        onClick={(e) => handleNavigationClick(e, "contact")}
      >
        Запись на прием
      </button>

      {/* BOOK NOW button should navigate to a different page and close menu */}
      {/* <Button
        book={true}
        type={"time"}
        value={"BOOK NOW"}
        onClick={() => {
          handleCloseBurgerMenu(); // Close the menu first
          navigate("/book-now");   // Then navigate to the booking page
        }}
      /> */}
    </>
  );
}

export default Navigation;
