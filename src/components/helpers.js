const getIcon = (weatherType) => {
  let weatherStyle

  switch (weatherType) {
    case 'lightrainday':
      weatherStyle = <i className="fas fa-cloud-rain"></i>
      break
    case 'clear':
      weatherStyle = <i className="fas fa-sun"></i>
      break
    case 'pcloudy':
      weatherStyle = <i className="fa-solid fa-cloud-sun"></i>
      break
    case 'cloudy':
      weatherStyle = <i className="fas fa-cloud"></i>
      break
    case 'snow':
      weatherStyle = <i className="fa-solid fa-snowflake"></i>
      break
    case 'ts':
      weatherStyle = <i className="fas fa-bolt"></i>
      break
    case 'lightrain':
      weatherStyle = <i className="fas fa-cloud-rain"></i>
      break
    case 'rain':
      weatherStyle = <i className="fa-solid fa-cloud-rain"></i>
      break
      case 'ishower':
        weatherStyle = <i className="fa-solid fa-cloud-sun-rain"></i>
        break
    default:
      weatherStyle = <i className="fas fa-sun"></i>
  }
  return weatherStyle
}

const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32
}

const convertToKelvin = (celsius) => {
  return celsius + 273.15
}

const convertUnit = (unit, currentTemp) => {
  let temp
  switch (unit) {
    case 'celsius':
      temp = currentTemp
      break
    case 'fahrenheit':
      temp = convertToFahrenheit(currentTemp)
      break
    case 'kelvin':
      temp = convertToKelvin(currentTemp)
      break
      default:
        temp = currentTemp
  }
  return temp
}

export { getIcon, convertUnit }