export class Today{
    city;
    country;
    temp;
    feels_like;
    description;
    temp_min;
    temp_max;
    pressure;
    humidity;
    icon;
    lon;
    lat;

    constructor(city,country,temp, feels_like, description, temp_min, temp_max, pressure, humidity, icon, lon, lat){
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.feels_like = feels_like;
        this.description = description;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.humidity = humidity;
        this.icon = icon;
        this.lon = lon;
        this.lat = lat;
    }

}