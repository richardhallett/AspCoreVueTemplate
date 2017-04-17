import Vue from 'vue';
import Component from "vue-class-component";
import axios from "axios";

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];

    mounted(): void {
        axios.get('/api/SampleData/WeatherForecasts')
            .then(response => response.data as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
