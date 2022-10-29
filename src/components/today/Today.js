import React from "react";
import { WeatherNow } from "../today/WeatherNow";
import spinner from '../../assets/images/start.svg'

export const Today = ({data1, start}) => {

    const currentTime = () => {
        const date = new Date()
        return `${date.getHours()}:${date.getMinutes()}`
    }

    const temperatureConverter = (temp) => {
        return Math.round(temp - 273.15)
    }

    return (
        <section className="today">
            <div className="container today__grid">
                {
                    start && <img src={spinner} alt=''/>
                }

                {
                    data1?.main &&  <WeatherNow 
                        name = {data1.name}
                        current_time = {currentTime}
                        temp = {temperatureConverter(data1.main.temp)}
                        condition = {data1?.weather[0].main}
                        temp_min = {temperatureConverter(data1.main.temp_min)}
                        temp_max = {temperatureConverter(data1.main.temp_max)}
                        pressure = {data1.main.pressure}
                        image = {data1.weather[0].icon}
                        />
                }
            </div>
        </section>
    )
}