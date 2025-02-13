import FlightInfoTitle from "./FlightInfoTitle";

export default function FlightInfoDetail({flightInfo}) {
  
  return (
    <div className="fid">
      <FlightInfoTitle data={flightInfo}/>
    </div>
  );
}