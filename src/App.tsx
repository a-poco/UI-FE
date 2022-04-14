import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import ListDevices from './components/ListDevices/ListDevices';
import Navbar from './components/Navbar/Navbar';
import { Product, Products } from './types';



const initialProducts: Products = {
  version: '',
  devices: []
}

const App = () => {
  const [ products, setProducts] = React.useState(initialProducts);
  const [error, setStateError] = React.useState({})


  React.useEffect(() => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
    .then( response => response.json())
    .then( data => setProducts(data))
    .catch( err => setStateError(err))
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <div className="products_data">
        {products.devices.map((product: Product) => (
        < ListDevices product={product} /> 
        ))}
      </div>
    </BrowserRouter>
  );
}
export default App;