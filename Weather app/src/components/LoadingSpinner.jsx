// This is loading component. Here you can also use an animaed .gif image instead of the text Loading weather data.....
export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <h2>Loading weather data...</h2>
    </div>
  );
}
