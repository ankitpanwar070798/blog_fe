import React from "react"

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="mt-[3vh] mb-[7vh] mx-6">
          <h1 className="max-w-[900px] lg:text-[56px] text-[32px] font-extralight leading-[1.1] mx-auto ">
            <span className="font-medium">Hey, we’re Reiro.</span> We promote
            positive culture through{" "}
            <span className="font-medium">inspiring articles</span> on health,
            design, and web.
          </h1>
          <div
            className="flex items-center justify-center rounded-[100px] bg-gray-100 py-2 pl-4 pr-4 w-[100%] max-w-[500px] m-auto mt-8 cursor-pointer"
            data-ghost-search=""
          >
            <span className="w-[100%] text-gray-400">
              Search posts, tags and authors
            </span>
            <span className="w-[24px] h-[24px] p-6 flex items-center justify-center rounded-[100px] bg-[#f9c345]">
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
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
