import React, { useEffect, useState } from 'react';
import { getNewsInfo } from '../api/football';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNewsInfo();
      setNewsData(data.articles || []);
    };

    fetchNews();
  }, []);

  return (
    <aside className="w-full md:w-[350px] bg-[rgb(40,46,58)] rounded-md px-4 md:px-6 py-4">
      <h1 className="text-xl text-teal-400 font-bold mb-4">News - Top Headlines</h1>
      <div>
        {newsData.map((news) => (
          <a
            key={news.title}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-[180px] md:h-[150px] mb-4 group">
              <img
                src={news.urlToImage || '/img/news-football.webp'}
                alt={news.title}
                className="object-cover w-full h-full rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent">
                <p className="font-semibold text-base md:text-lg group-hover:text-teal-400">
                  {news.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default News;
