import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLikes } from "./LikesContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { likedProducts } = useLikes();

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/search", { state: { query } });
    }
  };

  return (
    <nav className="bg-white text-slate-900 px-4 py-3 shadow-sm border-b border-slate-100">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="">
              <p className="text-black text-2xl font-bold font-sans ">
                Footverse
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-6 text-sm font-medium font-sans">
              <li>
                <Link
                  to="/"
                  className="text-slate-700 transition hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-slate-700 transition hover:text-blue-600"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-700 transition hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 min-w-[260px]">
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
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />{" "}
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
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
            <button
              onClick={handleSearch}
              className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100"
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <Link
              to="/likes"
              className="relative rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100 hover:text-red-500"
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
      </div>
    </nav>
  );
}
