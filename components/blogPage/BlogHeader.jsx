import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';

const CategoryMenu = ({ categoryData }) => (
  <div className="w-full flex space-x-4 text-lg font-medium">
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
    <HomeSectionContainer>
      <h1 className="roboto_normal   text-[60px] text-white font-bold mb-[100px]   blog_title">
        Launchy Blog
      </h1>
      <CategoryMenu categoryData={categories} />
    </HomeSectionContainer>
  );
};

export default BlogHeader;
