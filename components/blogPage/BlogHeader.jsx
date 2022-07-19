import React from 'react';
import Header from '../pagesAtom/Header';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import PostCard from './PostCard';
import { useState } from 'react';

const CategoryMenu = ({ categoryData }) => {
  const [activeCat, setActiveCat] = useState(0);
  return (
    <div className="w-full flex space-x-6 text-lg font-medium mb-[60px]">
      <p
        className={`blog_category_title  cursor-pointer ${
          activeCat === 0 && ' border-b-2 border-fuchsia-500'
        }`}
        onClick={() => setActiveCat(0)}
      >
        TODOS
      </p>
      {categoryData.map((c) => (
        <p
          className={`blog_category_title cursor-pointer ${
            activeCat === c.id && ' border-b-2 border-fuchsia-500'
          }`}
          key={c.id}
          onClick={() => setActiveCat(c.id)}
        >
          {c.catname}
        </p>
      ))}
    </div>
  );
};

const BlogPosts = ({ Posts }) => {
  return (
    <div className="flex flex-wrap ">
      {Posts.map((p) => (
        <PostCard
          postTitle={p.title.rendered}
          postLink={p.link}
          featuredID={p.featured_media}
        />
      ))}
    </div>
  );
};

const BlogHeader = ({ categories, posts }) => {
  return (
    <>
      <Header show={false}>
        <h2 className="z-10 text-white tracking-widest uppercase mt-5 text-[30px] lg:text-[40px] roboto_normal">
          Launchy Blog
        </h2>
      </Header>
      <HomeSectionContainer>
        <CategoryMenu categoryData={categories} />
        <BlogPosts Posts={posts} />
      </HomeSectionContainer>
    </>
  );
};

export default BlogHeader;
