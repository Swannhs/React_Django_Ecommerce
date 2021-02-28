import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./components/layout/Products";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    );
}

export default App;
