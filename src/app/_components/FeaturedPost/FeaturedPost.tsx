import Image from "next/image"
import React from "react"
import img1 from "../../../../public/assets/img1.jpeg"
import img2 from "../../../../public/assets/img2.jpeg"
import img3 from "../../../../public/assets/img3.jpeg"

const FeaturedPost = () => {
  const data = [
    {
      id: 1,
      title: "AI can solve new problems very easily",
      author: "Jhon",
      img: img1,
    },
    {
      id: 2,
      title: "AI can solve new problems very easily",
      author: "Jhon",
      img: img2,
    },
    {
      id: 1,
      title: "AI can solve new problems very easily",
      author: "Jhon",
      img: img3,
    },
  ]
  return (
    <div className="max-w-[1360px] mx-auto mt-8 mb-10 px-8 md:px-8">
      <small className="text-lg text-[#42C690] font-bold uppercase">
        Featured posts
      </small>
      <div className="relative z-0 w-full mt-4 mb-6 px-4 py-6 bg-gray-100 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 opacity-10 "
          style={{ backgroundImage: "url('/assets/img1.jpeg')" }}
        ></div>

        <small className="flex justify-center text-lg mt-4">
          Editor’s Choice
        </small>
        <h2 className="text-center text-4xl lg:text-6xl max-w-[540px] m-auto mt-4 mb-10">
          Get started with our best stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((article) => (
            <article
              className="bg-[#42C690] text-white m-auto p-2 lg:p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              key={article.id}
            >
              <a
                href={`/blog/${article.id}`}
                className="global-link"
                aria-label={article.title}
              ></a>
              <div className="w-full max-w-[500px] h-[150px] lg:h-[250px]">
                <Image
                  src={article.img}
                  className="h-full w-full rounded-md"
                  loading="lazy"
                  alt={article.title}
                />
              </div>
              <div className="">
                <h2 className="text-2xl lg:text-[38px] leading-6 lg:leading-10 my-3 hover:underline underline-offset-2">
                  <a href={`/blog/${article.id}`}>{article.title}</a>
                </h2>

                <div className="flex gap-2">
                  by
                  <a href={`/blog/${article.id}`}>{article.author}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-end  hover:underline underline-offset-2 mt-10 mb-6">
          <a href="featured/" className="featured-button">
            See all featured posts →
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
