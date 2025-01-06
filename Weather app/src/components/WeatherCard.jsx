// Design of the weather card

import { useState, useEffect } from 'react';
import { WiHumidity, WiThermometer, WiRaindrops } from 'react-icons/wi';
import { getWeatherInfo } from '../utils/weatherUtils';


export default function WeatherCard({ data, city }) {
  const { weatherText, icon, background } = getWeatherInfo(data.current);
  const date = new Date(data.current.time).toLocaleString();

  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setImageKey((prevKey) => prevKey + 1);
  }, [icon]);

  const style = {
    height: (weatherText === 'City not found') ? '200px' : '',
    width: (weatherText === 'City not found') ? '200px' : '',
  };

  return (
    <div className="weather-card" style={{ backgroundImage: `url(${background})` }}>
      <div className="weather-info">
        <h2 className="city">{city}</h2>
        <div className="main-temp">
          <img key={imageKey} src={icon} alt={weatherText} className="weather-icon" style={style} />
          <span className="temperature">{Math.round(data.current.temperature_2m)}°C</span>
        </div>
        <div className="weather-description">{weatherText}</div>
        <div className="details">
          <div className="detail">
            <WiThermometer className="detail-icon" />
            <span className="detail-label">Feels like</span>
            <span className="detail-value">{Math.round(data.current.apparent_temperature)}°C</span>
          </div>
          <div className="detail">
            <WiHumidity className="detail-icon" />
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.current.relative_humidity_2m}%</span>
          </div>
          <div className="detail">
            <WiRaindrops className="detail-icon" />
            <span className="detail-label">Precipitation</span>
            <span className="detail-value">{data.current.precipitation}mm</span>
          </div>
        </div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
}
