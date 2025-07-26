import React from "react";
import Header from "./Header.jsx"
import Hero_section from "./Hero_section.jsx";
import Carosel_section from "./carosel_section.jsx";
import Shop_by_occation from "./shop_by_occation.jsx"
import Our_Bestsellers from "./Our_Bestsellers.jsx";
import Testinomial from "./testinomial.jsx";
import Footer from "./footer.jsx";

const App = () => {
  return (
    <>
      <Header className="sticky top-0"/>
      <Hero_section />
      <Carosel_section />
      <Shop_by_occation />
      <Our_Bestsellers />
      <Testinomial />
      <Footer />
    </>
  );
}
export default App;