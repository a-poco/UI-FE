import React from 'react'
import { Product } from '../../types';
import "./ListDevices.css"

interface ListDevicesProps {
    listOfProduct: Product[];
}

const ListDevices = ({listOfProduct}: ListDevicesProps) => {
  return (
    <article className='devices' >
      <header className='device-header'>
        <p>Devices</p>
        <p>PRODUCT LINE</p>
        <p>NAME</p>
      </header>
      {listOfProduct.map(product => 
        <div className='list-devices'>
        <p className='list-device__photo'>{<img src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions.sort()[2][0]}x${product.icon.resolutions.sort()[2][1]}.png`} className="product_list_icon" alt="" />}</p>
        <p className='list-device__line'> {product.line.name}</p>
        <p className='list-device__name'>{product.product.name}</p>
        </div>
       )}
    </article>
  )
}

export default ListDevices