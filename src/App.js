// import logo from './logo.svg';
import './App.css';

import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./Crud/Create";
import GetData from "./Crud/GetData";

function App() {
  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={ <GetData /> } />
    <Route path="/create" element={ <Create/> } />
  </Routes>
</Router>
   </>
  );
}

export default App;
