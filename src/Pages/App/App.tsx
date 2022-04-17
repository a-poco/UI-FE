import React from 'react';
import './App.css';
import ListDevices from '../../components/ListDevices/ListDevices';
import { Product } from '../../types';
import GridDevices from '../../components/GridDevices/GridDevices';
import { BsListUl } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import Search from "../../components/Search/Search";
import Filter from '../../components/Filter/Filter';

const initialProducts: Product[] = []

const App = () => {
  const [allProducts, setAllProducts] = React.useState(initialProducts);
  const [displayedProducts, setDisplayedProducts] = React.useState(initialProducts);
  const [error, setStateError] = React.useState()
  const [view, setView] = React.useState('list')

  const switchView = (input: string) => {
    if (input === 'list') {
      setView('list')
    } else {
      setView('grid')
    }
  }

  React.useEffect(() => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
      .then(response => response.json())
      .then(data => { setAllProducts(data.devices) })
      .catch(err => setStateError(err))
  }, [])

  React.useEffect(() => {
    const displayProducts = allProducts.map((item, index) => Object.assign(item, { key: index }))
    setDisplayedProducts(displayProducts)
  }, [allProducts])

  return (
    <section>
      <section className='filter-bar'>
        <Search listOfProduct={allProducts} setProducts={setDisplayedProducts} />
        <section className='filter-bar__icons'>
          <button className='filter-bar-icons__list' data-testid="list-button" onClick={() => switchView('list')}><BsListUl /></button>
          <button className='filter-bar-icons__grid' data-testid="grid-button" onClick={() => switchView('grid')}><IoGridOutline /></button>
          <Filter listOfProduct={allProducts} setProducts={setDisplayedProducts} />
        </section>
      </section>
      {!error ? <main className="products_data">
        {view === 'list' && <ListDevices data-testid="list-view" listOfProduct={displayedProducts} />}
        {view === 'grid' && <GridDevices data-testid="grid-view" listOfProduct={displayedProducts} />}
      </main> : <p>Something went wrong 😱</p>}
    </section>
  );
}
export default App;