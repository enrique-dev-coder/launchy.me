import { useEffect, useState } from 'react';
import BlogHeader from '../../components/blogPage/BlogHeader';
import Footer from '../../components/Footer';
import { getCategoryData, getPostsData } from '../../query';
const index = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);

  //se neceita una promesa para traer los datos las categorias desde graphql porque retorna una promesa
  const getCategories = async () => {
    const cats = await getCategoryData();
    setCategories(cats);
    return console.log(cats);
  };

  const getPosts = async () => {
    const posts = await getPostsData();
    setPosts(posts);
    return console.log(posts);
  };

  //Se traen las categorias de  el blog con esa funcion
  useEffect(() => {
    getCategories();
    getPosts();
  }, []);

  //funcion para obtner solo los datos que necesitamos
  const categoryNames = categories.map((c) => ({
    id: c.node.categoryId,
    catname: c.node.name,
  }));

  const postData = posts.map((c) => ({
    id: c.node.id,
    date: c.node.date,
    link: c.node.link,
    title: c.node.title,
    catID: c.node.categories.edges[0].node.categoryId,
    catName: c.node.categories.edges[0].node.name,
    authorFirstName: c.node.author.node.firstName,
    authorLastName: c.node.author.node.lastName,
    authorAvatar: c.node.author.node.avatar.url,
    featuredImg: c.node.featuredImage.node.sourceUrl,
  }));

  console.log(postData);

  return (
    <div className="h-auto bg-black">
      <BlogHeader categories={categoryNames} posts={postData} />
      <Footer />
    </div>
  );
};

export default index;
