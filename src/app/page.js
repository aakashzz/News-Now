"use client";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Headings from "@/components/Headings";
import axios from "axios";
import configur from "@/services/configur/configur";
import { useEffect, useState } from "react";

export default function Home() {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      axios(
         `https://newsapi.org/v2/everything?q=top-headings&apiKey=${configur.newsApiKey}`
      )
         .then((data) => {
            setData(data.data.articles);
         })
         .finally(setLoading(false));
   }, [loading]);

   console.log(data[1]);
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
                        <div className=" grid grid-rows-2 h-[50em] gap-y-4">
                           <div className="grid grid-cols-3  h-[400px]">
                              <div className="h-fit w-fit hover:shadow-2xl duration-200 col-span-2 rounded-2xl shadow ">
                                 <img
                                    className="h-[390px] w-[800px] rounded-2xl "
                                    src={data[0]?.urlToImage}
                                 />
                              </div>
                              <div className="border p-2 h-[390px] rounded-2xl hover:shadow-2xl duration-200">
                                 <img
                                    className="rounded-2xl w-[387px] h-[217px]"
                                    src={data[1]?.urlToImage}
                                 />
                                 <div className="px-1 py-2">
                                    <p className="text-lg font-semibold">
                                       {data[1]?.title}
                                    </p>
                                    <p className="text-sm py-1 font-light">
                                       {data[1]?.description}
                                    </p>
                                    <p className="font-semibold text-right">
                                       {data[1]?.author || data[1]?.source.name}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-x-4">
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <img
                                    className="rounded-xl h-[300px]  w-[600px]"
                                    src={data[2]?.urlToImage}
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {data[2]?.title}
                                    </p>
                                    <p className="text-sm py-1 font-light">
                                       {data[2]?.description}
                                    </p>
                                    <p className="font-semibold text-lg text-right">
                                       {data[2]?.author || data[2]?.source.name}
                                    </p>
                                 </div>
                              </div>
                              <div className="border rounded-2xl hover:shadow-2xl duration-200 p-2">
                                 <img
                                    className="rounded-xl h-[300px] w-[600px]"
                                    src={data[3]?.urlToImage}
                                 />
                                 <div className="px-1 py-2.5">
                                    <p className="text-lg font-semibold">
                                       {data[3]?.title}
                                    </p>
                                    <p className="text-sm py-1 font-light">
                                       {data[3]?.description}
                                    </p>
                                    <p className="font-semibold text-lg text-right">
                                       {data[3]?.author || data[3]?.source.name}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </main>
               </Container>
            </>
         )}
      </main>
   );
}
