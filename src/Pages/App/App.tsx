import React from 'react';
import ReactSelect from "react-select";
import ListDevices from '../../components/ListDevices/ListDevices';
import { Product, Products, SelectedOption } from '../../types';
import GridDevices from '../../components/GridDevices/GridDevices';
import { BsListUl } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import Option from '../../components/Filter/Filter';
import './App.css';



const initialProducts: Products = {
  devices: []
}

const initialSelectedOption: SelectedOption[] = []


const App = () => {
  const [products, setProducts] = React.useState(initialProducts);
  const [devices, setDevices] = React.useState(initialProducts);

  const [selected, setSelected] = React.useState(initialSelectedOption)
  const [searchInput, setSearchInput] = React.useState("");

  const [error, setStateError] = React.useState({})
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
      .then(data => { setProducts(data); setDevices(data); })
      .catch(err => setStateError(err))
  }, [])


  React.useEffect(() => {
    console.log(selected)
    if (selected.length === 0) {
      setProducts(devices)
      return
    }
    const selectedValues = selected.map(input => input.value)
    const filter = {
      devices: devices.devices.filter((device) => selectedValues.includes(device.line.name))
    }
    setProducts(filter)
  }, [selected]);


  const options: SelectedOption[] = Array.from(new Set(devices.devices.map((product: Product) => product.line.name))).map((name: string) => ({ value: name, label: name }))

  const handleChange = (event: any) => {
    setSelected(event)
  }

  const handleSearch = (event: any) => {
    console.log("Search ", searchInput)

    setSelected([{ value: searchInput, label: searchInput }])
    setSearchInput("")

    event.preventDefault()
    event.target.reset();
  }

  return (
    <section>
      <section className='filter-bar'>
        <form className='filter-bar__form' onSubmit={handleSearch}>
          <input className='filter-bar__search' type="text" placeholder="search" name="search" onChange={(e) => { setSearchInput(e.target.value) }} />
          <input type="reset" defaultValue="Reset" />
        </form>
        <section className='filter-bar__icons'>
          <button className='filter-bar-icons__list' onClick={() => switchView('list')}><BsListUl /></button>
          <button className='filter-bar-icons__grid' onClick={() => switchView('grid')}><IoGridOutline /></button>
          <p className='filter-bar-icons__filter'>
            <ReactSelect
              options={options}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option
              }}
              onChange={handleChange}
              value={selected}
            />
          </p>
        </section>
      </section>
      <main className="products_data">
        {view === 'list' && <ListDevices listOfProduct={products.devices} />}
        {view === 'grid' && <GridDevices listOfProduct={products.devices} />}
      </main>
    </section>

  );
}
export default App;