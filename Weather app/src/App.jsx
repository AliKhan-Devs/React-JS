// This file contain the main program 
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const locationApiKey = ''; // Your location finder api key here. I would personaly recomend to use .enve folder and keep all secret information there but just for the sack of simplicity i have don it like this.

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        setError('Location access denied try searching');
      }
    );
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover`
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  const findCity = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${locationApiKey}`
      );
      const data = await response.json();
      if (data && data[0]?.name) {
        setCity(data[0].name);
      }
    } catch (err) {
      setError('Failed to fetch city name');
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=1&appid=${locationApiKey}`
      );
      const data = await response.json();
      if (data && data[0]) {
        setLocation({ lat: data[0].lat, lon: data[0].lon });
        setCity(data[0].name);
      } else {
        // setError('City not found');
        setCity("City not found");
        setCity("City not found");
      setData({
        current: {
          weather_code: 11, // "City not found" condition
          temperature_2m: null,
          apparent_temperature: null,
          relative_humidity_2m: null,
          precipitation: null,
          time: new Date().toISOString(),
        }
      });
        
      }
    } catch (err) {
      setError('Search failed');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeatherData(location.lat, location.lon);
      if (!city) findCity(location.lat, location.lon);
    }
  }, [location]);

  return (
    <div className="app">
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {error && <div className="error">{error}</div>}
        {!data ? (
          <LoadingSpinner />
        ) : (
          <WeatherCard data={data} city={city} />
        )}
      </div>
    </div>
  );
}

export default App
