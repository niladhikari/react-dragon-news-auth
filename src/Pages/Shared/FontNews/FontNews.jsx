import { useEffect, useState } from "react";
import Story from "./Story";

const FontNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-medium mb-5">Dragon News Home</h2>
      <div>
        {
           news.map((story)=><Story key={story._id} story={story}></Story>) 
        }
      </div>
    </div>
  );
};

export default FontNews;
