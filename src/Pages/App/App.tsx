import React from 'react';
import ListDevices from '../../components/ListDevices/ListDevices';
import { Product, Products } from '../../types';
import GridDevices from '../../components/GridDevices/GridDevices';
import { BsListUl } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import './App.css';



const initialProducts: Products = {
  version: '',
  devices: []
}

const App = () => {
  const [ products, setProducts] = React.useState(initialProducts);
  const [error, setStateError] = React.useState({})
  const [view, setView] = React.useState('list')

  const switchView = (input: string) => {
    if (input ==='list') {
      console.log("Input ", input, "State ", view)
      setView('list')
    } else {
      console.log("Input ", input, "State ", view)
      setView('grid')

    }
  }

  const listOfProducts : Product[] = products.devices


  React.useEffect(() => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
    .then( response => response.json())
    .then( data => setProducts(data))
    .catch( err => setStateError(err))
  }, [])
  
  return (
    <section>
      <section className='filter-bar'>
        <form className='filter-bar__form' action="action_page.php">
            <input className='filter-bar__search' type="text" placeholder="search" name="search"/>
            <button type="submit"className='filter-form__brn'>x</button>
        </form>
        <section className='filter-bar__icons'>
            <button className='filter-bar-icons__list' onClick={ () => switchView('list')}><BsListUl /></button>
            <button className='filter-bar-icons__grid'  onClick={ () => switchView('grid')}><IoGridOutline /></button>
            <p className='filter-bar-icons__filter'> Filter </p>
        </section>
      </section>
      <main className="products_data">
        {view === 'list' && <ListDevices listOfProduct={listOfProducts} /> }
        {view === 'grid' &&  <GridDevices listOfProduct={listOfProducts} /> }
      </main>
    </section>

  );
}
export default App;