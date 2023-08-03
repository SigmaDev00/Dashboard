import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Cards } from './Components/Cards';
import { Products } from './Components/Products';
import FullFeaturedCrudGrid from './Components/FullFeaturedCrudGrid'
import { Analytics } from './Components/Analytics';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='Main'>
      <div>
        <Navbar/>
        </div>
        <div>
        <Sidebar/>
        </div>
        <div style={{width:"90%",marginLeft:"70px",height:"80vh"}}>
      
      <Routes>
        <Route path="/" index element={<Cards/>}/>
          <Route path="/Analytics" element={<Analytics/>} />
          <Route path="/Products" element={<FullFeaturedCrudGrid/>} />
      </Routes>
        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
