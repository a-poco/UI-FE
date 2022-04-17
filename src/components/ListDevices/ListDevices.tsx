import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import "./ListDevices.css"

interface ListDevicesProps {
  listOfProduct: Product[];
}

const ListDevices = ({ listOfProduct }: ListDevicesProps) => {
  return (
    <article className='devices' >
      <header className='device-header'>
        <p className='device-header__devices'>{listOfProduct.length} devices</p>
        <p className='device-header__line'>PRODUCT LINE</p>
        <p className='device-header__name'>NAME</p>
      </header>
      {listOfProduct.map(product =>
        <div key={product.key}>
          <Link
            to={`/devices/${product.product.name}`}
            state={product} >
            <div className='list-devices'>
              <p className='list-device__photo'>{<img src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions.sort()[4][0]}x${product.icon.resolutions.sort()[4][1]}.png`} className="product_list_icon" alt="" />}</p>
              <p className='list-device__line'> {product.line.name}</p>
              <p className='list-device__name'>{product.product.name}</p>
            </div>
          </Link>
        </div>
      )}
    </article>
  )
}

export default ListDevices