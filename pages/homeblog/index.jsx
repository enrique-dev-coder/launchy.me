import { useEffect, useState } from 'react';
import BlogHeader from '../../components/blogPage/BlogHeader';

const index = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    // el http://cors-anywhere.herokuapp.com es solo para development
    //      'http://cors-anywhere.herokuapp.com/https://blog.launchy.me/wp-json/wp/v2/categories';

    const urlcat = 'https://blog.launchy.me/wp-json/wp/v2/categories';
    fetch(urlcat, { method: 'GET' })
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
      <BlogHeader categories={categoryNames} />
    </div>
  );
};

export default index;
