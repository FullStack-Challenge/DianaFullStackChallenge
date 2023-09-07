export class Daily{
    temp;
    temp_min;
    temp_max;
    pressure;
    humidity;
    main;
    description;
    icon;
   
    constructor(temp, temp_min, temp_max, pressure, humidity, main, description, icon){
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.humidity = humidity;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
}