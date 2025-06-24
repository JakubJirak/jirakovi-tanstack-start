interface WeatherData {
    time: string;
    icon: string;
    temp: string;
    minTemp: string;
}

const TodayForecastHour = ({time, icon, temp, minTemp}:WeatherData) => {
    return (
        <div>
            <p>{time}</p>
            <p>{icon}</p>
            <p>{temp}</p>
            <p>{minTemp}</p>
        </div>
    )
}
export default TodayForecastHour;