import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Pages/Footer';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Shop/>
      <Footer/>

    </div>
  );
}

export default App;
