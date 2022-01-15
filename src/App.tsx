import React, { useState } from "react";
import "./App.css";
// import ProductCounter from "./ProductCounter";
// import Form from "./Form";
import RegistrationPage from "./components/Registration/RegistrationForm/index";

const App = () => {
  // const [orangeCount, setOrangeCount] = useState(0);
  // const [appleCount, setAppleCount] = useState(0);
  return (
    <RegistrationPage />
    // <div className="App">
    //   <ProductCounter
    //     productName="Апельсин"
    //     count={orangeCount}
    //     setCount={setOrangeCount}
    //   />
    //   <ProductCounter
    //     productName="Яблоко"
    //     count={appleCount}
    //     setCount={setAppleCount}
    //   />
    //   <Form />
    // </div>
  );
};

export default App;
