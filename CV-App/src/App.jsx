import { useState } from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import ModernTemplate from "./template/Modern-Template";
import Input from "./components/Input";
import NavBar from "./components/Nav";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Input />
        </>
    );
}

export default App;
