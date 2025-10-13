import Header from "./content/header";
import Sidebar from "./content/sidebar";
import MainContent from "./content/main-content";
import Footer from "./content/footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}
