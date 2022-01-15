import React from "react";
import Registration from "../../components/Registration";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const RegistrationPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
