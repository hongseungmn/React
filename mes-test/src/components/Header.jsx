import { MdArrowBackIosNew } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

export default function Header() {
  return (
    <div className="header">
      <div className="go-back-arrow">
        <MdArrowBackIosNew style={{width: "100%", height: "50%"}}/>
      </div>
      <div className="header-title">DEPARTURES</div>
      <div style={{flex: 1}}/>
      <div className="header-time" style={{display:"flex"}}>
        <CiClock1/>
        <div style={{marginLeft: "5px"}}>UTC 10:21</div>
      </div>
      <CiBellOn style={{width: "40px", height: "50px"}}/>
    </div>
  );
}