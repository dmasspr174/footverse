import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const likedProducts = useSelector(state => state.like.likes);
  const cartProducts = useSelector(state => state.cart.items);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/search", { state: { query } });
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setIsVisible(false);
        } else {
          // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use next time
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const SHEET_SIDES = ["left"];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface-white/80 backdrop-blur-md text-text-main px-md py-sm shadow-sm border-b border-surface-muted font-sans"
    >
      <div className="flex flex-col md:flex-row items-center justify-between m-auto container mx-auto">
        <div className="flex flex-row items-center gap-4 w-full mb-3 md:mb-0">
          <div className="flex items-center flex-row justify-between  md:w-max w-full">
            <Link to="/">
              <p className="text-text-main text-2xl font-bold font-sans pb-sm ">
                Footverse
              </p>
            </Link>

            <div className="flex md:hidden flex-wrap">
              <div className="flex ">
                {SHEET_SIDES.map((side) => (
                  <Sheet key={side}>
                    <SheetTrigger asChild>
                      <Button
                        className="bg-surface-white text-text-main border-none"
                        aria-label="Open Menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side={side}
                      className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                    >
                      <SheetTitle className="sr-only">
                        Navigation Menu
                      </SheetTitle>
                      <div className="flex flex-col  gap-4 py-6 px-6">
                        <SheetClose asChild>
                          <Link
                            to="/"
                            className="text-xl font-bold font-sans text-text-muted transition hover:text-text-main hover:border-b-[2px] hover:border-text-main hover:pb-[1px]"
                          >
                            Home
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/product"
                            className="text-xl font-bold font-sans text-text-muted transition hover:text-text-main hover:border-b-[2px] hover:border-text-main hover:pb-[1px]"
                          >
                            Product
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/contact"
                            className="text-xl font-bold font-sans text-text-muted transition hover:text-text-main hover:border-b-[2px] hover:border-text-main hover:pb-[1px]"
                          >
                            Contact Us
                          </Link>
                        </SheetClose>
                      </div>
                    </SheetContent>
                  </Sheet>
                ))}
              </div>
            </div>
          </div>
          <ul className="hidden md:flex flex-wrap items-center gap-6 text-sm font-medium font-sans">
            <li>
              <Link
                to="/"
                className="text-text-body transition hover:text-brand-primary hover:border-b-[2px] hover:border-brand-primary hover:pb-[1px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-text-body transition hover:text-brand-primary hover:border-b-[2px] hover:border-brand-primary hover:pb-[1px]"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-text-body transition hover:text-brand-primary hover:border-b-[2px] hover:border-brand-primary hover:pb-[1px]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 min-w-[260px] w-full md:w-1/2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="w-full rounded-full border border-surface-muted bg-surface-gray py-sm pl-10 pr-md text-sm text-text-main outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
            />{" "}
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-sm text-text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <Link
            to="/cart"
            className="relative rounded-full border border-surface-muted bg-surface-gray p-sm text-text-body transition hover:bg-surface-white hover:text-brand-primary"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {cartProducts && cartProducts.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <Link
            to="/likes"
            className="relative rounded-full border border-surface-muted bg-surface-gray p-sm text-text-body transition hover:bg-surface-white hover:text-destructive"
            aria-label="Liked Products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {likedProducts.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                {likedProducts.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
