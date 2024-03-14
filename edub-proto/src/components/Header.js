import '../style/Header.css'
import Menubar from "./Menubar";


export default function Header() {
  return(<>
    <div id="header"> 
      <div className='header_l'>
        <div className="logo">
          <h1 className="logo_img">
            <img src="/codewalks_logo.png" alt="로고"/>
          </h1>
        </div>
        <Menubar/>
      </div>
    </div>
  </>)
}