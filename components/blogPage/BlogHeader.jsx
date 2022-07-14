import React from 'react';
import Header from '../pagesAtom/Header';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';

const CategoryMenu = ({ categoryData }) => (
  <div className="w-full flex space-x-6 text-lg font-medium">
    <p className="blog_category_title  cursor-pointer">TODOS</p>
    {categoryData.map((c) => (
      <p className="blog_category_title cursor-pointer " key={c.id}>
        {c.catname}
      </p>
    ))}
  </div>
);

const BlogHeader = ({ categories }) => {
  return (
    <>
      <Header show={false}>
        <h2 className="z-10 text-white tracking-widest uppercase mt-5 text-[30px] lg:text-[40px] roboto_normal">
          Launchy Blog
        </h2>
      </Header>
      <HomeSectionContainer>
        <CategoryMenu categoryData={categories} />
      </HomeSectionContainer>
    </>
  );
};

export default BlogHeader;
