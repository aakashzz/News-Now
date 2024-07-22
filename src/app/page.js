"use client";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Headings from "@/components/Headings";
import axios from "axios";
import configur from "@/services/configur/configur";
import { useEffect, useState } from "react";
import LimitedText from "@/components/mini-component/LimitText";
import { useSelector } from "react-redux";
import ListArticle from "@/components/ListArticle";
import ShortArticles from "@/components/ShortArticles";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
   const [shortArticle, setShortArticle] = useState([]);
   const [topHeadline, setTopHeadline] = useState([]);
   const [everything, setEverything] = useState([]);
   const [loading, setLoading] = useState(true);
   const country = useSelector((state) => state.country.country);
   useEffect(() => {
      axios(
         ` https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${configur.newsApiKey}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const NullImg = arrayOfData.filter(
               (item) => item.description !== null && item.title !== item.title.includes("[Removed]")
            );
            setShortArticle(NullImg);
            const nonNullImg = arrayOfData.filter(
               (item) => item.urlToImage !== null
            );
            setTopHeadline(nonNullImg);
         })
         .finally(setLoading(false));

      axios(
         `  https://newsapi.org/v2/top-headlines?country=${country}&category=business&pageSize=30&apiKey=${configur.newsApiKey}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const nonNullImg = arrayOfData.filter(
               (item) => item.urlToImage !== null && item.title == item.title
            );
            setEverything(nonNullImg);
         })
         .finally(setLoading(false));
   }, [loading, country]);

   return (
      <main className="min-h-screen bg-white antialiased bg-grid-white/[0.02]">
         {loading ? (
            <p>Loading...</p>
         ) : (
            <>
               <Navbar />
               <Container>
                  <Headings />
                  <main>
                     <div className="h-full w-full px-2">
                        <div className=" w-fit py-3">
                           <h2 className="font-bold text-3xl px-4 ">
                              Top Headline
                           </h2>
                        </div>
                        <div className=" grid grid-rows-2 h-fit gap-y-4">
                           <div className="grid grid-cols-3  h-[400px]">
                              <div className="h-fit w-fit hover:shadow-2xl duration-200 col-span-2 rounded-2xl shadow ">
                                 <Image
                                    className="h-[390px] w-[800px] rounded-2xl "
                                    width={800}
                                    height={390}
                                    src={
                                       topHeadline[0]?.urlToImage ||
                                       everything[0]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                              </div>
                              <div className="border p-2 h-[390px] rounded-2xl hover:shadow-2xl duration-200">
                                 <Image
                                    className="rounded-2xl w-[387px] h-[217px]"
                                    width={387}
                                    height={217}
                                    src={
                                       topHeadline[1]?.urlToImage ||
                                       everything[1]?.urlToImage ||
                                       "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                                    }
                                 />
                                 <div className="px-1 py-2">
                                    <p className="text-lg font-semibold">
                                       {topHeadline[1]?.title ||
                                          everything[1]?.title}
                                    </p>

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
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <Image
                                    className="rounded-xl h-[300px]  w-[600px]"
                                    width={600}
                                    height={300}
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
                                    className="rounded-xl h-[300px] w-[600px]"
                                    width={600}
                                    height={300}
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
                                 />
                              );
                           })}
                        </div>
                     </div>
                     <div className=" w-full h-full px-2 ">
                        <h2 className="font-bold text-3xl">
                           Short Article's...
                        </h2>
                        <ScrollArea className="w-auto whitespace-nowrap rounded-3xl border my-4">
                           <div className="grid grid-flow-col justify-items-center ">
                              {shortArticle.map((item) => (
                                 <ShortArticles
                                    description={item.description}
                                    author={item.author}
                                    date={item.publishedAt}
                                    sourceName={item.source.name}
                                 />
                              ))}
                           </div>
                           <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                     </div>
                  </main>
               </Container>
               <Footer />
            </>
         )}
      </main>
   );
}
