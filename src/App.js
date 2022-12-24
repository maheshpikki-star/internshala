import "./App.scss";
import NavBar from "./components/header/NavBar";
import Catalog from "./components/Catalog/Catalog";
import JavaScript from "./components/Catalog/language/js/javascript";
import Git from "./components/Catalog/subjects/git";
import DevEnv from "./components/Catalog/subjects/devenv";
import { Routes, Route } from "react-router-dom";
import UnderDevelopment from "./components/Catalog/UnderDevelopment";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/languages">
          <Route path="htmlcss" element={<h1>Hello</h1>} />
          <Route path="javascript/:article" element={<JavaScript />} />
          <Route path="scala" element={<h1>Hello</h1>} />
          <Route path="golang" element={<h1>Hello</h1>} />
          <Route path="sql" element={<h1>Hello</h1>} />
          <Route path="bash" element={<h1>Hello</h1>} />
          <Route path="objectivec" element={<h1>Hello</h1>} />
          <Route path="swift" element={<h1>Hello</h1>} />
        </Route>
        <Route path="/subjects">
          <Route path="codefoundations" element={<h1>Hello</h1>} />
          <Route path="git" element={<Git />} />
          <Route path="devenv" element={<DevEnv />} />
          <Route path="webdev" element={<h1>Hello</h1>} />
          <Route path="cs" element={<h1>Hello</h1>} />
          <Route path="devtools" element={<h1>Hello</h1>} />
          <Route path="funcprogramming" element={<h1>Hello</h1>} />
          <Route path="webdesign" element={<h1>Hello</h1>} />
        </Route>
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
