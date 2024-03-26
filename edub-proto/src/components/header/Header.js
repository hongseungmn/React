import Menubar from "./Menubar";


export default function Header() {
  return(<>
    <div id="header"> 
      <div className='header_l'>
        <div className="logo">
          <h4 className="logo_img">
            <img src="/codewalks_logo.png" alt="로고"/>
          </h4>
        </div>
        <Menubar/>
      </div>
      <div className='header_r'>
        <div className='top-right-btn'>
          <span className="material-symbols-outlined">library_add</span>
          라이브러리 추가
        </div>
        <div className='top-right-btn'><span className="material-icons">dark_mode</span></div>
        <div className='top-right-btn'><span className="material-icons">light_mode</span></div>
      </div>
    </div>
  </>)
}