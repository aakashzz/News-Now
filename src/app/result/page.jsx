"use client";
import React from "react";
import { searchHeadlineApi } from "@/hook/searchHeadlineApi";
import { useSelector } from "react-redux";

function page() {
   const searchValue = useSelector((state) => state.search);
   searchHeadlineApi(searchValue).then((data) => {
      console.log(data.data);
   });
   return <div>page</div>;
}

export default page;
