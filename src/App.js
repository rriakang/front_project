import Home from "./pages/Home";
import React from "react";
import About from "./pages/About";
import Put from "./pages/Put";
import Counter from "./pages/Counter";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import {Routes,Route,Link} from "react-router-dom";


//router를 통해서 메뉴 구성하는 방법
function App() {
  return (
    <div className="App">
      <nav>
        <Link to ="/">Home</Link> | 
        <Link to ="/about"> About</Link> |
        <Link to ="/counter"> Counter</Link> | 
        <Link to ="/put"> Put</Link> | 
        <Link to ="/input2"> Input2</Link> | 
        <Link to ="/List"> List</Link> | 
       
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/put" element={<Put />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/List" element={<List />}/>
       
    
      </Routes> 
    </div>
  );
}

export default App;
 //a href link랑 같음