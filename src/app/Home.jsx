import Container from "@/components/Cotainer";
import Headings from "@/components/Headings";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <>
        <Navbar />
        <Container>
            <Headings />
            <div></div>
        </Container>
    </>
  );
}

export default Home;
