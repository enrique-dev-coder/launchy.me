import { useEffect } from 'react';

const PostCard = ({ postTitle, postLink, featuredID }) => {
  return (
    <div className="w-[33%] mb-[30px]">
      <div className="w-[282px] h-[250px] border-white border rounded-sm">
        <p className="text-white">{postTitle}</p>
        <p className="text-white">{featuredID}</p>
        <img
          src="https://blog.launchy.me/wp-content/uploads/2022/07/Jasu.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PostCard;
