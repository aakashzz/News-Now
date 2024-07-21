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
export default function Home() {
   const [topHeadline, setTopHeadline] = useState([]);
   const [everything, setEverything] = useState([]);
   const [loading, setLoading] = useState(true);
   const country = useSelector(state => state.country.country)
   useEffect(() => {
      axios(
         ` https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${configur.newsApiKey}`
      )
         .then((data) => {
            let arrayOfData = data.data.articles;
            const nonNullImg = arrayOfData.filter(item => item.urlToImage !== null)
            setTopHeadline(nonNullImg);
         })
         .finally(setLoading(false));

         axios(
            `  https://newsapi.org/v2/everything?q=top-headlines&apiKey=${configur.newsApiKey}`
         )
            .then((data) => {
               let arrayOfData = data.data.articles;
               const nonNullImg = arrayOfData.filter(item => item.urlToImage !== null)
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
                                 <img
                                    className="h-[390px] w-[800px] rounded-2xl "
                                    src={topHeadline[0]?.urlToImage || everything[0]?.urlToImage || "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                                 />
                              </div>
                              <div className="border p-2 h-[390px] rounded-2xl hover:shadow-2xl duration-200">
                                 <img
                                    className="rounded-2xl w-[387px] h-[217px]"
                                    src={topHeadline[1]?.urlToImage || everything[1]?.urlToImage || "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                                 />
                                 <div className="px-1 py-2">
                                    <p className="text-lg font-semibold">
                                       {topHeadline[1]?.title || everything[1]?.title}
                                    </p>

                                    <LimitedText text={topHeadline[1]?.description ||everything[1]?.description} limit={80}/>
                                    
                                    <p className="font-semibold text-right">
                                       {topHeadline[1]?.author || topHeadline[1]?.source.name || everything[1]?.author}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-x-4">
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <img
                                    className="rounded-xl h-[300px]  w-[600px]"
                                    src={everything[2]?.urlToImage || "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {everything[2]?.title}
                                    </p>
                                    <LimitedText text={everything[2]?.description}  limit={200}/>
                                    <p className="font-semibold text-lg text-right">
                                       {everything[2]?.author || everything[2]?.source.name}
                                    </p>
                                 </div>
                              </div>
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <img
                                    className="rounded-xl h-[300px] w-[600px]"
                                    src={everything[3]?.urlToImage || "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {everything[3]?.title}
                                    </p>
                                    <LimitedText text={everything[3]?.description}  limit={200}/>
                                    <p className="font-semibold text-lg text-right">
                                       {everything[3]?.author || everything[3]?.source.name}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="py-5 w-full h-screen px-2">
                           <div>
                              <ListArticle img={""} title={""} description={""} author={""} date={""}/>
                           </div>
                     </div>
                  </main>
               </Container>
            </>
         )}
      </main>
   );
}
