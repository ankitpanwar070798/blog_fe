import Image from "next/image"
import Link from "next/link"
import React from "react"
import img1 from "../../../../public/assets/img1.jpeg"
import img2 from "../../../../public/assets/img2.jpeg"
import img3 from "../../../../public/assets/img3.jpeg"

const Blogcard = () => {
  const data = [
    {
      id: 1,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img1,
    },
    {
      id: 2,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img2,
    },
    {
      id: 3,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img3,
    },
    {
      id: 4,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img1,
    },
    {
      id: 5,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img2,
    },
    {
      id: 6,
      title: "AI can solve new problems very easily",
      desc: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus",
      author: "Jhon",
      tag1: "Tour",
      tag2: "Travel",
      img: img1,
    },
  ]
  return (
    <div className="max-w-[1360px] mx-auto mt-8 mb-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((article) => (
          <article className=" p-2 md:p-4 rounded-2xl" key={article.id}>
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
              <div className="flex gap-2">
                <Link
                  key={article.id}
                  href={`/tag/${article.title.toLowerCase()}/`}
                  className="bg-slate-100 px-3 py-1 mt-3 rounded-3xl text-[14px] font-normal"
                >
                  {article.tag1}
                </Link>
                <Link
                  key={article.id}
                  href={`/tag/${article.title.toLowerCase()}/`}
                  className="bg-slate-100 px-3 py-1 mt-3 rounded-3xl text-[14px] font-normal"
                >
                  {article.tag2}
                </Link>
              </div>
              <h2 className="text-[26px] leading-8 my-3 hover:underline underline-offset-2">
                <a href={`/blog/${article.id}`}>{article.title}</a>
              </h2>
              <h3 className="text-[16px] leading-5 font-light	 my-3">
                <a href={`/blog/${article.id}`}>{article.desc}</a>
              </h3>

              <div className="flex gap-2">
                by :-
                <a href={`/blog/${article.id}`}>{article.author}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blogcard
