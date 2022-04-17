import React from 'react'
import ReactSelect from 'react-select'
import { Product, SelectedOption } from '../../types'
import Option from './Option'

interface FilterProps {
    listOfProduct: Product[];
    setProducts: Function
}

const Filter = ({ listOfProduct, setProducts }: FilterProps) => {
    const initialSelectedOption: SelectedOption[] = []
    const [selected, setSelected] = React.useState(initialSelectedOption)

    React.useEffect(() => {
        if (selected.length === 0) {
            setProducts(listOfProduct)
            return
        }
        const selectedValues = selected.map(input => input.value)
        const filter = listOfProduct.filter((device) => selectedValues.includes(device.line.name))
        setProducts(filter)
    }, [listOfProduct, selected, setProducts]);

    const options: SelectedOption[] = Array.from(new Set(listOfProduct
        .map((product: Product) => product.line.name)))
        .map((name: string) => ({ value: name, label: name }))

    const handleChange = (event: any) => {
        setSelected(event)
    }

    return (
        <div className='filter-bar-icons__filter'>
            <ReactSelect
                options={options}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{ Option }}
                onChange={handleChange}
                value={selected}
                placeholder={"Filter"}
            />
        </div>)
}

export default Filter
