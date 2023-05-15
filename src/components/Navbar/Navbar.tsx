import { NavbarCategories, NavbarMenu } from "@/components/Navbar/Navbar.styled.ts";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu.tsx";
import { NavLink } from "react-router-dom";
import { animateDropdownCategories } from "@/assets/animations/categoriesDropdownAnimation.ts";
import { categories } from "@/data/categories.ts";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLUListElement>(null);
  const categoriesButtonRef = useRef<HTMLButtonElement>(null);

  const handleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  const animateCategories = () => {
    animateDropdownCategories(categoriesRef, isCategoriesOpen);
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCloseCategoriesOnClickOutside = (e: MouseEvent) => {
    if (
      categoriesButtonRef.current &&
      isCategoriesOpen &&
      !categoriesButtonRef.current.contains(e.target as Node)
    ) {
      animateCategories();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleCloseCategoriesOnClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleCloseCategoriesOnClickOutside);
    };
  }, [handleCloseCategoriesOnClickOutside]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      handleNavbar();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <nav>
      <HamburgerMenu className="navbar__menu" onClick={handleNavbar} isNavbarOpen={isNavbarOpen} />
      <NavbarMenu isOpen={isNavbarOpen}>
        <ul className="navbar__list">
          <li>
            <NavLink to="/" onClick={handleNavbar} className="navbar__item">
              HOME
            </NavLink>
          </li>
          <li>
            <button
              onClick={animateCategories}
              ref={categoriesButtonRef}
              className="navbar__item navbar__item-categories">
              CATEGORIES
            </button>
            <NavbarCategories ref={categoriesRef}>
              {categories.map(({ name, link }) => (
                <li key={link}>
                  <NavLink
                    to={`/category/${link}`}
                    onClick={handleNavbar}
                    className="navbar__item-category">
                    {name}
                  </NavLink>
                </li>
              ))}
            </NavbarCategories>
          </li>
          {auth.currentUser ? (
            <li>
              <button onClick={handleSignOut} className="navbar__item">
                SIGN OUT
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/sign-in" onClick={handleNavbar} className="navbar__item">
                  SIGN IN
                </NavLink>
              </li>
              <li>
                <NavLink to="/sign-up" onClick={handleNavbar} className="navbar__item">
                  SIGN UP
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </NavbarMenu>
    </nav>
  );
};

export default Navbar;
