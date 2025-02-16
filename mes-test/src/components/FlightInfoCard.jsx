import { useNavigate } from "react-router-dom";
import FlightInfoTitle from "./FlightInfoTitle";
import getFlightInfoCardColor from "../utils/functions/tobt";

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
  function handleCardClick(data) {
    navigate(`/departure/${data.flt}`);
  }
  return (
    <div className="fic" onClick={() => handleCardClick(data)}>
      {/* Title Section */}
      <FlightInfoTitle data={data} color={cardStyle}/>
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
