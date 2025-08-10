import React from "react";
import Header from "../layout/Header";
import Hero_section from "../component/Hero_section";
import Carosel_section from "../component/carosel_section";
import Shop_by_occation from "../component/shop_by_occation";
import Our_Bestsellers from "../component/Our_Bestsellers";
import Testinomial from "../component/testinomial";
import Footer from "../layout/footer";


const MainPages = () => {
    return (
        <>
            <Header/>
            <Hero_section />
            <Carosel_section />
            <Shop_by_occation />
            <Our_Bestsellers />
            <Testinomial />
            <Footer />
        </>
    );
}

export default MainPages;