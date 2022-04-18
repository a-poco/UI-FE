import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Product } from '../../types';
import { IoChevronBackSharp } from "react-icons/io5";
import './Device.css'

const Device: React.FunctionComponent = () => {
  const { deviceId } = useParams();
  const location = useLocation();

  const product: Product = location.state as Product ?? undefined

  const maxPower = product.unifi?.network?.radios?.na?.maxPower ?? "-"
  const maxSpeedMegabitsPerSecond = product.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond ?? "-"
  const noPorts = product.unifi?.network?.numberOfPorts ?? "-"

  return (
    <div>
      <header className='device-name-back'>
        <Link className='device__back' to={'/'}><IoChevronBackSharp /></Link>
        <p className='device__name'>{product.product.name}</p>
      </header>
      <main className='device-card'>
        <figure>
          {<img
            src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions.sort()[3][0]}x${product.icon.resolutions.sort()[3][1]}.png`}
            className="device-card__photo"
            alt=""
          />}
        </figure>
        <article className='device-card-section'>
          <section className='device-card__info'>
            <p className='device-card-info__title info'>Product line</p>
            <p className='device-card-info__title info'>ID</p>
            <p className='device-card-info__title info'>Name</p>
            <p className='device-card-info__title info'>Short name</p>
            <p className='device-card-info__title info'>Max. power</p>
            <p className='device-card-info__title info'>Speed</p>
            <p className='device-card-info__title info'>Number of ports</p>
          </section>
          <section className='device-card__info'>
            <p className='device-card-info__title'> {!deviceId ? "Nothing to see here" : (!location ? "Nothing to see here" : product.line.name)}</p>
            <p className='device-card-info__title'>{product.line.id}</p>
            <p className='device-card-info__title'>{product.product.name}</p>
            <p className='device-card-info__title'>{product.shortnames}</p>
            <p className='device-card-info__title'>{maxPower} w</p>
            <p className='device-card-info__title'>{maxSpeedMegabitsPerSecond} Mbps</p>
            <p className='device-card-info__title'>{noPorts}</p>
          </section>
        </article>
      </main>
    </div>
  )
}

export default Device
