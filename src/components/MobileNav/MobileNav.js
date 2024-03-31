import React, { useState, useEffect } from "react";
import "./MobileNav.css";
import Menu from "../Menu/menu";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Close the mobile menu when scrolling down
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="mobile-nav container py-2">
        <div className="mobile nav-header" onClick={toggleMobileMenu}>
          <GiHamburgerMenu size={30} className="mobile-nav-icon" />
          <span className="mobile-nav-title">Kritima Khanal</span>
        </div>
        <div className="mobile-nav-menu">
          <div className="nav-items">
            <Menu toggle={isMobileMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
