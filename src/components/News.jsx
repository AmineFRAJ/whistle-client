 import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../JS/actions/newsActions';

const News = () => {
  const dispatch = useDispatch();
  const { news = [], loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <aside className="w-full md:w-[350px] bg-[rgb(40,46,58)] rounded-md px-4 md:px-6 py-4">
      <h1 className="text-xl text-teal-400 font-bold mb-4">News - Top Headlines</h1>
      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : (
        news.map((newsItem) => (
          <a
            key={newsItem.title}
            href={newsItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-[180px] md:h-[150px] mb-4 group">
              <img
                src={newsItem.urlToImage || '/img/news-football.webp'}
                alt={newsItem.title}
                className="object-cover w-full h-full rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent">
                <p className="font-semibold text-base md:text-lg group-hover:text-teal-400">
                  {newsItem.title}
                </p>
              </div>
            </div>
          </a>
        ))
      )}
    </aside>
  );
};

export default News;
