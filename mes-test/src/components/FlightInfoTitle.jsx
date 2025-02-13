import { FaRegStar } from "react-icons/fa6";


export default function FlightInfoTitle({data, color = {    backgroundColor : "rgb(245 245 245)",color : "#000"}}) {

  return (
    <>
      <div className="fic-title" style={color}>
        <div className="fic-title-logo"></div>
        <div className="fic-title-info">
          <div className="fic-title-info-row-1">
            <div className="fic-title-flt">{data.flt}</div>
            <div className="fic-title-sobt">SOBT {data.sobt}</div>
          </div>
          <div className="fic-title-info-row-2">
            {data.dest} / {data.typ}, {data.stn}, {data.status}
          </div>
        </div>
        <div className="fit-title-info-star">
          <FaRegStar style={{ width: "100%", height: "100%", color: "#000" }} />
        </div>
      </div>
    </>
  );
}