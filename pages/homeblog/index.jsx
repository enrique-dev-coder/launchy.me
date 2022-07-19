import { useEffect, useState } from 'react';
import BlogHeader from '../../components/blogPage/BlogHeader';
import Footer from '../../components/Footer';
const index = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const getCategories = () => {
    // el http://cors-anywhere.herokuapp.com es solo para development
    //      'http://cors-anywhere.herokuapp.com/https://blog.launchy.me/wp-json/wp/v2/categories';

    const urlcat =
      'http://cors-anywhere.herokuapp.com/https://blog.launchy.me/wp-json/wp/v2/categories';
    fetch(urlcat, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getPosts = () => {
    const urlPosts =
      'http://cors-anywhere.herokuapp.com/https://blog.launchy.me/wp-json/wp/v2/posts';
    fetch(urlPosts, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  const getMedia = () => {
    const urlMedia =
      'http://cors-anywhere.herokuapp.com/https://blog.launchy.me/wp-json/wp/v2/media';
    fetch(urlMedia, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setMedia(data));
  };

  //Se traen las categorias de  el blog con esa funcion
  useEffect(() => {
    getCategories();
    getPosts();
    getMedia();
  }, []);
  //console.log(categories);
  //funcion para obtner solo los datos que necesitamos
  const categoryNames = categories.map((c) => ({
    id: c.id,
    catname: c.name,
  }));

  const blogPostWithMedia = [posts, media];
  console.log(blogPostWithMedia);
  return (
    <div className="h-auto bg-black">
      <BlogHeader categories={categoryNames} posts={posts} />
      <Footer />
    </div>
  );
};

export default index;
