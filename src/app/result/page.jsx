"use client";
import Container from "@/components/Container";
import { searchHeadlineApi } from "@/hook/searchHeadlineApi";
import React, { useState } from "react";

function page({ searchParams }) {
   const [data, setData] = useState([])
   // console.log(searchParams.search);

   const value = searchHeadlineApi(searchParams.search);
   value.then(res=> {
      console.log(res)
      
      setData(res)
   }
   )
   
   return(
      <>
         <Container >
      
         {/* <div className="h-auto w-full pt-10 ">
                        {data?.map((data) => (
                           <ListArticle
                              img={data.urlToImage}
                              link={data.url}
                              title={data.title}
                              description={data.description}
                              date={data.publishedAt}
                              author={data.author || data.source.name}
                           />
                        ))}
                     </div> */}
         </Container>
      </>
   )
}

export default page;
