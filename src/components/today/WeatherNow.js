import React from "react";

export const WeatherNow = ({name,image, current_time, temp, temp_min, temp_max, condition, pressure}) => {
    return (
        <div className="now">
                <span className="now__top">{name} по состоянию на {current_time} </span>
                <div className="now__middle">
                    <div className="now__info">
                        <p className="now__degree">{temp}*</p>
                        <p className="now__condition">{condition}</p>
                        <p className="now__daily">день {temp_min}* - ночь {temp_max}*</p>
                    </div>
                    <div className="now__img">
                        <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
                    </div>
                </div>
                <button className="now__btn">Вероятность снега: {pressure}</button>  
        </div>
    )
}