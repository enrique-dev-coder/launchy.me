import { useEffect, useState } from 'react';
import BlogHeader from '../../components/blogPage/BlogHeader';

const index = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const urlcat = 'https://blog.launchy.me/wp-json/wp/v2/categories';
    fetch(urlcat)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  //Se traen las categorias de  el blog con esa funcion
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  //funcion para obtner solo los datos que necesitamos
  const categoryNames = categories.map((c) => ({
    id: c.id,
    catname: c.name,
  }));

  return (
    <div className="h-screen bg-black">
      <div className="w-full h-[100px]"></div>
      <BlogHeader categories={categoryNames} />
    </div>
  );
};

export default index;
