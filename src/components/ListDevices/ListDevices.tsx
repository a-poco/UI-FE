import React from 'react'
import { Product } from '../../types';
import "./ListDevices.css"

interface ListDevicesProps {
    product: Product;
}

const ListDevices = ({product}: ListDevicesProps) => {
  return (
    <ul className='list-devices'>
        <li>{<img src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions.sort()[2][0]}x${product.icon.resolutions.sort()[2][1]}.png`} className="product_list_icon" alt="" />}</li>
        <li> {product.line.name}</li>
       <li>{product.product.name}</li>
    </ul>
  )
}

export default ListDevices