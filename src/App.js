import * as React from "react";
import "./css/main.min.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://crowdfund.alissanguyen.dev/js/script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      <div class="overlay overlay--hidden"></div>
      <Header />
      <MainSection />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
