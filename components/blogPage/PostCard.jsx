import { useEffect } from 'react';
import Moment from 'moment';

const PostCard = ({
  key,
  date,
  link,
  title,
  catID,
  authorFirstName,
  authorLastName,
  authorAvatar,
  featuredImg,
  catName,
}) => {
  const formatDate = Moment(date).format('MMM Do YY');

  return (
    <div className="w-[33%] mb-[30px]">
      <div className="w-[282px] h-[250px] border-white flex flex-col  border rounded-sm">
        <div className="w-full h-[137px]">
          <img src={featuredImg} alt={title} className="w-full h-full" />
        </div>
        {/*text container*/}
        <div className="w-[90%] mx-auto flex flex-col justify-center  flex-1">
          <div className="w-full h-[80%] flex flex-col justify-between ">
            <p className=" uppercase roboto_normal text-[10px] text-white">
              {catName}
            </p>
            <a href={link}>
              <p className="roboto_normal font-normal text-sm text-white">
                {title}
              </p>
            </a>
            {/*author container*/}
            <div className="flex">
              <div className="flex-1">
                <p className="text-white roboto_normal text-[10px] ">
                  {authorFirstName} {authorLastName}
                </p>
                <p className="text-white roboto_normal text-[10px]">
                  {formatDate}
                </p>
              </div>
              <div className="w-[30px] h-[30px] rounded-full bg-white">
                <img
                  src={authorAvatar}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
