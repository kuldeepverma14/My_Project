// import logo from './logo.svg';
import './App.css';

import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./Crud/Create";
import GetData from "./Crud/GetData";
import WhereToUse from './notes/hoc/WhereToUse';
import WhereToUseFunction from './notes/hof/WhereToUseFunction';
import Hoisting from './notes/Hoisting';
import Debugger from './notes/Debugger';
import ScopeChain from './notes/ScopeChain';
import Update from './Crud/Update';
import NestedDropdown from './NestedDropdown';
import Debouncing from './notes/Debouncing';

function App() {
  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={ <GetData /> } />
    <Route path="/create" element={ <Create/> } />
    <Route path="/update/:id" element={ <Update/> } />
    <Route path="/NestedDropdown" element={ <NestedDropdown /> } />
    <Route path="/hoisting" element={ <Hoisting /> } />
    <Route path="/debouncing" element={ <Debouncing /> } />
    <Route path="/debugger" element={ <Debugger /> } />
    <Route path="/scopechain" element={ <ScopeChain /> } />
    <Route path="/whereToUsecomponent" element={ <WhereToUse/> } />
    <Route path="/whereToUsefunction" element={ <WhereToUseFunction /> } />
  </Routes>
</Router>
   </>
  );
}

export default App;
