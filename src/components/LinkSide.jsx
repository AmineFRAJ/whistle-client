import React from 'react'
import { Link } from 'react-router-dom';

const LinkSide = ({ href, name, src }) => {
    return (
      <Link
        to={`/${href}`}
        className="flex items-center py-2 px-2 rounded-md hover:bg-[rgb(54,63,78)]"
      >
        <img src={src} alt={name} width={20} height={20} />
        <p className="ml-4 text-xs md:text-sm">{name}</p>
      </Link>
    );
  };

export default LinkSide