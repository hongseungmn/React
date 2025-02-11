import { FaRegStar } from "react-icons/fa6";
import getFlightInfoCardColor from "../utils/functions/tobt";
import { useNavigate } from "react-router-dom";

export default function FlightInfoCard({ data }) {

  
  // 데이터 매핑을 객체 배열로 변환
  const flightTimes = [
    { key: "EOBT", value: data.eobt },
    { key: "TOBT", value: data.tobt },
    { key: "TSAT", value: data.tsat },
    { key: "TTOT", value: data.ttot }
  ];
  
  // 스타일 계산 미리 저장 (렌더링 최적화)
  const cardStyle = getFlightInfoCardColor(data.eobt, data.tobt, data.tsat, data.ttot);
  
  const navigate = useNavigate();
  // 카드 클릭시 페이지 이동
  function handleCardClick() {
    console.log("Asdf");
    navigate(`/departure/${data.fit}`);
  }
  return (
    <div className="fic">
      {/* Title Section */}
      <div className="fic-title" style={cardStyle}>
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

      {/* Content Section */}
      <div className="fic-content">
        {flightTimes.map(({ key, value }) => (
          <div className="fic-content-info" key={key}>
            <div className="fic-content-title">{key}</div>
            <div className="fic-content-time">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
