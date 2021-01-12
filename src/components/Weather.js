import React, { useState, useEffect } from "react"
import axios from "axios"

const apikey = "6"

export const Weather = () => {
  const [location, setLocation] = useState("")
  const [temp, setTemp] = useState("")

  function convertTemp(kelvin) {
    return Math.round(kelvin * (9 / 5) - 459.67)
  }

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location},276&appid=${apikey}`)
      setTemp(convertTemp(result.data.main.temp))
    }
    fetchWeather()
  }, [location])

  return (
    <form className="weather">
      <input type="text" placeholder="Enter City in Virginia" value={location} onChange={(e) => setLocation(e.target.value)} />
      <p>{temp}</p>
    </form>
  )
}

export default Weather
