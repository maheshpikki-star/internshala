import "./App.scss";
import NavBar from "./components/header/NavBar";
import Catalog from "./components/Catalog/Catalog";
import JavaScript from "./components/languages/js/javascript";
import Scala from "./components/languages/scala/scala";
import GoLang from "./components/languages/go/golang";
import ObjectiveC from "./components/languages/oc/objectivec";
import SQL from "./components/languages/sql/sql";
import Git from "./components/subjects/git";
import DevEnv from "./components/subjects/devenv";
import Bash from "./components/languages/bash/bash";
import { Routes, Route } from "react-router-dom";

import Community from "./components/community";
import UnderDevelopment from "./components/Catalog/UnderDevelopment";
import FrontEndEngineer from "./components/frontendengineer";
import HyperText from "./components/languages/html/hypertext";
import Swift from "./components/languages/swift/swift";
import DataScience from "./datascience";
import Docker from "./docker";
import Resources from "./components/resources";
import CodeFoundations from "./components/subjects/codefoundations";
import WebDesign from "./components/subjects/webdesign";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/languages">
          <Route path="javascript/:article" element={<JavaScript />} />
          <Route path="golang/:article" element={<GoLang />} />
          <Route path="scala/:article" element={<Scala />} />

          <Route path="hypertext/:article" element={<HyperText />} />
          <Route path="objectivec/:article" element={<ObjectiveC />} />
          <Route path="sql/:article" element={<SQL />} />
          <Route path="bash/:article" element={<Bash />} />

          <Route path="swift/:article" element={<Swift />} />
        </Route>
        <Route path="/languages/javascript" element={<JavaScript />} />
        <Route path="/languages/javascript/intro" element={<JavaScript />} />
        <Route path="/languages/golang" element={<GoLang />} />
        <Route path="/languages/golang/intro" element={<GoLang />} />
        <Route path="/languages/sql/intro" element={<SQL />} />
        <Route path="/languages/bash/intro" element={<Bash />} />
        <Route path="/languages/hypertext" element={<HyperText />} />
        <Route path="/languages/hypertext/intro" element={<HyperText />} />
        <Route path="/languages/scala" element={<Scala />} />
        <Route path="/languages/scala/intro" element={<Scala />} />
        <Route path="/frontendengineer" element={<FrontEndEngineer />} />
        <Route path="/docker" element={<Docker />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/subjects">
          <Route path="codefoundations" element={<CodeFoundations/>} />
          <Route path="git" element={<Git />} />
          <Route path="devenv" element={<DevEnv />} />
          <Route path="webdev" element={<h1>Hello</h1>} />
          <Route path="cs" element={<h1>Hello</h1>} />
          <Route path="devtools" element={<h1>Hello</h1>} />
          <Route path="funcprogramming" element={<h1>Hello</h1>} />
          <Route path="webdesign" element={<WebDesign/>} />
        </Route>
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
