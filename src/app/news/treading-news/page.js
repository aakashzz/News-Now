"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Headline from "@/components/Headline";
import React from "react";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Headings from "@/components/Headings";
import configur from "@/services/configur/configur";
import { useSelector } from "react-redux";
import ListArticle from "@/components/ListArticle";
import Footer from "@/components/Footer";
import Loader from "@/components/mini-component/Loader";

function TreadingNews() {
   const country = useSelector((state) => state.country.country);
   const [headline, setHeadline] = useState([]);
   const [loading, setLoading] = useState([]);
   useEffect(() => {
      axios(
         ` https://newsapi.org/v2/top-headlines?country=${country}&category=business&pageSize=100&apiKey=${configur.newsApiKey}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const NullImg = arrayOfData.filter(
               (item) => item.description !== null && item.urlToImage !== null
            );
            setHeadline(NullImg);
         })
         .finally(setLoading(false));
   }, [loading, country]);
   return (
      <main>
         <>
            {loading ? (
               <Loader />
            ) : (
               <>
                  <Navbar />
                  <Container>
                     <Headings />
                     <div className="flex justify-center">
                        <Headline
                           imgURL={
                              headline[0]?.urlToImage ||
                              "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                           }
                           title={headline[0]?.title}
                           link={headline[0]?.url}
                           author={
                              headline[0]?.author || headline[0]?.source.name
                           }
                        />
                     </div>
                     <div className="h-auto w-full pt-10 ">
                        {headline.map((data) => (
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
                  <Footer />
               </>
            )}
         </>
      </main>
   );
}

export default TreadingNews;
   