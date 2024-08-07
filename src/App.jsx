import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home  from './Components/Home';
import { Cart } from './Components/Cart';
import  About  from './Components/About';
import ProductDetail from './Components/ProductDetail';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { Checkout } from './Components/Checkout';




function App() {

  return (

    <Provider store={appStore} >

    <Router>

        <Header />
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
        </Router>

        </Provider>
  
  )
}

export default App
