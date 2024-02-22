import Image from "next/image"
import React from "react"
import logo from "../../../../public/assets/logo.png"
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:flex md:items-center md:gap-12">
              <Link href={"/"} className="w-[150px]">
                <Image alt="logo" src={logo} />
              </Link>
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-900 text-[16px] transition hover:text-gray-500/75 hover:underline hover:underline-offset-2"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-900 text-[16px] transition hover:text-gray-500/75 hover:underline hover:underline-offset-2"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-900 text-[16px] transition hover:text-gray-500/75 hover:underline hover:underline-offset-2"
                      href="#"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-none text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <div className="sm:flex sm:gap-4 hidden md:block ">
                  <a
                    className=" px-5 py-2 text-[16px] font-medium text-gray-900 hover:underline hover:underline-offset-2"
                    href="#"
                  >
                    Sign in
                  </a>
                  <a
                    className="rounded-[100px] bg-[#42C690] px-5 py-2.5 text-[16px] font-medium text-white hover:underline hover:underline-offset-2"
                    href="#"
                  >
                    Become a subscriber
                  </a>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
