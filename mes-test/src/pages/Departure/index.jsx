import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import FlightInfoCard from "../../components/FlightInfoCard";
import { useState } from "react";
import departures_data from "../../utils/mocks/mockData";
import { Link } from "react-router-dom";



export default function Departure() {
  const [flightInfoCards, setFlightInfoCards] = useState(departures_data);
  return (
    <>
      {/* Header Section */}
      <Header/>
      {/* SearchBar Section */}
      <SearchBar/>
      {/* Flight-info-card-list Section */}
      <div className="fic-card-list">
        {flightInfoCards.map((data, index) => <FlightInfoCard key={index} data={data}/>)}
      </div>
    </>
  );
}