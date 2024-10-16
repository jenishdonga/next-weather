import Image from 'next/image'
import React from 'react'

const HourlyWeatherItem = () => {
  return (
      <li className="weather-item">
          <p className="time">00:00</p>
          <Image alt="cloud" src="/icons/clouds.svg" width={100} height={100} className="weather-icon" />
          <p className="temprature">20°</p>
      </li>
  )
}

export default HourlyWeatherItem