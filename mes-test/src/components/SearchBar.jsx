import { FiRefreshCcw } from "react-icons/fi";


export default function SearchBar() {
  return(
    <div className="search-bar">
      <div className="search-bar-row-1">
        <input/>
        <input/>
        <input/>
      </div>
      <div className="search-bar-row-2">
        <input placeholder="편명, 출발지를 입력하세요."/>
        <div className="search-bar-check-all">
          <input type="checkbox"/>
          <div>전체</div>
          <FiRefreshCcw/>
        </div>
      </div>
      <div className="info-tobt">
        <div className="info-tobt-card">
          <div style={{width: "15px", backgroundColor: "rgb(166 166 166)"}}></div>
          <div>TOBT 자동생성</div>
        </div>
        <div className="info-tobt-card">
          <div style={{width: "15px", backgroundColor: "rgb(0 221 6)"}}></div>
          <div>TOBT 정상입력</div>
        </div>
        <div className="info-tobt-card">
          <div style={{width: "15px", backgroundColor: "rgb(255 0 0)"}}></div>
          <div>TOBT 입력/수정필요</div>
        </div>
      </div>
    </div>
  );
}