interface WeatherData {
    icon: string;
    title: string;
    value?: string;
}

const WeatherWidgetRow = ({icon, title, value}:WeatherData) => {
    return(
        <div className="flex">
            <p>{icon}</p>
            <p>{title}</p>
            <p>{value}</p>
        </div>
    )
}
export default WeatherWidgetRow;