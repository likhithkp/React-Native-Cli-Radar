import axios from 'axios';

export const getThreeHourWeatherData = async () => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast?q=madikeri&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
    );
    return response.data.list;
  } catch (error) {
    console.error('Error fetching next three hour weather data:', error);
    throw error;
  }
};
