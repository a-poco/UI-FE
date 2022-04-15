import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import './GridDevices.css'

interface GridDevicesProps {
  listOfProduct: Product[];
}


const GridDevices = ({listOfProduct}: GridDevicesProps) => {
  return (
   <article className='grid-devices'>
     {listOfProduct.map(product => 
      <Link className='profileCard__chat profile' to='/Device'>
          <div className='profileCard'>
          <figure className='grid-devices__figure'>
            {<img src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions.sort()[1][0]}x${product.icon.resolutions.sort()[1][1]}.png`} className="grid-devices__photo" alt="" />}
          </figure>
          <section className='grid-devices__description'>
            <p className='grid-devices-description__name'>{product.product.name}</p>
            <p className='grid-devices-description__line'> {product.line.name}</p>
          </section>
        </div>
       </Link>
      )}
   </article>
)
}

export default GridDevices
