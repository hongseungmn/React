
import '../style/Menubar.css'


const MenuListComponent = ({ items }) => {
  return (
    items.map((item, index) => (
      <div key={index} className={item === "" ? "menubar-border" : "menubar-item"}>{item}</div>
    ))
  );
};

export default function Menu({name, list}) {
  return (<>
  <div className="menubar-button">
    {name}
    <div  className='menubar-list'>
      <MenuListComponent items={list}/>
    </div>
  </div>
  </>)
}