export const getCityCurrentWeather = async city => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac4db0b006784d0854b9b8be0051879c&units=metric`,
    );
    const data = await result?.json();
    return data;
  } catch {
    console.error('Unable to fetch weather');
  }
};

export const getCityThreeHourWeather = async city => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac4db0b006784d0854b9b8be0051879c&units=metric`,
    );
    const data = await result?.json();
    return data?.list;
  } catch {
    console.error('Unable to fetch weather');
  }
};
