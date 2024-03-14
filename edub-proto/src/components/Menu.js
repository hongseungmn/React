
import { useState } from 'react';
import '../style/Menubar.css'


const MenuListComponent = ({ items }) => {
  return (
    items.map((item, index) => (
      <div key={index} className={item === "" ? "menubar-border" : "menubar-item"}>{item}</div>
    ))
  );
};



export default function Menu({name, list}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (<>
  <div className="menubar-button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {name}
    <div  className='menubar-list' style={ {display : isHovering ? "":"none"}}>
      <MenuListComponent items={list}/>
    </div>
  </div>
  </>)
}