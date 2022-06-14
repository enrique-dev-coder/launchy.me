import React from 'react';

const blogData = [
  {
    img: '/img/blog/Jasu.png',
    category: 'PRODUCT',
    title: 'La guía para empezar a idear tu primer producto',
    author: 'Jasury Victorio',
    authorimg: '/img/blog/jasu_author.png',
    read: '5 min read',
  },
  {
    img: '/img/blog/Luis.png',
    category: 'BUSSINESS',
    title: '¿Cómo planear tu customer journey map?',
    author: 'Luis Perdomo',
    authorimg: '/img/blog/luis_author.png',
    read: '7 min read',
  },
  {
    img: '/img/blog/alien2.png',
    category: 'RESEARCH',
    title: '¨¿El email marketing ha muerto?¨',
    author: 'Ivana Fedrigo',
    authorimg: '/img/blog/ivana_author.png',
    read: '5 min read',
  },
];

const BlogCard = ({ img, category, title, author, authorImg, read }) => {
  return (
    <div className="w-[275px] h-[138px] border flex border-white">
      <img src={img} />
      <div className="flex-1 border-l border-white flex flex-col justify-center">
        <div className="w-[80%] h-[80%]   mx-auto ">
          <p className="uppercase text-white font-thin mb-[10px] text-[10px]">
            {category}
          </p>
          <p className="text-white h-[50px] text-xs">{title}</p>
          <div className="flex mb-[10px]">
            <div className="flex flex-1 flex-col">
              <p className="text-white  text-[10px]">{author}</p>
              <p className="text-white text-[10px]">{read}</p>
            </div>
            <div className="">
              <img src={authorImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="mb-[40px]">
      <div className="flex mb-[40px] ">
        <h2 className="text-white uppercase text-xl  letter_spacing">
          LAUNCH BLOG
        </h2>
        <img src="/img/right.svg" alt="arrow" className="ml-4" />
      </div>
      <div className="flex justify-between">
        {blogData.map((b, i) => (
          <BlogCard
            key={i}
            img={b.img}
            category={b.category}
            title={b.title}
            author={b.author}
            authorImg={b.authorimg}
            read={b.read}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
