import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import departures_data from "../../utils/mocks/mockData";
import Header from "../../components/Header";
import FlightInfoDetail from "../../components/FlightInfoDetail";


export default function DepartureDetail() {
  const {flt} = useParams(); 
  const [data, setData] = useState(null); //초기값 null

  //경로에서 가져온 flt로 정보 가져오기
  useEffect(() => {
    const filteredData = departures_data.filter((d) => d.flt === flt);
    setData(filteredData.length > 0 ? filteredData[0] : null);
  }, [flt]); //flt가 변경될 때 실행

  
  return (
    <>
      <Header/>
      {data ? <FlightInfoDetail flightInfo={data}/> : <p> 데이터가 없습니다.</p>}
    </>
  );
}