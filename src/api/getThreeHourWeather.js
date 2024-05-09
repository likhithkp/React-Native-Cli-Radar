export const getThreeHourWeatherData = async weatherParams => {
  const {lat, lon} = weatherParams;
  const latitude = lat.toFixed(4);
  const longitude = lon.toFixed(4);
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric`,
    );
    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error('Error fetching next three hour weather data:', error);
    throw error;
  }
};
