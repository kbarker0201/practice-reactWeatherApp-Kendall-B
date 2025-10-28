import { useState, useEffect } from "react";
import weatherData from "./WeatherData";

function CityList() {
    const [cities, setCities] = useState("");
    //const [selectedCity, setSelectedCity] = useState("");
    //const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);
/*     const <= [{city:"New York"}, "London", "Tokyo"]; */

    // Array of the names of the cities
    const cityNames = Object.keys(weatherData);


    const fetchCity = () => {
        if (!cities) {
            setError("Please select a City!"); // Show error if no city is picked
            return;
        }
        setError(""); // Clear any previous error
        setIsLoading(true); // Show loading message

        setTimeout(() => {   // Simulate an API call with setTimeout (waits 1.5 seconds)
            setCities(weatherData[cities]); // Set movies for the selected genre
            setIsLoading(false); // Hide loading spinner/message
        }, 1500);
        // setCities(<WeatherData></WeatherData>[selectedCity]); // Set city

    };

    return (
        <>
            <h1>City Forecast</h1>
            <h2>Please select a city:</h2>
            {isLoading && <p>Loading movies...</p>}
            <ul>
                <li onClick={fetchCity}>{cityNames[0]}</li>
                <li onClick={fetchCity}>{cityNames[1]}</li>
                <li onClick={fetchCity}>{cityNames[2]}</li>
            </ul>
        </>
    );
}



export default CityList;

