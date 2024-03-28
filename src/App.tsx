import React from "react";
import "./App.css";
import FileBrowser from "./components/FileBrowser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Taskbar from "./components/Taskbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Taskbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<FileBrowser />} />
        </Routes>
      </Router>
      <div className="absolute bottom-0 left-0 border-t border-gray-500 w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
