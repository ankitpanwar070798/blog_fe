import React from "react"
import Image from "next/image"
import Link from "next/link"
import img1 from "../../../../public/assets/img1.jpeg"
import img2 from "../../../../public/assets/img2.jpeg"
import img3 from "../../../../public/assets/img3.jpeg"

const SimilarPost = () => {
  const data = [
    {
      id: 1,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      img: img1,
    },
    {
      id: 2,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      img: img2,
    },
    {
      id: 3,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      img: img3,
    },
    {
      id: 4,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      img: img1,
    },
  ]
  return (
    <div className="max-w-[1360px] mx-auto mt-8 mb-10 px-6 lg:px-8">
      <small className="text-lg text-[#42C690] font-bold uppercase">Similar posts</small>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {data.map((article) => (
          <article className=" rounded-2xl" key={article.id}>
            <a
              href={`/blog/${article.id}`}
              className="global-link"
              aria-label={article.title}
            ></a>
            <div className="w-full max-w-[500px]  h-[200px]">
              <Image
                src={article.img}
                className="h-full w-full rounded-3xl"
                loading="lazy"
                alt={article.title}
              />
            </div>
            <div className="">
              <h2 className="text-[22px] leading-6 my-3 hover:underline underline-offset-2">
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
    </div>
  )
}

export default SimilarPost
