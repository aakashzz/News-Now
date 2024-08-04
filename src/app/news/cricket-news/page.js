"use client"
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Headings from "@/components/Headings";
import Navbar from "@/components/Navbar";
import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import configur from "@/services/configur/configur";
import Loader from "@/components/mini-component/Loader";
import ListArticle from "@/components/ListArticle";
import Headline from "@/components/Headline";

function CricketNews() {
    const [cricketNews, setCricketNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const country = useSelector((state) => state.country.country);
    useEffect(()=>{
        axios(
            ` https://newsapi.org/v2/top-headlines?country=${country}&category=sports&pageSize=100&apiKey=${configur.newsApiKey}`
         )
            .then((data) => {
               let arrayOfData = data.data.articles;
               const NullImg = arrayOfData.filter(
                  (item) => item.description !== null && item.urlToImage !== null
               );
               setCricketNews(NullImg);
            })
            .finally(setLoading(false));
    })
   return (
      <>
         <main>
            <>
            {
                loading ? (<Loader />) : (<>
               <Container>
               <Headings />
                  <div className="flex justify-center">
                        <Headline
                           imgURL={
                            cricketNews[0]?.urlToImage ||
                              "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                           }
                           title={cricketNews[0]?.title}
                           link={cricketNews[0]?.url}
                           author={
                            cricketNews[0]?.author || cricketNews[0]?.source.name
                           }
                           date={cricketNews[0]?.publishedAt}
                        />
                     </div>
                     <div className="h-auto w-full pt-10 ">
                        {cricketNews.map((data) => (
                           <ListArticle
                              img={data.urlToImage}
                              link={data.url}
                              title={data.title}
                              description={data.description}
                              date={data.publishedAt}
                              author={data.author || data.source.name}
                           />
                        ))}
                     </div>
               </Container>
               </>)
            }
               
            </>
         </main>
      </>
   );
}

export default CricketNews;
