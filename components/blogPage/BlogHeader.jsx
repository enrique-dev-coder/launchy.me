import React from 'react';
import Header from '../pagesAtom/Header';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import PostCard from './PostCard';
import { useState } from 'react';
import { useMenu } from '../../context/MenuContext';
const CategoryMenu = ({ categoryData }) => {
  const [activeCat, setActiveCat] = useState(0);
  const { setCategoryFilter } = useMenu();
  const activeCategoryClick = (id) => {
    setActiveCat(id);
    setCategoryFilter(id);
  };

  const allCategories = () => {
    setActiveCat(0);
    setCategoryFilter(0);
  };

  return (
    <div className="w-full flex space-x-6 text-lg font-medium mb-[60px]">
      <p
        className={`blog_category_title  cursor-pointer ${
          activeCat === 0 && ' border-b-2 border-fuchsia-500'
        }`}
        onClick={allCategories}
      >
        TODOS
      </p>
      {categoryData.map((c) => (
        <p
          className={`blog_category_title cursor-pointer ${
            activeCat === c.id && ' border-b-2 border-fuchsia-500'
          }`}
          key={c.id}
          onClick={() => activeCategoryClick(c.id)}
        >
          {c.catname}
        </p>
      ))}
    </div>
  );
};

const BlogPosts = ({ Posts }) => {
  const { categoryFilter } = useMenu();
  return (
    <div className="flex flex-wrap md:h-[570px] overflow-y-auto">
      {categoryFilter === 0
        ? Posts.map((p) => (
            <PostCard
              key={p.id}
              date={p.date}
              link={p.link}
              title={p.title}
              catID={p.catID}
              authorFirstName={p.authorFirstName}
              authorLastName={p.authorLastName}
              authorAvatar={p.authorAvatar}
              featuredImg={p.featuredImg}
              catName={p.catName}
            />
          ))
        : Posts.map(
            (p) =>
              categoryFilter === p.catID && (
                <PostCard
                  key={p.id}
                  date={p.date}
                  link={p.link}
                  title={p.title}
                  catID={p.catID}
                  authorFirstName={p.authorFirstName}
                  authorLastName={p.authorLastName}
                  authorAvatar={p.authorAvatar}
                  featuredImg={p.featuredImg}
                  catName={p.catName}
                />
              )
          )}
    </div>
  );
};

const BlogHeader = ({ categories, posts, spinner }) => {
  return (
    <>
      <Header show={false}>
        <h1 className="z-10 text-white tracking-widest uppercase mt-5 text-[30px] lg:text-[40px] roboto_normal">
          Launchy Blog
        </h1>
      </Header>
      {spinner ? (
        <div className="w-full flex flex-col justify-center items-center md:h-[570px]">
          <img
            src="/img/loading_image.png"
            alt="laoding screen"
            className="  animate-spin"
          />
          <p className="text-white loading_text roboto_normal">
            Cargando recursos increibles ...
          </p>
        </div>
      ) : (
        <HomeSectionContainer>
          <CategoryMenu categoryData={categories} />
          <BlogPosts Posts={posts} />
        </HomeSectionContainer>
      )}
    </>
  );
};

export default BlogHeader;
