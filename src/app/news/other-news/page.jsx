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

function OtherNews() {
    const [otherNews, setOtherNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const country = useSelector((state) => state.country.country);
    useEffect(()=>{
        axios(
            ` https://newsapi.org/v2/top-headlines?country=${country}&category=technology&pageSize=100&apiKey=${configur.newsApiKey}`
         )
            .then((data) => {
               let arrayOfData = data.data.articles;
               const NullImg = arrayOfData.filter(
                  (item) => item.description !== null && item.urlToImage !== null
               );
               setOtherNews(NullImg);
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
                            otherNews[0]?.urlToImage ||
                              "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                           }
                           title={otherNews[0]?.title}
                           link={otherNews[0]?.url}
                           author={
                            otherNews[0]?.author || otherNews[0]?.source.name
                           }
                           date={otherNews[0]?.publishedAt}
                        />
                     </div>
                     <div className="h-auto w-full pt-10 ">
                        {otherNews.map((data) => (
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

export default OtherNews;
