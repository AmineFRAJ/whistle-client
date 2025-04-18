// src/api/football.js

 
const NEWS_TOKEN = process.env.REACT_APP_API_TOKEN_NEWS;

 
 
// soccer news
export const getNewsInfo = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?apiKey=${NEWS_TOKEN}&q=soccer&pageSize=5`
    );
    if (!res.ok) throw new Error('Failed to fetch news');
    return await res.json();
  } catch (err) {
    console.error('⚠️ getNewsInfo:', err.message);
    return { articles: [] };
  }
};

 