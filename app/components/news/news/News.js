'use client'
import axios from 'axios'
import { useEffect, useState } from "react";
import styles from "./news.module.css"
import NewsSingle from '../singlesNews/NewsSingle';
const News = () => {
//use states
const [newsData, setNewsData] = useState([])

useEffect(()=>{
  axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`)
  .then(response =>{
    console.log(response);
    const responseData = response.data;
    setNewsData(responseData.articles);
  }) .catch(error => {
    console.error("Error fetching the news data:", error);
  });
},[]);

  return (
    <div>
      <div>
        <input type="text" placeholder='search news updated'/>
      </div>
     {newsData.map((items) => (
      <NewsSingle key={items.id} newsDatas = {items}/>
     ))}
    </div>
  )
}

export default News