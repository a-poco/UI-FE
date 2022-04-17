import React from 'react'
import './Search.css'
import { Product } from '../../types';


interface SearchProps {
    listOfProduct: Product[];
    setProducts: Function
}

const Search = ({ listOfProduct, setProducts }: SearchProps) => {

    const [searchInput, setSearchInput] = React.useState("");

    const handleSearch = (event: any) => {
        const searchResult = listOfProduct.filter(
            (device) => device.line.name.toLowerCase().includes(searchInput.toLowerCase())
                || device.product.name.toLowerCase().includes(searchInput.toLowerCase()))
        setProducts(searchResult)
        event.preventDefault()
    }

    const handleSearchReset = (event: any) => {
        setProducts(listOfProduct)
        setSearchInput("")
        event.preventDefault()
    }

    return (
        <form className='search-form' onSubmit={handleSearch}>
            <input
                className='search-form__search'
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => { setSearchInput(e.target.value) }}
            />
            <input className='search-form__reset' type="reset" value="X" onClick={handleSearchReset} />
        </form>
    )
}

export default Search