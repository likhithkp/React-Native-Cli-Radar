export const getWeather = async () => {
  try {
    const result = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=madikeri&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
