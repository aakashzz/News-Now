"use client";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Headings from "@/components/Headings";
import axios from "axios";
import { useEffect, useState } from "react";
import LimitedText from "@/components/mini-component/LimitText";
import { useSelector } from "react-redux";
import ListArticle from "@/components/ListArticle";
import ShortArticles from "@/components/ShortArticles";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Footer from "@/components/Footer";
import Loader from "@/components/mini-component/Loader";
import { searchHeadlineApi } from "@/hook/searchHeadlineApi";

export default function Home() {
   const [shortArticle, setShortArticle] = useState([]);
   const [topHeadline, setTopHeadline] = useState([]);
   const [everything, setEverything] = useState([]);
   const [loading, setLoading] = useState(true);
   const country = useSelector((state) => state.country.country);
   useEffect(() => {
      axios(
         ` https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const NullImg = arrayOfData.filter(
               (item) =>
                  item.description !== null ||
                  item.urlToImage === null
            );
            setShortArticle(NullImg);
            const nonNullImg = arrayOfData.filter(
               (item) => item.urlToImage !== null
            );
            setTopHeadline(nonNullImg);
         })
         .finally(setLoading(false));

      axios(
         `  https://newsapi.org/v2/top-headlines?country=${country}&category=business&pageSize=80&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const nonNullImg = arrayOfData.filter(
               (item) => item.urlToImage !== null
            );
            setEverything(nonNullImg);
         })
         .finally(setLoading(false));
   }, [loading, country]);

   function treadingGoToLink(link) {
      return window.open(link, "_blank");
   }
   // searchHeadlineApi(configur.newsApiKey,"india").then((data)=>{
   //    console.log(data);
   // })

   return (
      <main className="h-full w-full bg-white antialiased bg-grid-white/[0.02]">
         {loading ? (
            <Loader/>
         ) : (
            <>   
               <Container>
                  <Headings />
                  <main>
                     <div className="h-full w-full px-2">
                        <div className=" w-fit py-3">
                           <h1 className="font-bold text-3xl px-4 ">
                              Top Headline
                           </h1>
                        </div>
                        <div className=" grid grid-rows-2 h-fit gap-y-4">
                           <div className="grid grid-cols-3  h-[400px]">
                              <div className="h-fit w-fit hover:shadow-2xl duration-200 col-span-2 rounded-2xl shadow ">
                                 <Image
                                    onClick={() =>
                                       treadingGoToLink(
                                          topHeadline[0]?.url ||
                                             everything[0]?.url
                                       )
                                    }
                                    className="h-[390px] w-[800px] rounded-2xl cursor-pointer"
                                    width={800}
                                    height={390}
                                    loading="lazy"
                                    src={
                                       topHeadline[0]?.urlToImage ||
                                       everything[0]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                              </div>
                              <div className="border p-2 h-[390px] rounded-2xl hover:shadow-2xl duration-200">
                                 <Image
                                    onClick={() =>
                                       treadingGoToLink(
                                          topHeadline[1]?.url ||
                                             everything[1]?.url
                                       )
                                    }
                                    className="rounded-xl w-[394px] h-[217px] cursor-pointer"
                                    width={387}
                                    height={217}
                                    loading="lazy"
                                    src={
                                       topHeadline[1]?.urlToImage ||
                                       everything[1]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                                 <div className="px-1 py-2">
                                 <LimitedText
                                       text={
                                          topHeadline[1]?.title ||
                                          everything[1]?.title
                                       }
                                       className={"text-lg font-semibold"}
                                       limit={75}
                                    />

                                    <LimitedText
                                       text={
                                          topHeadline[1]?.description ||
                                          everything[1]?.description
                                       }
                                       className={"text-sm py-1 font-light"}
                                       limit={80}
                                    />

                                    <p className="font-semibold text-right">
                                       {topHeadline[1]?.author ||
                                          topHeadline[1]?.source.name ||
                                          everything[1]?.author}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-x-4">
                              <div className="border rounded-2xl hover:shadow-2xl  duration-200 p-2">
                                 <Image
                                 onClick={() =>
                                    treadingGoToLink(
                                       topHeadline[2]?.url ||
                                          everything[2]?.url
                                    )
                                 }
                                    className="rounded-xl h-[300px] cursor-pointer w-[600px]"
                                    width={600}
                                    height={300}
                                    loading="lazy"
                                    src={
                                       topHeadline[2]?.urlToImage ||
                                       everything[2]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {topHeadline[2]?.title ||
                                          everything[2]?.title}
                                    </p>
                                    <LimitedText
                                       text={
                                          topHeadline[2]?.description ||
                                          everything[2]?.description
                                       }
                                       className={"text-sm py-1 font-light"}
                                       limit={200}
                                    />
                                    <p className="font-semibold text-lg text-right">
                                       {topHeadline[2]?.author ||
                                          everything[2]?.author ||
                                          everything[2]?.source.name}
                                    </p>
                                 </div>
                              </div>
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <Image
                                 onClick={() =>
                                    treadingGoToLink(
                                       topHeadline[3]?.url ||
                                          everything[3]?.url
                                    )
                                 }
                                    className="rounded-xl h-[300px] w-[600px] cursor-pointer"
                                    width={600}
                                    height={300}
                                    loading="lazy"
                                    src={
                                       topHeadline[3]?.urlToImage ||
                                       everything[3]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {topHeadline[3]?.title ||
                                          everything[3]?.title}
                                    </p>
                                    <LimitedText
                                       text={
                                          topHeadline[3]?.description ||
                                          everything[3]?.description
                                       }
                                       className={"text-sm py-1 font-light"}
                                       limit={200}
                                    />
                                    <p className="font-semibold text-lg text-right">
                                       {topHeadline[3]?.author ||
                                          everything[3]?.author ||
                                          everything[3]?.source.name}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="py-5 w-full h-full px-2">
                        <div>
                           {everything.map((data) => {
                              return (
                                 <ListArticle
                                    img={data.urlToImage}
                                    title={data.title}
                                    description={data.description}
                                    author={data.author}
                                    sourceName={data.source.name}
                                    date={data.publishedAt}
                                    link={data.url}
                                 />
                              );
                           })}
                        </div>
                     </div>
                     <div className=" w-full h-full px-2 ">
                        <h1 className="font-bold text-3xl">
                           Short Article's...
                        </h1>
                        <ScrollArea className="w-auto whitespace-nowrap rounded-3xl border my-4">
                           <div className="grid grid-flow-col justify-items-center ">
                              {shortArticle.map((item) => (
                                 <ShortArticles
                                    description={item.description || item.title}
                                    author={item.author}
                                    date={item.publishedAt}
                                    sourceName={item.source.name}
                                    link={item.url}
                                 />
                              ))}
                           </div>
                           <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                     </div>
                  </main>
               </Container>            </>
         )}
         
      </main>
   );
}
