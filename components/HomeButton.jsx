import React from "react";
import Link from "next/link";
const HomeButton = ({ title, link }) => {
  return (
    <Link href={link}>
      <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
        {title}
      </button>
    </Link>
  );
};

export default HomeButton;
