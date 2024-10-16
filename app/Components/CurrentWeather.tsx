import Image from 'next/image'
import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="current-weather">
          <Image alt="weather" src="/icons/clouds.svg" className="weather-icon" width={100} height={100}/>
          <h2 className="temprature">
            20 <span>°C</span>
          </h2>
          <p className="description">Partly Cloudy</p>
        </div>
  )
}

export default CurrentWeather