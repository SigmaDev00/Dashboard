import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Cards } from './Components/Cards';

function App() {
  return (
    <>
    <div className='Main'>
      <div>
        <Navbar/>
        </div>
        <div>
        <Sidebar/>
        </div>
        <div style={{width:"90%",marginLeft:"70px"}}>
        <Cards/>
        </div>
    </div>
    </>
  );
}

export default App;
